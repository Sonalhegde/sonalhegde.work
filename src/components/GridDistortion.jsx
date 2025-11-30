import React, { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform vec3 uColor;

varying vec2 vUv;

float grid(vec2 st, float res) {
  vec2 grid = fract(st * res);
  return (step(res, grid.x) * step(res, grid.y));
}

void main() {
  vec2 st = gl_FragCoord.xy / iResolution.xy;
  st.x *= iResolution.x / iResolution.y;

  vec2 mouse = iMouse.xy / iResolution.xy;
  mouse.x *= iResolution.x / iResolution.y;

  float dist = distance(st, mouse);
  float strength = smoothstep(0.4, 0.0, dist);

  st += (st - mouse) * strength * 0.3;

  // Grid pattern
  float gridSize = 20.0;
  vec2 gridSt = fract(st * gridSize);
  
  // Lines
  float thickness = 0.05;
  float x = smoothstep(thickness, 0.0, abs(gridSt.x - 0.5));
  float y = smoothstep(thickness, 0.0, abs(gridSt.y - 0.5));
  
  float lines = max(x, y);
  
  // Dots
  float dotSize = 0.1;
  float dots = smoothstep(dotSize, 0.0, distance(gridSt, vec2(0.5)));

  vec3 color = uColor * (lines + dots * 0.5);
  
  // Fade edges
  float fade = 1.0; // Implement fading if needed

  gl_FragColor = vec4(color, 1.0);
}
`;

// Improved Fragment Shader for a better look
const fragmentShader2 = `
precision highp float;
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform vec3 uColor;

varying vec2 vUv;

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    float aspect = iResolution.x / iResolution.y;
    uv.x *= aspect;
    
    vec2 mouse = iMouse.xy / iResolution.xy;
    mouse.x *= aspect;
    
    // Distortion
    float dist = distance(uv, mouse);
    float strength = smoothstep(0.5, 0.0, dist);
    uv -= (uv - mouse) * strength * 0.15;
    
    // Grid
    vec2 grid = fract(uv * 30.0);
    float line = smoothstep(0.02, 0.0, abs(grid.x - 0.5)) + smoothstep(0.02, 0.0, abs(grid.y - 0.5));
    
    // Dots
    float dot = smoothstep(0.05, 0.0, distance(grid, vec2(0.5)));
    
    vec3 finalColor = uColor * (line * 0.3 + dot * 0.8);
    
    // Vignette / Fade
    float vignette = smoothstep(1.5, 0.5, distance(uv, vec2(0.5 * aspect, 0.5)));
    
    gl_FragColor = vec4(finalColor, 1.0); // No alpha for background
}
`;

export default function GridDistortion({
    gridSize = 30,
    mouseStrength = 0.2,
    color = '#ffffff',
    className,
    style,
}) {
    const containerRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const ctn = containerRef.current;
        if (!ctn) return;

        const renderer = new Renderer({ alpha: true });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);

        const geometry = new Triangle(gl);

        const program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader2,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height) },
                iMouse: { value: new Color(0, 0, 0) },
                uColor: { value: new Color(color) },
            },
            transparent: true,
        });

        const mesh = new Mesh(gl, { geometry, program });

        function resize() {
            if (!ctn) return;
            renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
            program.uniforms.iResolution.value = new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height);
        }

        window.addEventListener('resize', resize);
        resize();

        let animationId;
        function update(t) {
            animationId = requestAnimationFrame(update);
            program.uniforms.iTime.value = t * 0.001;

            // Lerp mouse
            program.uniforms.iMouse.value[0] += (mouseRef.current.x - program.uniforms.iMouse.value[0]) * 0.1;
            program.uniforms.iMouse.value[1] += (mouseRef.current.y - program.uniforms.iMouse.value[1]) * 0.1;

            renderer.render({ scene: mesh });
        }
        animationId = requestAnimationFrame(update);

        ctn.appendChild(gl.canvas);

        const handleMouseMove = (e) => {
            const rect = ctn.getBoundingClientRect();
            mouseRef.current = {
                x: (e.clientX - rect.left) * (gl.canvas.width / rect.width),
                y: (gl.canvas.height - (e.clientY - rect.top) * (gl.canvas.height / rect.height)) // Flip Y
            };
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
            if (ctn.contains(gl.canvas)) ctn.removeChild(gl.canvas);
        };
    }, [color]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                ...style
            }}
        />
    );
}

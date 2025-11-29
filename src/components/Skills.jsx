import React, { useEffect, useRef, useState } from 'react';
import { Cpu } from 'lucide-react';

const Skills = ({ data, theme, darkMode }) => {
    const containerRef = useRef(null);
    const [nodes, setNodes] = useState([]);
    const canvasRef = useRef(null);

    // Initialize nodes with random positions
    useEffect(() => {
        if (!containerRef.current) return;

        const width = containerRef.current.offsetWidth;
        const height = 600; // Fixed height for the container

        const newNodes = data.skills.map((skill, i) => ({
            id: i,
            text: skill,
            x: Math.random() * (width - 200) + 100,
            y: Math.random() * (height - 100) + 50,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        }));

        setNodes(newNodes);
    }, [data.skills]);

    // Animation loop
    useEffect(() => {
        if (nodes.length === 0 || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const animate = () => {
            if (!containerRef.current) return;

            const width = containerRef.current.offsetWidth;
            const height = 600;

            canvas.width = width;
            canvas.height = height;

            ctx.clearRect(0, 0, width, height);

            // Update node positions
            const updatedNodes = nodes.map(node => {
                let { x, y, vx, vy } = node;

                x += vx;
                y += vy;

                // Bounce off walls
                if (x <= 50 || x >= width - 50) vx *= -1;
                if (y <= 20 || y >= height - 20) vy *= -1;

                return { ...node, x, y, vx, vy };
            });

            // Draw connections
            ctx.strokeStyle = darkMode ? 'rgba(96, 165, 250, 0.2)' : 'rgba(75, 85, 99, 0.2)';
            ctx.lineWidth = 1;

            updatedNodes.forEach((node, i) => {
                updatedNodes.forEach((otherNode, j) => {
                    if (i >= j) return; // Avoid double drawing

                    const dx = node.x - otherNode.x;
                    const dy = node.y - otherNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.stroke();
                    }
                });
            });

            // Update state for React to render div positions (optional, but might be heavy)
            // Instead, we'll just use the ref to update DOM directly for performance if needed,
            // but for < 20 items, React state might be okay or we can just use the canvas for lines 
            // and let the divs float with CSS animation? 
            // Actually, to keep lines connected to divs, we need to sync them.
            // Let's update the refs of the divs directly to avoid re-renders.

            updatedNodes.forEach(node => {
                const el = document.getElementById(`skill-node-${node.id}`);
                if (el) {
                    el.style.transform = `translate(${node.x}px, ${node.y}px) translate(-50%, -50%)`;
                }
            });

            // Keep the loop going by updating local variables, but we need to persist state?
            // Actually, modifying the 'nodes' array in place for the animation loop is better for performance
            // than calling setNodes every frame.

            nodes.forEach((node, i) => {
                node.x = updatedNodes[i].x;
                node.y = updatedNodes[i].y;
                node.vx = updatedNodes[i].vx;
                node.vy = updatedNodes[i].vy;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [nodes, darkMode]);

    return (
        <section id="skills" className="container mx-auto px-4 py-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8 group">
                <div className={`p-2 border-2 ${darkMode ? 'border-blue-400 bg-blue-900/30' : 'border-gray-700 bg-gray-600/30'} glass-panel`}>
                    <Cpu size={32} className={darkMode ? "text-blue-400" : "text-gray-700"} />
                </div>
                <h2 className={`text-4xl uppercase tracking-widest ${theme.accentText}`}>
                    Skills & Technologies
                </h2>
                <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-blue-900' : 'bg-gray-600'}`}></div>
            </div>

            <div
                ref={containerRef}
                className={`relative w-full h-[600px] border-2 rounded-xl overflow-hidden ${darkMode ? 'border-gray-700 bg-gray-900/50' : 'border-gray-300 bg-gray-100/50'} shadow-inner`}
            >
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                />

                {nodes.map((skill) => (
                    <div
                        key={skill.id}
                        id={`skill-node-${skill.id}`}
                        className={`absolute top-0 left-0 px-4 py-2 rounded-lg border-2 shadow-lg backdrop-blur-sm transition-colors duration-300 cursor-default hover:scale-110 hover:z-10 ${darkMode
                                ? 'bg-gray-800/80 border-blue-500/50 text-blue-100 hover:border-blue-400 hover:shadow-blue-500/30'
                                : 'bg-white/80 border-gray-400/50 text-gray-800 hover:border-gray-600 hover:shadow-gray-500/30'
                            }`}
                        style={{
                            transform: `translate(${skill.x}px, ${skill.y}px) translate(-50%, -50%)`,
                            willChange: 'transform'
                        }}
                    >
                        <span className="font-bold text-sm md:text-base whitespace-nowrap">
                            {skill.text}
                        </span>
                    </div>
                ))}
            </div>

            <div className={`text-center mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Nodes are interconnected within the neural network
            </div>
        </section>
    );
};

export default Skills;

import React, { useRef } from 'react';
import { MapPin, Github, Linkedin } from 'lucide-react';
import MinecraftBtn from './MinecraftBtn';
import VariableProximity from './VariableProximity';

const Hero = ({ data, theme, darkMode }) => {
    const containerRef = useRef(null);

    return (
        <header
            id="hero"
            ref={containerRef}
            className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12 relative"
        >
            {/* Left side text */}
            <div className="flex-1 space-y-6 z-10">
                <div className="text-7xl md:text-9xl mb-4 leading-none text-shadow-mc font-bold tracking-tighter cursor-default">
                    <VariableProximity
                        label="Sonal Hegde"
                        className="variable-proximity-demo"
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 900, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                    />
                </div>
                <h2
                    className={`text-3xl md:text-5xl uppercase tracking-wider font-bold text-cyan-400`}
                >
                    Full‑Stack Developer & Designer
                </h2>
                <h3 className={`text-2xl md:text-3xl ${theme.mutedText} tracking-wide`}>{data.title}</h3>
                <div className="flex items-center gap-4 text-2xl opacity-90 text-white">
                    <MapPin size={24} />
                    <span>{data.location}</span>
                </div>
                {/* Social buttons */}
                <div className="flex gap-4 pt-6 flex-wrap">
                    <a href={data.socials.github} target="_blank" rel="noreferrer">
                        <MinecraftBtn variant={darkMode ? 'primary' : 'accent'}>
                            <div className="flex items-center gap-2">
                                <Github size={20} /> GitHub
                            </div>
                        </MinecraftBtn>
                    </a>
                    <a href={data.socials.linkedin} target="_blank" rel="noreferrer">
                        <MinecraftBtn variant={darkMode ? 'accent' : 'primary'}>
                            <div className="flex items-center gap-2">
                                <Linkedin size={20} /> LinkedIn
                            </div>
                        </MinecraftBtn>
                    </a>
                    <a href={data.socials.calendly} target="_blank" rel="noreferrer">
                        <MinecraftBtn variant="danger">Book Meeting</MinecraftBtn>
                    </a>
                </div>
            </div>

            {/* Right side avatar */}
            <div className="flex-1 flex justify-center z-10">
                <div
                    className={`relative w-64 h-80 border-4 ${darkMode ? 'border-white bg-gray-800' : 'border-black bg-orange-400'} p-4 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300`}
                >
                    <img
                        src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${data.name}&backgroundColor=b6e3f4`}
                        alt={data.name}
                        className="w-full h-full object-cover border-2 border-black/20"
                        style={{ imageRendering: 'pixelated' }}
                    />
                    <div className="absolute -bottom-6 -right-6 bg-yellow-400 border-4 border-black p-2 rotate-12">
                        <span className="text-black font-bold text-xl">Lvl 21</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;

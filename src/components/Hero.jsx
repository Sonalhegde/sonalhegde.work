import React from 'react';
import { MapPin, Github, Linkedin, Mail } from 'lucide-react';
import MinecraftBtn from './MinecraftBtn';

const Hero = ({ data, theme, darkMode, accentColor }) => {
    return (
        <header id="hero" className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
                <h1 className="text-7xl md:text-9xl mb-4 leading-none text-shadow-mc font-bold tracking-tighter">
                    SONAL HEGDE
                </h1>
                <h2 className={`text-3xl md:text-5xl ${theme.accentText} uppercase tracking-wider font-bold`}>
                    SONALHEGDE.WORK
                </h2>
                <h3 className={`text-2xl md:text-3xl ${theme.mutedText} tracking-wide`}>
                    {data.title}
                </h3>
                <div className="flex items-center gap-4 text-2xl opacity-90">
                    <MapPin size={24} />
                    <span>{data.location}</span>
                </div>

                <div className="flex gap-4 pt-6 flex-wrap">
                    <a href={data.socials.github} target="_blank" rel="noreferrer">
                        <MinecraftBtn variant={darkMode ? "primary" : "accent"}>
                            <div className="flex items-center gap-2"><Github size={20} /> GitHub</div>
                        </MinecraftBtn>
                    </a>
                    <a href={data.socials.linkedin} target="_blank" rel="noreferrer">
                        <MinecraftBtn variant={darkMode ? "accent" : "primary"}>
                            <div className="flex items-center gap-2"><Linkedin size={20} /> LinkedIn</div>
                        </MinecraftBtn>
                    </a>
                    <a href={data.socials.calendly} target="_blank" rel="noreferrer">
                        <MinecraftBtn variant="danger">
                            Book Meeting
                        </MinecraftBtn>
                    </a>
                </div>
            </div>

            {/* Character Avatar / Visual */}
            <div className="flex-1 flex justify-center">
                <div className={`relative w-64 h-80 border-4 ${darkMode ? 'border-white bg-gray-800' : 'border-black bg-orange-400'} p-4 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300`}>
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

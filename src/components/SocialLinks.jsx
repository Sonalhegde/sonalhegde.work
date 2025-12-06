import React from 'react';
import { Mail, Linkedin, Github, Music } from 'lucide-react';

const SocialLinks = ({ darkMode }) => {
    const socials = [
        { icon: Mail, href: "mailto:sonalhhegde@gmail.com", color: darkMode ? "text-gray-400 hover:text-cyan-400" : "text-gray-600 hover:text-cyan-600", borderColor: darkMode ? "hover:border-cyan-400/50" : "hover:border-cyan-600/50" },
        { icon: Linkedin, href: "https://linkedin.com/in/sonalhegde", color: darkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600", borderColor: darkMode ? "hover:border-blue-400/50" : "hover:border-blue-600/50" },
        { icon: Github, href: "https://github.com/Sonalhegde", color: darkMode ? "text-gray-400 hover:text-purple-400" : "text-gray-600 hover:text-purple-600", borderColor: darkMode ? "hover:border-purple-400/50" : "hover:border-purple-600/50" },
        { icon: Music, href: "https://open.spotify.com/user/sonalhegde", color: darkMode ? "text-gray-400 hover:text-emerald-400" : "text-gray-600 hover:text-emerald-600", borderColor: darkMode ? "hover:border-emerald-400/50" : "hover:border-emerald-600/50" }
    ];

    return (
        <div className="fixed bottom-8 right-8 z-40">
            <div className="flex flex-col gap-4">
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-3 rounded-full transition-all duration-300 hover:-translate-x-2 hover:scale-125 glass-panel border-2 border-gray-600/30 ${social.color} ${social.borderColor}`}
                    >
                        <social.icon size={24} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialLinks;

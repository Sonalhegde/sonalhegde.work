import React from 'react';
import { Mail, Linkedin, Github, Music } from 'lucide-react';

const SocialLinks = ({ darkMode }) => {
    const socials = [
        { icon: Mail, href: "mailto:sonalhhegde@gmail.com", color: darkMode ? "hover:text-red-400" : "hover:text-red-600" },
        { icon: Linkedin, href: "https://linkedin.com/in/sonalhegde", color: darkMode ? "hover:text-blue-400" : "hover:text-blue-600" },
        { icon: Github, href: "https://github.com/Sonalhegde", color: darkMode ? "hover:text-gray-300" : "hover:text-gray-700" },
        { icon: Music, href: "https://open.spotify.com/user/sonalhegde", color: darkMode ? "hover:text-green-400" : "hover:text-green-600" }
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
                        className={`p-3 rounded-full transition-all duration-300 hover:-translate-x-2 hover:scale-125 glass-panel ${social.color}`}
                    >
                        <social.icon size={24} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialLinks;

import React from 'react';
import { User } from 'lucide-react';

const About = ({ data, theme, darkMode }) => {
    return (
        <section id="about" className="container mx-auto px-4 py-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 border-2 ${darkMode ? 'border-blue-400 bg-blue-900/30' : 'border-gray-700 bg-gray-600/30'} glass-panel`}>
                    <User size={32} className={darkMode ? "text-blue-400" : "text-gray-700"} />
                </div>
                <h2 className={`text-4xl uppercase tracking-widest ${theme.accentText}`}>
                    About Me
                </h2>
                <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-blue-900' : 'bg-gray-600'}`}></div>
            </div>

            <div className={`p-8 border ${theme.cardBorder} ${theme.cardBg} relative shadow-lg`}>
                <p className="text-2xl md:text-3xl leading-relaxed">
                    {data.about}
                </p>
            </div>
        </section>
    );
};

export default About;

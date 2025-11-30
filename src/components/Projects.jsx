import React from 'react';
import { Code, Cpu } from 'lucide-react';

const Projects = ({ data, theme, darkMode }) => {
    return (
        <section id="projects" className="container mx-auto px-4 py-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8 group">
                <div className={`p-2 border-2 ${darkMode ? 'border-blue-400 bg-blue-900/30' : 'border-gray-700 bg-gray-600/30'} glass-panel rounded-lg`}>
                    <Code size={32} className={darkMode ? "text-blue-400" : "text-gray-700"} />
                </div>
                <h2 className={`text-4xl uppercase tracking-widest ${theme.accentText}`}>
                    Projects
                </h2>
                <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-blue-900' : 'bg-gray-600'}`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.projects.map((project, index) => (
                    <div
                        key={index}
                        className={`group relative ${theme.cardBg} border-2 ${darkMode ? 'border-blue-400/50 hover:border-blue-400 shadow-lg shadow-blue-500/20' : 'border-gray-600/50 hover:border-gray-700 shadow-lg shadow-gray-600/20'} rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105`}
                    >
                        {/* Project Thumbnail */}
                        {project.img && (
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-56 object-cover object-center"
                            />
                        )}
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className={`px-4 py-2 text-sm font-bold rounded-full border-2 ${darkMode ? 'bg-blue-500/30 text-blue-200 border-blue-400' : 'bg-gray-600/30 text-gray-100 border-gray-700'}`}>
                                    {project.type}
                                </span>
                                <Cpu size={28} className={darkMode ? "text-blue-400" : "text-gray-700"} />
                            </div>

                            <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {project.title}
                            </h3>

                            <p className={`text-base md:text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className={`text-sm px-3 py-1 rounded-full font-medium ${darkMode ? 'bg-gray-800/80 text-blue-300 border border-blue-500/30' : 'bg-gray-200/80 text-gray-800 border border-gray-400/30'}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`text-center mt-8 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>For more details, feel free to <a href="#contact" className={`font-bold underline ${theme.accentText}`}>contact me</a> or connect on <a href="https://linkedin.com/in/sonalhegde" target="_blank" rel="noreferrer" className={`font-bold underline ${theme.accentText}`}>LinkedIn</a>.</p>
            </div>
        </section>
    );
};

export default Projects;

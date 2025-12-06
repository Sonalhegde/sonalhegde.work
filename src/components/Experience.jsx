import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = ({ theme, darkMode }) => {
    const experiences = [
        {
            id: 1,
            organization: "CSI NMAMIT",
            role: "Social Media Head",
            period: "2025 - Present",
            logo: "/images/csi.png",
            type: "Leadership",
            description: "Leading social media strategy and content creation"
        },
        {
            id: 2,
            organization: "Advanced Communication Students Association",
            role: "Joint Treasurer",
            period: "2025 - Present",
            logo: "/images/acsa.png",
            type: "Leadership",
            description: "Managing finances and budgeting for student activities"
        },
        {
            id: 3,
            organization: "Masirat Technologies, Muscat",
            role: "Upcoming Intern",
            period: "Starting Soon",
            logo: "/images/masirat.png",
            type: "Internship",
            description: "Technology internship in Muscat, Oman"
        }
    ];

    return (
        <section id="experience" className="container mx-auto px-4 py-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8 group">
                <div className={`p-2 border-2 ${darkMode ? 'border-rose-400 bg-rose-900/30' : 'border-gray-700 bg-gray-600/30'} glass-panel rounded-lg`}>
                    <Briefcase size={32} className={darkMode ? "text-rose-400" : "text-gray-700"} />
                </div>
                <h2 className={`text-4xl uppercase tracking-widest ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Experience
                </h2>
                <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-rose-900/50' : 'bg-gray-600'}`}></div>
            </div>

            {/* Horizontal Scrolling Container */}
            <div className="relative">
                <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-transparent">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className={`min-w-[350px] md:min-w-[400px] p-8 border-2 rounded-xl transition-all duration-300 snap-center flex-shrink-0 hover:scale-105 ${darkMode ? 'bg-gray-900/80 border-rose-400/50 hover:border-rose-400 shadow-lg hover:shadow-rose-500/30' : 'bg-white/50 border-gray-600/50 hover:border-gray-700 shadow-lg hover:shadow-gray-600/20'}`}
                        >
                            {/* Logo */}
                            <div className="flex justify-center mb-6">
                                <div className={`w-32 h-32 flex items-center justify-center bg-white/90 rounded-xl p-3 border-2 ${darkMode ? 'border-rose-400/50 shadow-lg shadow-rose-400/30' : 'border-gray-600/50 shadow-lg shadow-gray-600/30'}`}>
                                    <img
                                        src={exp.logo}
                                        alt={exp.organization}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Type Badge */}
                            <div className={`inline-block px-4 py-2 mb-4 text-sm font-bold rounded-full ${darkMode ? 'bg-rose-500/30 text-rose-200 border-2 border-rose-400 shadow-lg shadow-rose-500/30' : 'bg-gray-600/30 text-gray-100 border-2 border-gray-700 shadow-lg shadow-gray-600/30'}`}>
                                {exp.type}
                            </div>

                            {/* Organization */}
                            <h3 className={`text-2xl font-bold mb-3 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {exp.organization}
                            </h3>

                            {/* Role */}
                            <p className={`text-xl mb-4 font-semibold ${darkMode ? 'text-rose-300' : 'text-rose-600'}`}>
                                {exp.role}
                            </p>

                            {/* Description */}
                            <p className={`mb-4 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {exp.description}
                            </p>

                            {/* Period */}
                            <div className={`flex items-center gap-2 border-t pt-4 ${darkMode ? 'border-rose-400/30 text-gray-400' : 'border-gray-600/30 text-gray-600'}`}>
                                <Calendar size={18} />
                                <span className="text-sm font-medium">{exp.period}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className={`text-center mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    ← Scroll horizontally to view all →
                </div>
            </div>
        </section>
    );
};

export default Experience;

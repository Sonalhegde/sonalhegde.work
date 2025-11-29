import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Events = ({ data, theme, darkMode }) => {
    return (
        <section id="events" className="container mx-auto px-4 py-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8 group">
                <div className={`p-2 border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-orange-300 border-red-900'}`}>
                    <Award size={32} className={darkMode ? "text-green-400" : "text-red-900"} />
                </div>
                <h2 className={`text-4xl uppercase tracking-widest ${darkMode ? 'text-gray-100 text-shadow-mc' : 'text-black'}`}>
                    Achievements & Events
                </h2>
                <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-gray-700' : 'bg-red-900'}`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.events.map((event, index) => (
                    <div key={index} className={`p-6 border-4 ${theme.cardBorder} ${theme.cardBg} transform hover:-translate-y-2 transition-transform duration-200 shadow-lg`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-black/20 rounded-sm">
                                <Calendar size={24} />
                            </div>
                            <span className={`text-lg px-2 py-1 ${darkMode ? 'bg-green-900 text-green-300' : 'bg-yellow-200 text-red-900'}`}>2025</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 uppercase">{event.name}</h3>
                        <p className={`text-xl font-bold mb-2 ${theme.accentText}`}>{event.rank}</p>
                        <p className="opacity-80 mb-4">{event.location}</p>
                        <p className="text-lg leading-tight">{event.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;

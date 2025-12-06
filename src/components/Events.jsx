import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Events = ({ data, theme, darkMode }) => {
    return (
        <section id="events" className="container mx-auto px-4 py-16 scroll-mt-20">
             <div className="flex items-center gap-3 mb-8 group">
                 <div className={`p-2 border-2 ${darkMode ? 'border-emerald-400 bg-emerald-900/30' : 'border-gray-700 bg-gray-600/30'} glass-panel rounded-lg`}>
                     <Award size={32} className={darkMode ? "text-emerald-400" : "text-gray-700"} />
                 </div>
                 <h2 className={`text-4xl uppercase tracking-widest ${darkMode ? 'text-white text-shadow-mc' : 'text-gray-900'}`}>
                     Achievements & Events
                 </h2>
                 <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-emerald-900/50' : 'bg-gray-600'}`}></div>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.events.map((event, index) => (
                    <div key={index} className={`p-6 border-2 transform hover:-translate-y-2 transition-all duration-300 rounded-lg shadow-lg ${darkMode ? 'border-emerald-400/50 bg-gray-900/80 hover:border-emerald-400 hover:shadow-emerald-500/20' : 'border-gray-600/50 bg-white/50 hover:border-gray-700 hover:shadow-gray-600/20'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2 rounded-lg ${darkMode ? 'bg-emerald-400/20' : 'bg-gray-600/20'}`}>
                                <Calendar size={24} className={darkMode ? 'text-emerald-400' : 'text-gray-700'} />
                            </div>
                            <span className={`text-lg px-3 py-1 rounded-full font-bold ${darkMode ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/50' : 'bg-blue-200 text-blue-900 border border-blue-400/50'}`}>2025</span>
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 uppercase ${darkMode ? 'text-white' : 'text-gray-900'}`}>{event.name}</h3>
                        <p className={`text-xl font-bold mb-2 ${darkMode ? 'text-emerald-300' : theme.accentText}`}>{event.rank}</p>
                        <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{event.location}</p>
                        <p className={`text-lg leading-tight ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{event.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;

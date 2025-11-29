import React from 'react';
import { Camera } from 'lucide-react';

const Photography = ({ theme, darkMode }) => {
    const photos = [
        {
            id: 1,
            src: "/images/photo1.png",
            title: "Coastal Sunset",
            description: "Traditional gathering at the beach during golden hour, capturing the essence of Omani coastal culture.",
            location: "Oman 🇴🇲"
        },
        {
            id: 2,
            src: "/images/photo2.png",
            title: "Beach Football",
            description: "Local youth playing football on the sandy shores, showcasing the vibrant sports culture of the region.",
            location: "Oman 🇴🇲"
        }
    ];

    return (
        <section id="photography" className="container mx-auto px-4 py-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8 group">
                <div className={`p-2 border-2 ${darkMode ? 'border-cyan-400 bg-cyan-900/30' : 'border-purple-500 bg-purple-900/30'} glass-panel`}>
                    <Camera size={32} className={darkMode ? "text-cyan-400" : "text-purple-500"} />
                </div>
                <h2 className={`text-4xl uppercase tracking-widest ${theme.accentText}`}>
                    Photography
                </h2>
                <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-cyan-900' : 'bg-purple-900'}`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className={`${theme.cardBg} overflow-hidden border ${theme.cardBorder} hover:scale-105 transition-all duration-300 group`}
                    >
                        <div className="relative overflow-hidden h-96">
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{photo.title}</h3>
                                    <p className="text-sm opacity-90">{photo.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className={`text-2xl font-bold mb-2 ${theme.accentText}`}>
                                {photo.title}
                            </h3>
                            <p className="text-gray-300 mb-3">
                                {photo.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Camera size={16} />
                                <span>{photo.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Photography;

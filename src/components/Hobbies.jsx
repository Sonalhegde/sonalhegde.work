import React from 'react';
import { Camera, MapPin } from 'lucide-react';

const Hobbies = ({ theme, darkMode }) => {
    // Placeholder images for now
    const photos = Array(10).fill(null).map((_, i) => ({
        id: i,
        url: `https://picsum.photos/seed/${i + 100}/400/400`, // Random placeholder
        desc: i % 2 === 0 ? "Exploring the deserts of Oman 🇴🇲" : "Vibrant streets of India 🇮🇳"
    }));

    return (
        <section id="hobbies" className="container mx-auto px-4 py-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8 group">
                <div className={`p-2 border-2 ${darkMode ? 'border-green-400' : 'border-red-500'} glass-panel`}>
                    <Camera size={32} className={darkMode ? "text-green-400" : "text-red-500"} />
                </div>
                <h2 className={`text-4xl uppercase tracking-widest ${theme.accentText}`}>
                    Adventures & Hobbies
                </h2>
                <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-green-900' : 'bg-red-900'}`}></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {photos.map((photo) => (
                    <div key={photo.id} className="group relative aspect-square overflow-hidden rounded-lg glass-panel cursor-pointer">
                        <img
                            src={photo.url}
                            alt="Hobby"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <p className="text-white text-sm flex items-center gap-2">
                                <MapPin size={14} />
                                {photo.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hobbies;

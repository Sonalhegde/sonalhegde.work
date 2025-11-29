import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import MinecraftBtn from './MinecraftBtn';

const Contact = ({ data, theme, darkMode }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleContact = (e) => {
        e.preventDefault();
        window.location.href = `mailto:${data.socials.email}?subject=Collaboration Request from ${formData.name}&body=${formData.message}`;
    };

    return (
        <section id="contact" className="container mx-auto px-4 py-20 pb-32 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8 group">
                <div className={`p-2 border-2 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-orange-300 border-red-900'} glass-panel`}>
                    <Mail size={32} className={darkMode ? "text-green-400" : "text-red-900"} />
                </div>
                <h2 className={`text-4xl uppercase tracking-widest ${darkMode ? 'text-gray-100 text-shadow-mc' : 'text-black'}`}>
                    Open Comms
                </h2>
                <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-gray-700' : 'bg-red-900'}`}></div>
            </div>

            <div className={`max-w-2xl mx-auto p-8 border-4 ${theme.cardBorder} ${darkMode ? 'bg-slate-800' : 'bg-orange-400'} shadow-2xl glass-panel`}>
                <form className="space-y-6" onSubmit={handleContact}>
                    <div>
                        <label className="block text-2xl mb-2">/msg name</label>
                        <input
                            type="text"
                            required
                            className={`w-full p-4 text-xl bg-black/20 border-2 ${theme.cardBorder} focus:outline-none focus:border-green-500 transition-colors placeholder-white/30`}
                            placeholder="Steve"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-2xl mb-2">/msg email</label>
                        <input
                            type="email"
                            required
                            className={`w-full p-4 text-xl bg-black/20 border-2 ${theme.cardBorder} focus:outline-none focus:border-green-500 transition-colors placeholder-white/30`}
                            placeholder="steve@minecraft.net"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-2xl mb-2">/msg message</label>
                        <textarea
                            rows="4"
                            required
                            className={`w-full p-4 text-xl bg-black/20 border-2 ${theme.cardBorder} focus:outline-none focus:border-green-500 transition-colors placeholder-white/30`}
                            placeholder="Let's build something epic..."
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>

                    <MinecraftBtn variant={darkMode ? "accent" : "primary"} className="w-full">
                        Send Message
                    </MinecraftBtn>
                </form>

                <div className="mt-8 text-center space-y-6">
                    <div className="flex justify-center">
                        <a href={data.socials.calendly} target="_blank" rel="noreferrer">
                            <MinecraftBtn variant="danger" className="animate-pulse">
                                📅 Book a Meeting (Calendly)
                            </MinecraftBtn>
                        </a>
                    </div>

                    <p className="text-xl mb-4">Or connect directly via:</p>
                    <div className="flex justify-center gap-6">
                        <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform"><Linkedin size={32} /></a>
                        <a href={`mailto:${data.socials.email}`} className="hover:scale-110 transition-transform"><Mail size={32} /></a>
                        <a href={data.socials.github} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform"><Github size={32} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

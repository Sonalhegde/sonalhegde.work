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
                <div className={`p-2 border-2 ${darkMode ? 'border-cyan-400 bg-cyan-900/30' : 'border-gray-700 bg-gray-600/30'} glass-panel rounded-lg`}>
                    <Mail size={32} className={darkMode ? "text-cyan-400" : "text-gray-700"} />
                </div>
                <h2 className={`text-4xl uppercase tracking-widest ${darkMode ? 'text-white text-shadow-mc' : 'text-gray-900'}`}>
                    Open Comms
                </h2>
                <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-cyan-900/50' : 'bg-gray-600'}`}></div>
            </div>

            <div className={`max-w-2xl mx-auto p-8 border-2 ${darkMode ? 'border-cyan-400/50 bg-gray-900/80 hover:border-cyan-400' : theme.cardBorder + ' ' + theme.cardBg} shadow-2xl glass-panel transition-all duration-300`}>
                <form className="space-y-6" onSubmit={handleContact}>
                    <div>
                         <label className="block text-2xl mb-2">/msg name</label>
                         <input
                             type="text"
                             required
                             className={`w-full p-4 text-xl bg-white/5 border-2 transition-all ${darkMode ? 'border-cyan-400/30 focus:border-cyan-400 text-white placeholder-white/40 focus:shadow-lg focus:shadow-cyan-500/30' : theme.cardBorder + ' text-gray-900 placeholder-gray-600 focus:border-blue-500'} focus:outline-none`}
                             placeholder="Your Name"
                             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                         />
                     </div>

                     <div>
                         <label className="block text-2xl mb-2">/msg email</label>
                         <input
                             type="email"
                             required
                             className={`w-full p-4 text-xl bg-white/5 border-2 transition-all ${darkMode ? 'border-cyan-400/30 focus:border-cyan-400 text-white placeholder-white/40 focus:shadow-lg focus:shadow-cyan-500/30' : theme.cardBorder + ' text-gray-900 placeholder-gray-600 focus:border-blue-500'} focus:outline-none`}
                             placeholder="your@email.com"
                             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                         />
                     </div>

                     <div>
                         <label className="block text-2xl mb-2">/msg message</label>
                         <textarea
                             rows="4"
                             required
                             className={`w-full p-4 text-xl bg-white/5 border-2 transition-all resize-none ${darkMode ? 'border-cyan-400/30 focus:border-cyan-400 text-white placeholder-white/40 focus:shadow-lg focus:shadow-cyan-500/30' : theme.cardBorder + ' text-gray-900 placeholder-gray-600 focus:border-blue-500'} focus:outline-none`}
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

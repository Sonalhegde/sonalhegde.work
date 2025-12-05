import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, toggleTheme, theme }) => {
    const [activeSection, setActiveSection] = useState('hero');

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'events', 'experience', 'projects', 'skills', 'photography', 'certifications', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'events', label: 'Events' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'photography', label: 'Photography' },
        { id: 'blogs', label: 'Blogs' },
        { id: 'certifications', label: 'Certs' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900/80 border-b border-cyan-400/30' : theme.cardBg + ' border-b ' + theme.cardBorder} backdrop-blur-md shadow-lg transition-colors duration-300`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => scrollToSection('hero')}>
                    <div className={`w-8 h-8 ${darkMode ? 'bg-cyan-400' : 'bg-blue-500'} border-2 border-white animate-pulse rounded-lg`}></div>
                    <h1 className={`text-2xl font-bold tracking-wider ${darkMode ? 'text-white' : 'text-gray-900'}`}>SONALHEGDE</h1>
                </div>

                <div className="hidden md:flex gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 border ${activeSection === item.id
                                ? (darkMode ? 'bg-cyan-400/20 text-cyan-300 border-cyan-400/60' : 'bg-blue-600/20 text-blue-700 border-blue-600')
                                : (darkMode ? 'text-gray-400 border-gray-600/30 hover:border-gray-500 hover:text-gray-300' : 'text-gray-600 border-gray-300 hover:border-gray-500 hover:text-gray-700')
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button
                    onClick={toggleTheme}
                    className={`p-2 glass-btn rounded-lg hover:scale-110 transition-all duration-300 border border-gray-600/50 hover:border-white/30`}
                >
                    {darkMode ? <Sun size={24} className="text-yellow-300" /> : <Moon size={24} className="text-gray-600" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

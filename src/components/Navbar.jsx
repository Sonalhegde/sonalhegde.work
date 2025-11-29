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
        <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.cardBg} backdrop-blur-md border-b ${theme.cardBorder} shadow-lg`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
                    <div className={`w-8 h-8 ${darkMode ? 'bg-blue-400' : 'bg-gray-600'} border-2 border-white animate-pulse`}></div>
                    <h1 className={`text-2xl font-bold tracking-wider ${darkMode ? 'text-white' : 'text-gray-900'}`}>SONALHEGDE.WORK</h1>
                </div>

                <div className="hidden md:flex gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${activeSection === item.id
                                ? (darkMode ? 'bg-blue-400/20 text-blue-300 border border-blue-400' : 'bg-gray-600/20 text-gray-800 border border-gray-600')
                                : (darkMode ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-gray-600/10 text-gray-700')
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button
                    onClick={toggleTheme}
                    className="p-2 glass-btn rounded-lg hover:scale-110 transition-transform"
                >
                    {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-700" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

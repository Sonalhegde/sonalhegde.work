import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronUp } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import GridDistortion from './components/GridDistortion';
import { PORTFOLIO_DATA } from './data';

// Simple theme definition (you can expand this later)
const defaultTheme = {
    cardBg: 'bg-white dark:bg-gray-800',
    cardBorder: 'border-gray-200 dark:border-gray-700',
    accentText: 'text-blue-600 dark:text-blue-400',
    mutedText: 'text-gray-600 dark:text-gray-400',
};

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [theme, setTheme] = useState(defaultTheme);

    const toggleTheme = () => setDarkMode(!darkMode);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <GridDistortion
                color={darkMode ? '#5227FF' : '#000000'}
                className="opacity-20"
            />
            <Navbar darkMode={darkMode} toggleTheme={toggleTheme} theme={theme} />
            <main className="relative min-h-screen">
                <Hero data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <About data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Events data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Projects data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Skills data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Certifications data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Blogs theme={theme} darkMode={darkMode} />
                <Contact data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
            </main>
            <SocialLinks darkMode={darkMode} />
            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 left-8 z-50 p-4 glass-btn rounded-full hover:scale-110 transition-all duration-300 ${darkMode ? 'text-blue-300' : 'text-gray-700'}`}
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={24} />
                </button>
            )}
            <footer className={`py-8 text-center border-t ${theme.cardBorder} glass-panel relative z-10`}>
                <p className="text-xl">© 2025 Sonal Hegde. Crafted with ❤️ and Code.</p>
            </footer>
        </div>
    );
}

export default App;

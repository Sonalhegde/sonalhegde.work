import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Photography from './components/Photography';
import Experience from './components/Experience';
import Blogs from './components/Blogs';
import SocialLinks from './components/SocialLinks';
import Dither from './components/Dither';
import { PORTFOLIO_DATA } from './data';

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Theme configuration
    const theme = {
        bg: darkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50',
        text: darkMode ? 'text-gray-100' : 'text-gray-900',
        cardBg: darkMode ? 'bg-[#1a1a1a]/80' : 'bg-white/80',
        cardBorder: darkMode ? 'border-white/10' : 'border-gray-200',
        accent: darkMode ? 'text-blue-400' : 'text-blue-600',
        buttonBg: darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600',
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${theme.bg} ${theme.text} relative overflow-x-hidden`}>
            <Dither
                waveColor={darkMode ? [0.1, 0.1, 0.1] : [0.9, 0.9, 0.9]}
                disableAnimation={false}
                enableMouseInteraction={true}
            />

            <Navbar theme={theme} darkMode={darkMode} toggleTheme={toggleTheme} />

            <main className="container mx-auto px-4 py-8 relative z-10 space-y-20">
                <Hero data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <About data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Experience data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Projects data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Skills data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Events data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Photography data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Blogs theme={theme} darkMode={darkMode} />
                <Certifications data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
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

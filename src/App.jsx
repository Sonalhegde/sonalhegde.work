import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Projects from './components/Projects';
import Skills from './components/Skills';
import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
                <Blogs theme={theme} darkMode={darkMode} />
                <Certifications data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
                <Contact data={PORTFOLIO_DATA} theme={theme} darkMode={darkMode} />
            </main >

    <SocialLinks darkMode={darkMode} />

{/* Scroll to Top Button */ }
{
    showScrollTop && (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 left-8 z-50 p-4 glass-btn rounded-full hover:scale-110 transition-all duration-300 ${darkMode ? 'text-blue-300' : 'text-gray-700'}`}
            aria-label="Scroll to top"
        >
            <ChevronUp size={24} />
        </button>
    )
}

<footer className={`py-8 text-center border-t ${theme.cardBorder} glass-panel relative z-10`}>
    <p className="text-xl">© 2025 Sonal Hegde. Crafted with ❤️ and Code.</p>
</footer>
        </div >
    );
}

export default App;

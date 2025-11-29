import {
    Github,
    Linkedin,
    Mail,
    MapPin,
    Terminal,
    Cpu,
    Award,
    Calendar,
    Code,
    Moon,
    Sun
} from 'lucide-react';

export const PORTFOLIO_DATA = {
    name: "Sonal Hegde",
    title: "B.Tech Student & Developer",
    location: "India 🇮🇳 | Oman 🇴🇲",
    socials: {
        linkedin: "https://www.linkedin.com/in/sonalhegde",
        github: "https://github.com/Sonalhegde",
        email: "sonalhhegde@gmail.com",
        calendly: "https://calendly.com/sonalhhegde"
    },
    about: "I am a passionate B.Tech student and developer exploring the realms of AI, IoT, and Full Stack Development. Like a true crafter, I gather resources (data) and build functional structures (software) to solve real-world problems. Currently leveling up my skills in Cloud Computing and Cybersecurity.",
    skills: [
        "Python (Programming Language)", "Java", "C++", "MATLAB", "HTML",
        "Finance", "Pre-Algebra", "Electronic Document",
        "Numerical Simulation", "History of Photography", "Circuit Simulators",
        "Sports Photography", "LTSpice", "Autodesk Tinkercad",
        "WordPress", "Search Engine Optimization (SEO)", "Canva", "n8n"
    ],
    projects: [
        {
            title: "Smart Medication Dispenser",
            desc: "IoT solution using ESP32 to automate medication schedules for the elderly, ensuring timely reminders and dosage accuracy through hardware prototyping.",
            type: "IoT / Hardware",
            stack: ["ESP32", "Arduino", "C++", "Sensors"]
        },
        {
            title: "KULDIO - AI Based ESG Reporting",
            desc: "AI-based ESG reporting platform tailored for the Nordic region, analyzing and generating comprehensive Environmental, Social, and Governance insights.",
            type: "AI / Software",
            stack: ["Python", "NLP", "React"]
        },
        {
            title: "Pacman Clone",
            desc: "Classic arcade game recreation using Python and Pygame, featuring custom ghost logic to enhance gameplay dynamics and demonstrate creative problem-solving.",
            type: "Game Dev",
            stack: ["Python", "Pygame"]
        },
        {
            title: "LDR Sensor Detection System",
            desc: "Light Dependent Resistor system for automated lighting control, bridging real-world needs with hardware prototyping.",
            type: "Electronics",
            stack: ["Embedded C", "Circuitry", "Sensors"]
        }
    ],
    events: [
        {
            name: "DevHost 2025 Hackathon",
            rank: "🏆 Top 10 Finalist",
            location: "Sahyadri College, Mangalore",
            desc: "Built a scalable web solution under 24 hours."
        },
        {
            name: "Nexathon 2025",
            rank: "🏅 Top 25 Finalist",
            location: "Presidency University, Bangalore",
            desc: "Innovated in the Smart City track."
        },
        {
            name: "NMAMIT Hackfest 2025",
            rank: "🛡️ Top 10 Finalist",
            location: "NMAMIT",
            desc: "Cybersecurity Track: Vulnerability assessment tool."
        }
    ],
    certifications: [
        {
            name: "Networking Basics",
            issuer: "Cisco",
            date: "Nov 2025",
            credentialId: "b1bba544-623c-471b-ad41-c5755f6dea8e",
            verifyUrl: "https://www.credly.com/badges/b1bba544-623c-471b-ad41-c5755f6dea8e/linked_in_profile",
            featured: true
        },
        {
            name: "Deep Dive: Data Analysis in Quiver",
            issuer: "Palantir Technologies",
            date: "Aug 2025",
            credentialId: "yixwxkvqios3",
            verifyUrl: "https://verify.skilljar.com/c/yixwxkvqios3",
            featured: true
        },
        {
            name: "Audio Processing | Audio Automation with Python Programming",
            issuer: "Udemy",
            date: "Jul 2025",
            credentialId: "6cae45f5-1604-4218-8fbb-04a23fc6f010",
            verifyUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-6cae45f5-1604-4218-8fbb-04a23fc6f010.jpg",
            featured: true
        },
        {
            name: "Getting Started with AI on Jetson Nano",
            issuer: "NVIDIA",
            date: "Dec 2024",
            credentialId: "_SMMCkJuTvGTGRZ4HPswog",
            verifyUrl: "https://www.linkedin.com/in/sonalhegde/details/certifications/",
            featured: true
        },
        {
            name: "Introduction to Model Context Protocol",
            issuer: "Anthropic",
            date: "Aug 2025",
            credentialId: null,
            verifyUrl: "https://www.linkedin.com/in/sonalhegde/details/certifications/",
            featured: true
        },
        {
            name: "MICROSOFT AI INNOVATION 2025",
            issuer: "Microsoft",
            date: "Sep 2025",
            credentialId: null,
            verifyUrl: "https://www.linkedin.com/in/sonalhegde/details/certifications/",
            featured: true
        },
        {
            name: "Time Series Analysis using Python",
            issuer: "Infosys Springboard",
            date: "Jul 2025",
            credentialId: null,
            verifyUrl: "https://www.linkedin.com/in/sonalhegde/details/certifications/",
            featured: false
        },
        {
            name: "AI for Beginners",
            issuer: "HP",
            date: "Mar 2025",
            credentialId: "2250b744-3209-4a8a-b6ba-8e1130686087",
            verifyUrl: "https://www.linkedin.com/in/sonalhegde/details/certifications/",
            featured: false
        },
        {
            name: "Data Science & Analytics",
            issuer: "HP LIFE",
            date: "Mar 2025",
            credentialId: "f330cfa1-34d5-42a3-8cb7-0b428816654b",
            verifyUrl: "https://www.linkedin.com/in/sonalhegde/details/certifications/",
            featured: false
        },
        {
            name: "Foundry & AIP Builder Foundation",
            issuer: "Palantir Technologies",
            date: "Jan 2025",
            credentialId: "6qr9yrbi2t3r",
            verifyUrl: "https://www.linkedin.com/in/sonalhegde/details/certifications/",
            featured: false
        },
        {
            name: "MATLAB",
            issuer: "MathWorks",
            date: "2024",
            credentialId: null,
            verifyUrl: "https://www.linkedin.com/in/sonalhegde/details/certifications/",
            featured: false
        }
    ]
};

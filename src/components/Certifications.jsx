import React from 'react';
import { Award, ExternalLink, Calendar, Hash, CheckCircle } from 'lucide-react';

const Certifications = ({ data, theme, darkMode }) => {
    // Company logo mapping
    const companyLogos = {
        "Cisco": "https://logo.clearbit.com/cisco.com",
        "Microsoft": "https://logo.clearbit.com/microsoft.com",
        "Palantir Technologies": "https://logo.clearbit.com/palantir.com",
        "Anthropic": "https://logo.clearbit.com/anthropic.com",
        "Udemy": "https://logo.clearbit.com/udemy.com",
        "Infosys Springboard": "https://logo.clearbit.com/infosys.com",
        "HP": "https://logo.clearbit.com/hp.com",
        "HP LIFE": "https://logo.clearbit.com/hp.com",
        "NVIDIA": "https://logo.clearbit.com/nvidia.com",
        "MathWorks": "https://logo.clearbit.com/mathworks.com"
    };

    // Filter featured certifications (top 6)
    const featuredCerts = data.certifications.filter(cert => cert.featured);
    const totalCerts = data.certifications.length;

    return (
        <section id="certifications" className="container mx-auto px-4 py-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 border-2 ${darkMode ? 'border-blue-400 bg-blue-900/30' : 'border-gray-700 bg-gray-600/30'} glass-panel`}>
                    <Award size={32} className={darkMode ? "text-blue-400" : "text-gray-700"} />
                </div>
                <h2 className={`text-4xl uppercase tracking-widest ${theme.accentText}`}>
                    Licenses & Certifications
                </h2>
                <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-blue-900' : 'bg-gray-600'}`}></div>
            </div>

            {/* Featured Certifications Count */}
            <div className="text-center mb-8">
                <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Showing <span className={`font-bold ${theme.accentText}`}>{featuredCerts.length}</span> of <span className="font-bold">{totalCerts}</span> certifications
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredCerts.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`${theme.cardBg} p-6 border-2 ${darkMode ? 'border-blue-400/50 hover:border-blue-400 shadow-lg shadow-blue-500/20' : 'border-gray-600/50 hover:border-gray-700 shadow-lg shadow-gray-600/20'} transition-all duration-300 hover:scale-105 group cursor-pointer relative overflow-hidden`}
                    >
                        {/* Featured Badge */}
                        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold ${darkMode ? 'bg-blue-500/30 text-blue-200 border border-blue-400/50' : 'bg-gray-600/30 text-gray-100 border border-gray-600/50'} flex items-center gap-1`}>
                            <CheckCircle size={12} />
                            Verified
                        </div>

                        {/* Company Logo */}
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-20 h-20 flex items-center justify-center bg-white rounded-lg p-2 border-2 ${darkMode ? 'border-blue-400/30 shadow-md' : 'border-gray-600/30 shadow-md'}`}>
                                <img
                                    src={companyLogos[cert.issuer] || "https://via.placeholder.com/80"}
                                    alt={cert.issuer}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/80?text=" + cert.issuer.charAt(0);
                                    }}
                                />
                            </div>
                        </div>

                        {/* Certificate Name */}
                        <h3 className={`text-xl font-bold mb-2 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'} pr-16`}>
                            {cert.name}
                        </h3>

                        {/* Issuer */}
                        <p className={`text-lg mb-3 ${theme.accentText} font-semibold`}>
                            {cert.issuer}
                        </p>

                        {/* Date */}
                        <div className={`flex items-center gap-2 mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <Calendar size={16} />
                            <span>Issued {cert.date}</span>
                        </div>

                        {/* Credential ID */}
                        {cert.credentialId && (
                            <div className={`flex items-center gap-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} border-t ${darkMode ? 'border-blue-400/20' : 'border-gray-600/20'} pt-3 mt-3`}>
                                <Hash size={14} />
                                <span className="font-mono truncate">{cert.credentialId}</span>
                            </div>
                        )}

                        {/* Hover Effect */}
                        <div className={`mt-4 flex items-center gap-2 text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-gray-700'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                            <ExternalLink size={16} />
                            Verify Certificate
                        </div>
                    </a>
                ))}
            </div>

            {/* View All Link */}
            <div className="text-center mt-12">
                <a
                    href="https://www.linkedin.com/in/sonalhegde/details/certifications/"
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-3 px-8 py-4 glass-btn rounded-lg text-xl font-bold ${darkMode ? 'text-blue-300 hover:text-blue-200 border-2 border-blue-400/50 hover:border-blue-400' : 'text-gray-700 hover:text-gray-900 border-2 border-gray-600/50 hover:border-gray-700'} transition-all duration-300 hover:scale-105 shadow-lg ${darkMode ? 'shadow-blue-500/20' : 'shadow-gray-600/20'}`}
                >
                    <Award size={24} />
                    View All {totalCerts} Certifications on LinkedIn
                    <ExternalLink size={20} />
                </a>
            </div>
        </section>
    );
};

export default Certifications;

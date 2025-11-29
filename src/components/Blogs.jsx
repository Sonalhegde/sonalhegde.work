import React, { useState } from 'react';
import { BookOpen, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../blogData';
import BlogDetail from './BlogDetail';

const Blogs = ({ theme, darkMode }) => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    if (selectedBlog) {
        return (
            <section id="blogs" className="container mx-auto px-4 py-16 scroll-mt-20">
                <BlogDetail
                    blogId={selectedBlog}
                    onBack={() => setSelectedBlog(null)}
                    theme={theme}
                    darkMode={darkMode}
                />
            </section>
        );
    }

    return (
        <section id="blogs" className="container mx-auto px-4 py-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8 group">
                <div className={`p-2 border-2 ${darkMode ? 'border-blue-400 bg-blue-900/30' : 'border-gray-700 bg-gray-600/30'} glass-panel`}>
                    <BookOpen size={32} className={darkMode ? "text-blue-400" : "text-gray-700"} />
                </div>
                <h2 className={`text-4xl uppercase tracking-widest ${theme.accentText}`}>
                    Blogs & Insights
                </h2>
                <div className={`h-1 flex-grow ml-4 ${darkMode ? 'bg-blue-900' : 'bg-gray-600'}`}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        onClick={() => setSelectedBlog(post.id)}
                        className={`${theme.cardBg} border-2 ${darkMode ? 'border-blue-400/50 hover:border-blue-400 shadow-lg shadow-blue-500/20' : 'border-gray-600/50 hover:border-gray-700 shadow-lg shadow-gray-600/20'} rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group`}
                    >
                        {/* Blog Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/400x300?text=" + encodeURIComponent(post.category);
                                }}
                            />
                            <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${darkMode ? 'bg-blue-500/80 text-white' : 'bg-gray-700/80 text-white'
                                }`}>
                                {post.category}
                            </div>
                        </div>

                        {/* Blog Content */}
                        <div className="p-6">
                            <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {post.title}
                            </h3>

                            <p className={`mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {post.excerpt}
                            </p>

                            <div className={`flex items-center justify-between text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                                <div className="flex items-center gap-2">
                                    <User size={14} />
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={14} />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                                <Calendar size={14} />
                                <span>{post.date}</span>
                            </div>

                            <div className={`flex items-center gap-2 font-bold ${theme.accentText} group-hover:gap-4 transition-all`}>
                                Read More
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`text-center mt-8 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>Exploring Finance, Technology, and Innovation</p>
            </div>
        </section>
    );
};

export default Blogs;

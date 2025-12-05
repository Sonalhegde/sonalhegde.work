import React from 'react';
import { BookOpen, Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../blogData';

const BlogDetail = ({ blogId, onBack, theme, darkMode }) => {
    const blog = blogPosts.find(post => post.id === parseInt(blogId));

    if (!blog) return null;

    return (
        <div className="min-h-screen">
            {/* Back Button */}
            <button
                onClick={onBack}
                className={`mb-8 flex items-center gap-2 px-4 py-2 rounded-lg glass-panel border-2 transition-all duration-300 hover:scale-105 ${darkMode ? 'text-amber-300 hover:text-amber-200 border-amber-400/50 hover:border-amber-400' : 'text-gray-700 hover:text-gray-900 border-gray-600/50 hover:border-gray-700'
                    }`}
            >
                <ArrowLeft size={20} />
                Back to Blogs
            </button>

            {/* Blog Header */}
            <div className="mb-8">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${darkMode ? 'bg-amber-500/30 text-amber-200 border-2 border-amber-400' : 'bg-gray-600/30 text-gray-100 border-2 border-gray-700'
                    }`}>
                    {blog.category}
                </span>

                <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {blog.title}
                </h1>

                <div className={`flex flex-wrap items-center gap-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{blog.readTime}</span>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            {blog.image && (
                <div className="mb-8 rounded-2xl overflow-hidden">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-96 object-cover"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/1200x600?text=" + encodeURIComponent(blog.title);
                        }}
                    />
                </div>
            )}

            {/* Blog Content */}
            <div className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
                <div
                    className={`p-8 rounded-xl border-2 ${darkMode ? 'bg-gray-900/80 border-amber-400/50' : theme.cardBg + ' border-gray-600/50'
                        }`}
                    dangerouslySetInnerHTML={{
                        __html: blog.content
                            .replace(/\n/g, '<br/>')
                            .replace(/## (.*?)(<br\/>|$)/g, '<h2 class="text-3xl font-bold mt-8 mb-4">$1</h2>')
                            .replace(/### (.*?)(<br\/>|$)/g, '<h3 class="text-2xl font-bold mt-6 mb-3">$1</h3>')
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/- (.*?)(<br\/>|$)/g, '<li class="ml-6">$1</li>')
                    }}
                />
            </div>
        </div>
    );
};

export default BlogDetail;


import React, { useState, useEffect } from 'react';
import { Category, Article } from '../types';
import { TOPIC_DATA } from '../constants';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface TopicShowcaseProps {
  onArticleSelect: (article: Article) => void;
}

const ITEMS_PER_PAGE = 6;

const TopicShowcase: React.FC<TopicShowcaseProps> = ({ onArticleSelect }) => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
    setIsAnimating(false);
  }, [activeCategory]);

  const filteredArticles = activeCategory === Category.ALL 
    ? TOPIC_DATA 
    : TOPIC_DATA.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (direction: 'next' | 'prev') => {
    setIsAnimating(true);
    setTimeout(() => {
        if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
        setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="archive" className="py-24 bg-charcoal relative z-20">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Header - Matching FeaturedSection style */}
        <div className="mb-16 flex flex-col md:flex-row items-end justify-between">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
              Archive
            </h2>
            <p className="text-cream/50 max-w-sm">
              Explore our complete collection of design thinking.
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 justify-end">
             {Object.values(Category).map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full border transition-all duration-300 text-xs tracking-wide uppercase ${
                    activeCategory === cat 
                        ? 'bg-cream text-charcoal border-cream font-bold' 
                        : 'bg-transparent text-cream/60 border-white/20 hover:border-white/60'
                    }`}
                >
                    {cat}
                </button>
             ))}
          </div>
        </div>

        {/* 2-Column Grid with Fixed Min-Height to prevent layout shift */}
        {/* Adjusted min-height to 720px for a tighter layout while maintaining stability */}
        <div className="min-h-[720px]">
            <div 
                className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 relative z-10 transition-all duration-300 ease-out ${isAnimating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}
            >
            {visibleArticles.map((item, index) => (
                <div 
                key={item.id} 
                className="group flex h-full items-start justify-between cursor-pointer border-b border-white/10 pb-8 hover:border-accent-orange/50 transition-colors duration-500"
                onClick={() => onArticleSelect(item)}
                >
                {/* Text Content - Left */}
                <div className="flex-1 pr-6 flex flex-col h-full justify-between">
                    <div>
                        <div className="flex items-center space-x-3 mb-3 text-xs font-mono text-cream/60">
                            <span>{item.date}</span>
                            <span className="w-1 h-1 bg-accent-orange rounded-full"></span>
                            <span className="uppercase tracking-wider">{item.category}</span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-cream group-hover:text-white transition-colors leading-tight mb-3">
                            {item.title}
                        </h3>
                        <p className="text-cream/70 text-sm leading-relaxed line-clamp-2 mb-4">
                            {item.excerpt}
                        </p>
                    </div>
                    
                    <div className="flex items-center text-accent-orange text-xs font-bold uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] group-hover:duration-700">
                        <span>Read Story</span>
                        <ArrowRight size={14} className="ml-2" />
                    </div>
                </div>

                {/* Image Content - Right (Redesigned Hover) */}
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative">
                    {/* Decorative Background Offset Layer */}
                    <div className="absolute inset-0 bg-accent-orange z-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 ease-out rounded-sm"></div>
                    
                    {/* Main Image Container */}
                    <div className="relative w-full h-full overflow-hidden bg-charcoal border border-white/10 group-hover:border-transparent rounded-sm transition-colors duration-500 z-10">
                        <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transform scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
                        />
                    </div>
                </div>
                </div>
            ))}
            </div>
            
            {/* Empty State */}
            {visibleArticles.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-cream/40 font-mono text-sm">
                    <p>No articles found in this category.</p>
                </div>
            )}
        </div>
        
        {/* Pagination Controls */}
        <div className="mt-6 flex items-center justify-between">
            
            {/* Status Indicator */}
            <div className="text-xs font-mono text-cream/30 uppercase tracking-widest">
                Showing <span className="text-cream">{filteredArticles.length > 0 ? String(startIndex + 1).padStart(2, '0') : '00'}</span>-
                <span className="text-cream">{String(Math.min(startIndex + ITEMS_PER_PAGE, filteredArticles.length)).padStart(2, '0')}</span> of {String(filteredArticles.length).padStart(2, '0')}
            </div>

            {/* Arrows & Numbers */}
            <div className={`flex items-center space-x-6 transition-opacity duration-300 ${totalPages <= 1 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                <button 
                    onClick={() => handlePageChange('prev')}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-accent-orange hover:text-accent-orange cursor-pointer'}`}
                >
                    <ArrowLeft size={16} />
                </button>

                <div className="font-display font-bold text-xl text-cream select-none">
                    {String(currentPage).padStart(2, '0')} <span className="text-white/20 text-sm font-normal mx-1">/</span> <span className="text-white/40 text-lg">{String(totalPages).padStart(2, '0')}</span>
                </div>

                <button 
                    onClick={() => handlePageChange('next')}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:border-accent-orange hover:text-accent-orange cursor-pointer'}`}
                >
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TopicShowcase;

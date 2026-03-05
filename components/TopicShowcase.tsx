
import React, { useState, useEffect } from 'react';
import { Category, Article } from '../types';
import { TOPIC_DATA } from '../constants';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface TopicShowcaseProps {
  onArticleSelect: (article: Article, sourceId?: string) => void;
  transitionId: string | null;
}

const ITEMS_PER_PAGE = 6;

const TopicShowcase: React.FC<TopicShowcaseProps> = ({ onArticleSelect, transitionId }) => {
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
       <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

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
                    className={`px-4 py-1.5 rounded-full border transition-[background-color,border-color,color,transform] duration-fast ease-standard text-xs tracking-wide uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal active:scale-[0.98] ${
                    activeCategory === cat 
                        ? 'bg-accent-orange text-white border-accent-orange font-bold' 
                        : 'bg-transparent text-cream/60 border-line/20 hover:border-line/50 hover:text-cream'
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
                className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 relative z-10 transition-[opacity,transform] duration-base ease-standard ${isAnimating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}
            >
            {visibleArticles.map((item, index) => {
              const uniqueKey = `archive-${item.id}`;
              return (
                <button
                type="button"
                key={uniqueKey} 
                className="group flex w-full h-full items-start justify-between cursor-pointer border-b border-line/10 pb-8 hover:border-accent-orange/50 transition-colors duration-base ease-standard text-left bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal rounded-sm active:scale-[0.99]"
                onClick={() => onArticleSelect(item, uniqueKey)}
                >
                {/* Text Content - Left */}
                <div className="flex-1 pr-6 flex flex-col h-full justify-between">
                    <div>
                        <div className="flex items-center space-x-3 mb-3 text-xs font-mono text-cream/60">
                            <span>{item.date}</span>
                            <span className="w-1 h-1 bg-accent-orange rounded-full"></span>
                            <span className="uppercase tracking-wider">{item.category}</span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-cream group-hover:text-accent-orange transition-colors leading-tight mb-3">
                            {item.title}
                        </h3>
                        <p className="text-cream/70 text-sm leading-relaxed line-clamp-2 mb-4">
                            {item.excerpt}
                        </p>
                    </div>
                    
                    <div className="flex items-center text-accent-orange text-xs font-bold uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-[opacity,transform] duration-base ease-standard">
                        <span>Read Story</span>
                        <ArrowRight size={14} className="ml-2" />
                    </div>
                </div>

                {/* Image Content - Right (Redesigned Hover) */}
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative">
                    {/* Decorative Background Offset Layer */}
                    <div className="absolute inset-0 bg-accent-orange z-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-2 transition-[opacity,transform] duration-slow ease-standard rounded-sm"></div>
                    
                    {/* Main Image Container */}
                    <div 
                        className="relative w-full h-full overflow-hidden bg-charcoal rounded-sm z-10"
                        style={transitionId === uniqueKey ? { viewTransitionName: 'hero-image' } : undefined}
                    >
                        <div className="absolute inset-0 bg-black/[0.01] group-hover:bg-black/0 dark:bg-white/10 dark:group-hover:bg-transparent transition-colors duration-base ease-standard z-10"></div>
                        <img 
                            src={item.imageUrl} 
                            alt={item.title}
                            loading="lazy"
                            className={`w-full h-full object-cover transition-[filter,transform] duration-slow ease-standard ${
                                transitionId === uniqueKey 
                                    ? 'filter-none grayscale-0 scale-100' 
                                    : 'filter group-hover:grayscale-0 transform scale-100 group-hover:scale-110'
                            }`}
                        />
                    </div>
                </div>
                </button>
            );
            })}
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
            <div className={`flex items-center space-x-6 transition-opacity duration-base ease-standard ${totalPages <= 1 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                <button 
                    onClick={() => handlePageChange('prev')}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-full border border-line/10 flex items-center justify-center transition-[border-color,color,transform] duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-accent-orange hover:text-accent-orange active:scale-95 cursor-pointer'}`}
                >
                    <ArrowLeft size={16} />
                </button>

                <div className="font-display font-bold text-xl text-cream select-none">
                    {String(currentPage).padStart(2, '0')} <span className="text-cream/30 text-sm font-normal mx-1">/</span> <span className="text-cream/50 text-lg">{String(totalPages).padStart(2, '0')}</span>
                </div>

                <button 
                    onClick={() => handlePageChange('next')}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-full border border-line/10 flex items-center justify-center transition-[border-color,color,transform] duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:border-accent-orange hover:text-accent-orange active:scale-95 cursor-pointer'}`}
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


import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Article } from '../types';
import { FEATURED_ARTICLES } from '../constants';

interface FeaturedSectionProps {
  id?: string;
  title?: string;
  section?: string;
  featuredOnly?: boolean;
  onArticleSelect: (article: Article, sourceId?: string) => void;
  transitionId: string | null;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ id, title = "Featured Stories", section, featuredOnly, onArticleSelect, transitionId }) => {
  let articles = FEATURED_ARTICLES;
  if (section) {
    articles = articles.filter((article) => article.sections?.includes(section));
  }
  if (featuredOnly) {
    articles = articles.filter((article) => article.isFeatured);
  }

  // Generate a unique section prefix for View Transitions
  const sectionPrefix = section || (featuredOnly ? 'featured' : 'other');

  return (
    <section id={id} className="py-24 relative bg-charcoal z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row items-end justify-between">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
              {title}
            </h2>
            <p className="text-cream/50 max-w-sm">
              Deep dives into the mechanics of aesthetics and functionality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.map((article: Article, index) => {
            const uniqueKey = `${sectionPrefix}-${article.id}`;
            return (
            <button
              type="button"
              key={uniqueKey}
              className="group relative cursor-pointer w-full text-left bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal rounded-sm active:scale-[0.99]"
              onClick={() => onArticleSelect(article, uniqueKey)}
            >
              <div 
                className="relative overflow-hidden aspect-[16/9] mb-6 rounded-sm bg-surface"
                style={transitionId === uniqueKey ? { viewTransitionName: 'hero-image' } : undefined}
              >
                <div className="absolute inset-0 bg-black/[0.04] group-hover:bg-black/[0.02] dark:bg-white/10 dark:group-hover:bg-transparent transition-colors duration-base ease-standard z-10"></div>
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className={`w-full h-full object-cover transform transition-transform duration-slow ease-standard ${
                    transitionId === uniqueKey ? 'scale-100' : 'group-hover:scale-105'
                  }`}
                />
                <div className="absolute top-4 right-4 bg-muted/5 backdrop-blur-md px-3 py-1 rounded-full border border-line/10 z-20">
                   <span className="text-xs uppercase tracking-widest text-cream">{article.category}</span>
                </div>
              </div>

              <div className="flex justify-between items-start border-b border-line/10 pb-6 group-hover:border-accent-orange/50 transition-colors duration-base ease-standard relative z-10">
                <div className="pr-4">
                   <div className="flex items-center space-x-4 mb-3 text-xs font-mono text-cream/60">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                   </div>
                   <h3 className="font-display text-2xl lg:text-3xl font-bold text-cream group-hover:text-accent-orange transition-colors leading-tight mb-3">
                     {article.title}
                   </h3>
                   <p className="text-cream/70 text-sm leading-relaxed line-clamp-3">
                     {article.excerpt}
                   </p>
                </div>
                <div className="mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-[opacity,transform] duration-base ease-standard shrink-0">
                   <div className="w-10 h-10 rounded-full bg-accent-orange flex items-center justify-center text-white">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
              </div>
              
              {/* Hover visual cue - Number */}
              <span className="absolute -top-12 -left-2 text-[6rem] font-display font-bold text-muted/5 pointer-events-none group-hover:text-muted/10 transition-colors z-0">
                0{index + 1}
              </span>
            </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

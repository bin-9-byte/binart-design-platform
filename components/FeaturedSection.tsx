
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Article } from '../types';
import { FEATURED_ARTICLES } from '../constants';

interface FeaturedSectionProps {
  id?: string;
  title?: string;
  onArticleSelect: (article: Article) => void;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ id, title = "Featured Stories", onArticleSelect }) => {
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
          {FEATURED_ARTICLES.map((article: Article, index) => (
            <div 
              key={article.id}
              className="group relative cursor-pointer w-full"
              onClick={() => onArticleSelect(article)}
            >
              <div className="relative overflow-hidden aspect-[16/9] mb-6">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 z-20">
                   <span className="text-xs uppercase tracking-widest text-white">{article.category}</span>
                </div>
              </div>

              <div className="flex justify-between items-start border-b border-white/10 pb-6 group-hover:border-accent-orange/50 transition-colors duration-500 relative z-10">
                <div className="pr-4">
                   <div className="flex items-center space-x-4 mb-3 text-xs font-mono text-cream/60">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                   </div>
                   <h3 className="font-display text-2xl lg:text-3xl font-bold text-cream group-hover:text-white transition-colors leading-tight mb-3">
                     {article.title}
                   </h3>
                   <p className="text-cream/70 text-sm leading-relaxed line-clamp-3">
                     {article.excerpt}
                   </p>
                </div>
                <div className="mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shrink-0">
                   <div className="w-10 h-10 rounded-full bg-accent-orange flex items-center justify-center text-white">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
              </div>
              
              {/* Hover visual cue - Number */}
              <span className="absolute -top-12 -left-2 text-[6rem] font-display font-bold text-white/5 pointer-events-none group-hover:text-white/10 transition-colors z-0">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

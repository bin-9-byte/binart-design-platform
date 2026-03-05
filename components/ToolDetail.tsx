import React, { useLayoutEffect } from 'react';
import { Tool } from '../types';
import { ArrowLeft, Share2, Sun, Moon } from 'lucide-react';
import { DESIGN_TOOLS } from '../constants';
import ToolHero from './tool-detail/ToolHero';
import ToolGallery from './tool-detail/ToolGallery';
import ToolSpecs from './tool-detail/ToolSpecs';

interface ToolDetailProps {
  tool: Tool;
  onBack: () => void;
  onToolSelect: (tool: Tool) => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  transitionId: string | null;
}

const ToolDetail: React.FC<ToolDetailProps> = ({ tool, onBack, onToolSelect, theme, onThemeToggle, transitionId }) => {
  // Scroll to top on mount immediately
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [tool.id]);

  // Find next tool for footer navigation
  const currentIndex = DESIGN_TOOLS.findIndex(t => t.id === tool.id);
  const nextTool = DESIGN_TOOLS[(currentIndex + 1) % DESIGN_TOOLS.length];

  return (
    <article className="min-h-screen bg-charcoal text-cream selection:bg-accent-orange selection:text-white">
      {/* Background Ambience */}
      <div className={`fixed top-0 left-0 w-full h-[60vh] ${tool.color} blur-[150px] opacity-10 pointer-events-none z-0`}></div>

      {/* Navigation - Top Bar (Floating) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 pointer-events-none">
        <div className="flex justify-between items-center max-w-[1920px] mx-auto pointer-events-auto">
            <button 
                onClick={onBack}
                className="group flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-cream/60 hover:text-accent-orange transition-colors backdrop-blur-md bg-charcoal/50 px-4 py-2 rounded-full border border-line/10 hover:border-accent-orange/30"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-fast ease-standard" />
                <span>Back</span>
            </button>
            
            <div className="flex items-center space-x-3">
               <button 
                  onClick={onThemeToggle}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-cream/60 hover:text-cream hover:bg-white/5 transition-all backdrop-blur-md bg-charcoal/50 border border-line/10"
                  aria-label="Toggle theme"
               >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
               </button>
               <button className="w-10 h-10 rounded-full flex items-center justify-center text-cream/60 hover:text-cream hover:bg-white/5 transition-all backdrop-blur-md bg-charcoal/50 border border-line/10">
                  <Share2 size={18} />
               </button>
            </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10 max-w-7xl">
        
        {/* 1. Hero Section: Icon + Title + CTA */}
        <ToolHero tool={tool} transitionId={transitionId} />

        {/* 2. Gallery Section: Cover + Screenshots */}
        <div className="mb-24">
           <ToolGallery tool={tool} />
        </div>

        {/* 3. Specs & Description */}
        <div className="border-t border-line/10 pt-16">
            <ToolSpecs tool={tool} />
        </div>

      </div>

      {/* Footer Navigation */}
      <div className="bg-surface py-24 border-t border-line/5 relative z-10">
         <div className="container mx-auto px-6 text-center">
            <p className="text-accent-orange/80 text-xs font-bold uppercase tracking-widest mb-6">Explore</p>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-cream mb-8 max-w-3xl mx-auto transition-colors">
                <button
                  type="button"
                  onClick={() => onToolSelect(nextTool)}
                  className="hover:text-cream/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-surface rounded-sm active:scale-[0.99]"
                >
                  {nextTool.name}
                </button>
            </h3>
            <button type="button" onClick={onBack} className="text-cream/40 hover:text-cream transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-line/20 pb-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-surface rounded-sm px-1">
                Back to Tools
            </button>
         </div>
      </div>
    </article>
  );
};

export default ToolDetail;

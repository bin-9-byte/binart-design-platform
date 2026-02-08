
import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight, Command } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_TAGS = [
  "Accessibility", "AI", "Art Direction", "Android", "Awards", "Branding", 
  "Career", "Collaboration", "Color", "Conversations", "Creative Lab", 
  "Design Systems", "Diversity", "Emerging Markets", "Engineering", "Figma",
  "Fonts", "Google Fonts", "Google Home", "Google Sans", "Guides", 
  "Hardware", "Illustration", "Industrial Design", "Interfaces", "I/O",
  "Logo", "Material Design", "Mobile", "Motion", "Motion Design", 
  "Sound Design", "Typography", "UI", "UX", "Variable Fonts"
];

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className={`fixed inset-0 z-[100] transition-all duration-500 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none delay-500'
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>

      {/* Slide-out Panel */}
      <div 
        className={`absolute top-0 right-0 h-full w-full md:w-[680px] bg-[#121212] border-l border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-cream/50 hover:text-accent-orange transition-colors z-20 group"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">Close</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 group-hover:border-accent-orange transition-all">
                <X size={20} />
            </div>
          </div>
        </button>

        <div className="h-full overflow-y-auto px-8 md:px-16 pt-32 pb-20 scrollbar-hide">
            {/* Header */}
            <div className="mb-12">
                <h2 className="font-display font-bold text-5xl md:text-6xl text-cream mb-2">Search</h2>
                <p className="text-white/40">Find stories, tools, and resources.</p>
            </div>

            {/* Input Field */}
            <div className="relative group mb-16">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-accent-orange transition-colors" size={32} />
                <input 
                    ref={inputRef}
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Type to search..."
                    className="w-full bg-transparent border-b border-white/20 py-6 pl-12 pr-4 text-3xl font-display text-cream placeholder-white/10 focus:outline-none focus:border-accent-orange transition-colors"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 pointer-events-none opacity-30">
                    <Command size={14} />
                    <span className="text-xs font-mono">K</span>
                </div>
            </div>

            {/* Tags Section */}
            <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Explore Topics</h3>
                <div className="flex flex-wrap gap-3">
                    {POPULAR_TAGS.filter(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())).map((tag, idx) => (
                        <button 
                            key={idx}
                            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-cream/70 hover:bg-white/10 hover:border-white/30 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
                            style={{ animationDelay: `${idx * 20}ms` }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Result (Conditional) */}
            {searchTerm.length > 2 && (
                <div className="mt-12 pt-12 border-t border-white/10 animate-fade-in-up">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-accent-orange mb-6">Top Result</h3>
                    <div className="group cursor-pointer">
                        <h4 className="font-display text-2xl font-bold text-cream group-hover:text-white transition-colors mb-2">
                           {searchTerm} in Interface Design
                        </h4>
                        <p className="text-white/50 text-sm mb-4">
                            Exploring the nuances of {searchTerm} within modern digital product ecosystems.
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-accent-orange transition-colors">
                            <span>Read Article</span>
                            <ArrowRight size={12} />
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;

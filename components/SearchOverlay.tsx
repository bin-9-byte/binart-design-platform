
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
  const panelRef = useRef<HTMLDivElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const getFocusableElements = (): HTMLElement[] => {
    const panel = panelRef.current;
    if (!panel) return [];
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');
    const nodes = panel.querySelectorAll(selectors);
    const elements = Array.prototype.slice.call(nodes) as HTMLElement[];
    return elements.filter((el) => el.getClientRects().length > 0);
  };

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      lastActiveElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';

      const nav = document.getElementById('main-navigation');
      if (nav) {
        nav.style.paddingRight = `${scrollbarWidth}px`;
      }

      setSearchTerm('');
      setTimeout(() => inputRef.current?.focus(), 100);
      return;
    }

    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';

      const nav = document.getElementById('main-navigation');
      if (nav) {
        nav.style.paddingRight = '0px';
      }
    }, 500);

    const focusTimer = setTimeout(() => {
      lastActiveElementRef.current?.focus();
    }, 480);

    return () => {
      clearTimeout(timer);
      clearTimeout(focusTimer);
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

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusables = getFocusableElements();
      if (focusables.length === 0) {
        e.preventDefault();
        panelRef.current?.focus();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      const isShift = e.shiftKey;

      if (active && !panelRef.current?.contains(active)) {
        e.preventDefault();
        first.focus();
        return;
      }

      if (!isShift && active === last) {
        e.preventDefault();
        first.focus();
        return;
      }

      if (isShift && active === first) {
        e.preventDefault();
        last.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div 
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[100] transition-none ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-slow ease-standard ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>

      {/* Slide-out Panel */}
      <div 
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-overlay-title"
        aria-describedby="search-overlay-description"
        tabIndex={-1}
        className={`absolute top-0 right-0 h-full w-full md:w-[680px] bg-surface border-l border-line/10 shadow-[0_0_80px_rgba(0,0,0,0.25)] transform transition-transform duration-slow ease-emphasized ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-8 right-8 text-cream/50 hover:text-accent-orange transition-colors z-20 group active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-surface rounded-sm"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">Close</span>
            <div className="w-10 h-10 rounded-full border border-line/10 flex items-center justify-center bg-muted/5 group-hover:bg-muted/10 group-hover:border-accent-orange transition-[background-color,border-color] duration-fast ease-standard">
                <X size={20} />
            </div>
          </div>
        </button>

        <div className="h-full overflow-y-auto px-8 md:px-16 pt-32 pb-20 scrollbar-hide">
            {/* Header */}
            <div className="mb-12">
                <h2 id="search-overlay-title" className="font-display font-bold text-5xl md:text-6xl text-cream mb-2">Search</h2>
                <p id="search-overlay-description" className="text-cream/50">Find stories, tools, and resources.</p>
            </div>

            {/* Input Field */}
            <div className="relative group mb-16">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-cream/40 group-focus-within:text-accent-orange transition-colors" size={32} />
                <input 
                    ref={inputRef}
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Type to search..."
                    className="w-full bg-transparent border-b border-line/20 py-6 pl-12 pr-4 text-3xl font-display text-cream placeholder-cream/40 focus:outline-none focus:border-accent-orange transition-colors focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-surface rounded-sm"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 pointer-events-none opacity-30">
                    <Command size={14} />
                    <span className="text-xs font-mono">K</span>
                </div>
            </div>

            {/* Tags Section */}
            <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-cream/60 mb-6">Explore Topics</h3>
                <div className="flex flex-wrap gap-3">
                    {POPULAR_TAGS.filter(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())).map((tag, idx) => (
                        <button 
                            key={idx}
                            className="px-4 py-2 rounded-full border border-line/10 bg-muted/5 text-sm text-cream/70 hover:bg-muted/10 hover:border-line/20 hover:text-cream hover:scale-105 active:scale-95 transition-[background-color,border-color,color,transform] duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
                            style={{ animationDelay: `${idx * 20}ms` }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Result (Conditional) */}
            {searchTerm.length > 2 && (
                <div className="mt-12 pt-12 border-t border-line/10 animate-fade-in-up">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-accent-orange mb-6">Top Result</h3>
                    <div className="group cursor-pointer">
                        <h4 className="font-display text-2xl font-bold text-cream group-hover:text-cream transition-colors mb-2">
                           {searchTerm} in Interface Design
                        </h4>
                        <p className="text-cream/60 text-sm mb-4">
                            Exploring the nuances of {searchTerm} within modern digital product ecosystems.
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cream/50 group-hover:text-accent-orange transition-colors">
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

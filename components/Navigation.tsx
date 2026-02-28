
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavigationProps {
  onSubscribeClick?: () => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSubscribeClick, theme, onThemeToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        id="main-navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color,padding-top,padding-bottom,backdrop-filter] duration-slow ease-standard border-b ${
          isScrolled 
            ? 'bg-charcoal/80 backdrop-blur-md border-line/10 py-4' 
            : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            type="button"
            className="relative group cursor-pointer z-50 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal rounded-sm"
            onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })}
          >
            <h1 className="font-display font-bold text-2xl tracking-tighter text-cream group-hover:text-accent-orange transition-colors">
              BINART
            </h1>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-orange transition-[width] duration-base ease-standard group-hover:w-full"></span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-sm tracking-widest uppercase text-cream/70 hover:text-cream transition-colors relative group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal rounded-sm"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            ))}
            <button
              type="button"
              onClick={onThemeToggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-10 h-10 rounded-full border border-line/10 flex items-center justify-center bg-muted/5 hover:bg-muted/10 hover:border-accent-orange transition-[background-color,border-color,color,transform] duration-fast ease-standard text-cream/70 hover:text-accent-orange active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={onSubscribeClick}
              className="bg-accent-orange text-white px-6 py-2 font-display font-bold text-sm tracking-wide hover:bg-accent-blue transition-[background-color,transform] duration-base ease-standard transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal"
            >
              <Mail size={16} />
              SUBSCRIBE
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-cream z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal rounded-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-charcoal z-40 flex flex-col justify-center items-center transition-opacity duration-slow ease-standard ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {NAV_LINKS.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-display text-4xl md:text-6xl font-bold text-cream hover:text-accent-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal rounded-sm"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              onThemeToggle();
              setIsMenuOpen(false);
            }}
            className="mt-8 flex items-center justify-center space-x-2 text-cream/60 hover:text-accent-orange transition-colors active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal rounded-sm px-3 py-2"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span className="text-sm uppercase tracking-widest">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
          </button>
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              onSubscribeClick && onSubscribeClick();
            }}
            className="mt-12 flex items-center justify-center space-x-2 text-cream/60 hover:text-cream transition-colors active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal rounded-sm px-3 py-2"
          >
            <span className="text-sm uppercase tracking-widest">Subscribe to Newsletter</span>
            <Mail size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;

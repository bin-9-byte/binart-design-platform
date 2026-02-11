
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavigationProps {
  onSubscribeClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSubscribeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        id="main-navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color,padding-top,padding-bottom,backdrop-filter] duration-500 border-b ${
          isScrolled 
            ? 'bg-charcoal/80 backdrop-blur-md border-white/10 py-4' 
            : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="relative group cursor-pointer z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <h1 className="font-display font-bold text-2xl tracking-tighter text-cream group-hover:text-accent-orange transition-colors">
              BINART
            </h1>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-orange transition-all duration-300 group-hover:w-full"></span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-sm tracking-widest uppercase text-cream/70 hover:text-white transition-colors relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            ))}
            <button 
              onClick={onSubscribeClick}
              className="bg-white text-charcoal px-6 py-2 font-display font-bold text-sm tracking-wide hover:bg-accent-orange hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Mail size={16} />
              SUBSCRIBE
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-cream z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-charcoal z-40 flex flex-col justify-center items-center transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {NAV_LINKS.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-display text-4xl md:text-6xl font-bold text-cream hover:text-accent-orange transition-colors"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              onSubscribeClick && onSubscribeClick();
            }}
            className="mt-12 flex items-center justify-center space-x-2 text-white/50 hover:text-white transition-colors"
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

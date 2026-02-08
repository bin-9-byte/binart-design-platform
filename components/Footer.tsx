
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal pt-32 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-display font-bold text-5xl md:text-7xl text-cream leading-tight mb-8">
              Let's build the<br />
              <span className="text-accent-orange">unimaginable.</span>
            </h2>
            <div className="flex space-x-6">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-transparent border-b border-white/30 py-3 text-lg text-cream placeholder-white/20 focus:outline-none focus:border-accent-orange w-full max-w-sm transition-colors"
                />
                <button className="text-cream font-bold hover:text-accent-orange transition-colors">
                    SUBSCRIBE
                </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-cream/60">
             <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
                <ul className="space-y-4">
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">Latest Stories</li>
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">Research</li>
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">Tools</li>
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">Authors</li>
                </ul>
             </div>
             <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
                <ul className="space-y-4">
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">Twitter</li>
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">Instagram</li>
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">LinkedIn</li>
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">RSS</li>
                </ul>
             </div>
             <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Binart</h4>
                <ul className="space-y-4">
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">About</li>
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">Manifesto</li>
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">Careers</li>
                    <li className="hover:text-accent-orange cursor-pointer transition-colors">Contact</li>
                </ul>
             </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12">
            <h1 className="font-display font-bold text-[12vw] md:text-[8vw] leading-none text-white/5 select-none pointer-events-none">
                BINART
            </h1>
            <div className="flex flex-col items-end mt-8 md:mt-0 text-right">
                <p className="text-cream/30 text-sm">© 2024 Binart Design Platform.</p>
                <p className="text-cream/30 text-sm">All rights reserved.</p>
                <div className="mt-4 flex space-x-4 text-xs font-mono text-cream/40">
                   <span className="hover:text-white cursor-pointer">Privacy</span>
                   <span className="hover:text-white cursor-pointer">Terms</span>
                   <span className="hover:text-white cursor-pointer">Sitemap</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

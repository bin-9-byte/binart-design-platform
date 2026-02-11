import React, { useState, useEffect, useRef } from 'react';
import { X, Mail, ArrowRight, Check } from 'lucide-react';

interface SubscribeOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscribeOverlay: React.FC<SubscribeOverlayProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll but keep width to avoid layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
      
      // Also apply padding to fixed header to prevent it from shifting
      const nav = document.getElementById('main-navigation');
      if (nav) {
        nav.style.paddingRight = `${scrollbarWidth}px`;
      }

      setTimeout(() => inputRef.current?.focus(), 100);
      setStatus('idle');
      setEmail('');
    } else {
      // Restore styles with a delay matching the transition
      const timer = setTimeout(() => {
        document.body.style.overflow = 'unset';
        document.body.style.paddingRight = '0px';
        
        // Restore header padding
        const nav = document.getElementById('main-navigation');
        if (nav) {
          nav.style.paddingRight = '0px';
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Close after showing success for a bit? Or let user close.
      // Let's keep it open to show success message.
    }, 1500);
  };

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

        <div className="h-full flex flex-col justify-center px-8 md:px-16 pb-20">
            {/* Header */}
            <div className="mb-12">
                <h2 className="font-display font-bold text-5xl md:text-6xl text-cream mb-4">Subscribe</h2>
                <p className="text-white/60 text-lg max-w-md leading-relaxed">
                  Join our newsletter to get the latest design stories, tools, and resources delivered straight to your inbox.
                </p>
            </div>

            {status === 'success' ? (
              <div className="animate-fade-in-up bg-green-500/10 border border-green-500/20 p-8 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
                  <Check size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">You're Subscribed!</h3>
                <p className="text-white/60 mb-6">Thank you for joining our community. Watch your inbox for updates.</p>
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-green-400 transition-colors"
                >
                  Continue Reading
                </button>
              </div>
            ) : (
              /* Input Form */
              <form onSubmit={handleSubmit} className="relative group mb-16">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-accent-orange transition-colors" size={32} />
                  <input 
                      ref={inputRef}
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      disabled={status === 'submitting'}
                      className="w-full bg-transparent border-b border-white/20 py-6 pl-12 pr-20 text-2xl md:text-3xl font-display text-cream placeholder-white/10 focus:outline-none focus:border-accent-orange transition-colors disabled:opacity-50"
                  />
                  <button 
                    type="submit"
                    disabled={status === 'submitting' || !email}
                    className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-accent-orange disabled:opacity-30 disabled:hover:text-white/50 transition-colors"
                  >
                    {status === 'submitting' ? 'Joining...' : 'Join'}
                    <ArrowRight size={16} />
                  </button>
              </form>
            )}

            {status !== 'success' && (
              <div className="mt-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">What you'll get</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Weekly Design Trends', 'Exclusive Tutorials', 'New Tool Alerts', 'Community Highlights'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-white/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-orange"></div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SubscribeOverlay;

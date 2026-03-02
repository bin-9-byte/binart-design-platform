
import React, { useLayoutEffect } from 'react';
import { Tool } from '../types';
import { ArrowLeft, Share2, ExternalLink, Layers, Palette, Type, Activity, Grid, Monitor, Check, Sun, Moon } from 'lucide-react';

interface ToolDetailProps {
  tool: Tool;
  onBack: () => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  transitionId: string | null;
}

const ToolDetail: React.FC<ToolDetailProps> = ({ tool, onBack, theme, onThemeToggle, transitionId }) => {
  // Scroll to top on mount immediately
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [tool.id]);

  const getIcon = (iconName: string, size = 64) => {
    const props = { size, className: "text-white" };
    switch (iconName) {
      case 'figma': return <Layers {...props} />;
      case 'palette': return <Palette {...props} />;
      case 'type': return <Type {...props} />;
      case 'motion': return <Activity {...props} />;
      case 'grid': return <Grid {...props} />;
      case 'monitor': return <Monitor {...props} />;
      default: return <Layers {...props} />;
    }
  };

  // Mock Screenshots Generator
  const renderScreenshot = (index: number) => (
    <div key={index} className="flex-none w-[280px] md:w-[320px] aspect-[9/16] bg-surface rounded-3xl relative overflow-hidden group snap-center shadow-2xl">
       {/* Abstract UI content */}
       <div className="absolute top-0 left-0 right-0 h-12 bg-muted/5 border-b border-line/10 flex items-center justify-between px-4 z-10">
          <div className="w-16 h-2 bg-muted/10 rounded-full"></div>
          <div className="flex gap-1.5">
             <div className="w-2 h-2 rounded-full bg-muted/20"></div>
             <div className="w-2 h-2 rounded-full bg-muted/20"></div>
          </div>
       </div>
       <div className="p-6 pt-16 space-y-5 relative z-0">
          <div className={`w-3/4 h-8 ${tool.color} opacity-30 rounded-lg`}></div>
          <div className="w-full h-32 bg-muted/5 rounded-xl border border-line/10 backdrop-blur-sm"></div>
          <div className="space-y-3">
             <div className="w-full h-2 bg-muted/10 rounded-full"></div>
             <div className="w-5/6 h-2 bg-muted/10 rounded-full"></div>
             <div className="w-4/6 h-2 bg-muted/10 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-8">
             <div className="aspect-square bg-muted/5 rounded-xl border border-line/10"></div>
             <div className="aspect-square bg-muted/5 rounded-xl border border-line/10"></div>
          </div>
       </div>
       {/* Gradient Overlay */}
       <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-${tool.color.replace('bg-', '')}/5 pointer-events-none`}></div>
    </div>
  );

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
        
        {/* 1. Simplified Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
           {/* Icon */}
           <div 
             className={`w-24 h-24 md:w-32 md:h-32 ${tool.color} rounded-[2rem] flex items-center justify-center shadow-2xl border border-line/10 mb-8 relative group`}
             style={transitionId ? { viewTransitionName: 'hero-image' } : undefined}
           >
               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-base ease-standard rounded-[2rem]"></div>
               <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-base ease-standard">
                  {getIcon(tool.icon, 64)}
               </div>
           </div>

           {/* Title */}
           <h1 className="font-display font-bold text-5xl md:text-7xl text-cream mb-6 tracking-tight">
              {tool.name}
           </h1>

           {/* Description */}
           <p className="font-sans text-xl text-cream/60 max-w-2xl leading-relaxed mb-10 font-light">
              {tool.description}
           </p>

           {/* Action Buttons & Meta */}
           <div className="flex flex-col md:flex-row items-center gap-6">
               <button type="button" className="bg-accent-orange hover:bg-accent-blue text-white font-display font-bold text-sm md:text-base px-10 py-4 rounded-full transition-[background-color,transform] duration-base ease-standard shadow-lg shadow-blue-900/20 transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal">
                   Get {tool.name}
               </button>
               
               <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-cream/40">
                    <span className="px-3 py-1 rounded-full border border-line/10">{tool.pricing}</span>
                    <span>•</span>
                    <span>v2.4.0</span>
               </div>
           </div>
        </div>

        {/* 2. Preview Section */}
        <div className="mb-24">
            <div className="flex justify-between items-end mb-8 px-2">
                <h3 className="font-display font-bold text-2xl text-cream">Interface Preview</h3>
                <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                     <div className="w-2 h-2 rounded-full bg-cream/30"></div>
                     <div className="w-2 h-2 rounded-full bg-cream/30"></div>
                </div>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 snap-x scrollbar-hide">
                {[1, 2, 3, 4].map((i) => renderScreenshot(i))}
            </div>
        </div>

        {/* 3. Detailed Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-line/10 pt-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
                <div>
                   <h3 className="font-display font-bold text-xl text-cream mb-6">About</h3>
                   <p className="font-sans text-lg text-cream/80 leading-loose font-light tracking-wide">
                       {tool.longDescription || "Experience the next evolution of design tooling. This application brings power, precision, and performance to your workflow, enabling you to create without boundaries. Optimized for the latest hardware, it feels as natural as pencil on paper."}
                   </p>
                </div>

                <div>
                     <h3 className="font-display font-bold text-xl text-cream mb-8">Features</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                          { title: "Vector Networks", desc: "Intuitive path tools that anticipate your next move." },
                          { title: "Real-time Sync", desc: "Zero latency collaboration for distributed teams." },
                          { title: "Design Tokens", desc: "Manage variables across your entire organization." },
                          { title: "Auto Layout", desc: "Responsive frames that adapt to content changes." }
                        ].map((feat, i) => (
                           <div key={i} className="bg-muted/5 p-6 rounded-2xl border border-line/5 hover:bg-muted/10 transition-colors">
                              <Check size={20} className="text-accent-orange mb-4" />
                              <h4 className="font-bold text-cream text-lg mb-2">{feat.title}</h4>
                              <p className="text-cream/50 text-sm leading-relaxed">{feat.desc}</p>
                           </div>
                        ))}
                     </div>
                </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
                <div className="bg-surface rounded-2xl p-8 border border-line/10 sticky top-32">
                    <h3 className="font-display font-bold text-xl text-cream mb-6">Specs</h3>
                    <div className="space-y-6">
                         <div className="flex justify-between items-center text-sm border-b border-line/10 pb-4">
                             <span className="text-cream/40">Version</span>
                             <span className="text-cream font-mono">2.4.0</span>
                         </div>
                         <div className="flex justify-between items-center text-sm border-b border-line/10 pb-4">
                             <span className="text-cream/40">Size</span>
                             <span className="text-cream font-mono">145 MB</span>
                         </div>
                         <div className="flex justify-between items-center text-sm border-b border-line/10 pb-4">
                             <span className="text-cream/40">Platform</span>
                             <div className="flex gap-2">
                                {tool.platform?.map(p => (
                                    <span key={p} className="text-cream font-mono text-xs bg-muted/5 px-2 py-1 rounded">{p}</span>
                                ))}
                             </div>
                         </div>
                         <div className="flex justify-between items-center text-sm border-b border-line/10 pb-4">
                             <span className="text-cream/40">License</span>
                             <span className="text-cream font-mono">{tool.pricing}</span>
                         </div>
                         
                         <button type="button" className="w-full mt-4 flex items-center justify-center gap-2 text-cream/60 hover:text-cream transition-colors text-xs uppercase tracking-widest font-bold pt-2 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-surface rounded-sm">
                             <span>Visit Website</span>
                             <ExternalLink size={12} />
                         </button>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* Footer Navigation */}
      <div className="bg-surface py-24 border-t border-line/5 relative z-10">
         <div className="container mx-auto px-6 text-center">
            <p className="text-accent-orange/80 text-xs font-bold uppercase tracking-widest mb-6">Explore</p>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-cream mb-8 max-w-3xl mx-auto transition-colors">
                Texture Lab
            </h3>
            <button type="button" onClick={onBack} className="text-cream/40 hover:text-cream transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-line/20 pb-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-surface rounded-sm px-1">
                Back to Feed
            </button>
         </div>
      </div>
    </article>
  );
};

export default ToolDetail;

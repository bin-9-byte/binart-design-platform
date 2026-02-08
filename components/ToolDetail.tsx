
import React, { useLayoutEffect } from 'react';
import { Tool } from '../types';
import { ArrowLeft, Share2, ExternalLink, Layers, Palette, Type, Activity, Grid, Monitor, Check } from 'lucide-react';

interface ToolDetailProps {
  tool: Tool;
  onBack: () => void;
}

const ToolDetail: React.FC<ToolDetailProps> = ({ tool, onBack }) => {
  // Scroll to top on mount immediately
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
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
    <div key={index} className="flex-none w-[280px] md:w-[320px] aspect-[9/16] bg-[#1a1a1a] rounded-3xl border border-white/10 relative overflow-hidden group snap-center shadow-2xl">
       {/* Abstract UI content */}
       <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 border-b border-white/5 flex items-center justify-between px-4 z-10">
          <div className="w-16 h-2 bg-white/10 rounded-full"></div>
          <div className="flex gap-1.5">
             <div className="w-2 h-2 rounded-full bg-white/20"></div>
             <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
       </div>
       <div className="p-6 pt-16 space-y-5 relative z-0">
          <div className={`w-3/4 h-8 ${tool.color} opacity-30 rounded-lg`}></div>
          <div className="w-full h-32 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm"></div>
          <div className="space-y-3">
             <div className="w-full h-2 bg-white/10 rounded-full"></div>
             <div className="w-5/6 h-2 bg-white/10 rounded-full"></div>
             <div className="w-4/6 h-2 bg-white/10 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-8">
             <div className="aspect-square bg-white/5 rounded-xl border border-white/5"></div>
             <div className="aspect-square bg-white/5 rounded-xl border border-white/5"></div>
          </div>
       </div>
       {/* Gradient Overlay */}
       <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-${tool.color.replace('bg-', '')}/5 pointer-events-none`}></div>
    </div>
  );

  return (
    <div className="bg-charcoal min-h-screen relative z-50 animate-fade-in-up">
      {/* Background Ambience */}
      <div className={`fixed top-0 left-0 w-full h-[60vh] ${tool.color} blur-[150px] opacity-10 pointer-events-none z-0`}></div>

      {/* Nav Bar */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 pointer-events-none">
        <button 
            onClick={onBack}
            className="pointer-events-auto flex items-center space-x-2 text-cream hover:text-accent-orange transition-colors group bg-charcoal/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg"
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back</span>
        </button>
        <button className="pointer-events-auto text-cream hover:text-white transition-colors bg-charcoal/80 backdrop-blur-md p-2.5 rounded-full border border-white/10 shadow-lg">
            <Share2 size={16} />
        </button>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10 max-w-7xl">
        
        {/* 1. Simplified Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
           {/* Icon */}
           <div className={`w-24 h-24 md:w-32 md:h-32 ${tool.color} rounded-[2rem] flex items-center justify-center shadow-2xl border border-white/10 mb-8 relative group`}>
               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
               <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  {getIcon(tool.icon, 64)}
               </div>
           </div>

           {/* Title */}
           <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 tracking-tight">
              {tool.name}
           </h1>

           {/* Description */}
           <p className="font-sans text-xl text-cream/60 max-w-2xl leading-relaxed mb-10 font-light">
              {tool.description}
           </p>

           {/* Action Buttons & Meta */}
           <div className="flex flex-col md:flex-row items-center gap-6">
               <button className="bg-accent-orange hover:bg-[#ff6a2b] text-white font-display font-bold text-sm md:text-base px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-orange-900/20 transform hover:-translate-y-1">
                   Get {tool.name}
               </button>
               
               <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-cream/40">
                    <span className="px-3 py-1 rounded-full border border-white/10">{tool.pricing}</span>
                    <span>•</span>
                    <span>v2.4.0</span>
               </div>
           </div>
        </div>

        {/* 2. Preview Section */}
        <div className="mb-24">
            <div className="flex justify-between items-end mb-8 px-2">
                <h3 className="font-display font-bold text-2xl text-white">Interface Preview</h3>
                <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-white"></div>
                     <div className="w-2 h-2 rounded-full bg-white/20"></div>
                     <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </div>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 snap-x scrollbar-hide">
                {[1, 2, 3, 4].map((i) => renderScreenshot(i))}
            </div>
        </div>

        {/* 3. Detailed Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-white/10 pt-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
                <div>
                   <h3 className="font-display font-bold text-xl text-white mb-6">About</h3>
                   <p className="font-sans text-lg text-cream/80 leading-loose font-light tracking-wide">
                       {tool.longDescription || "Experience the next evolution of design tooling. This application brings power, precision, and performance to your workflow, enabling you to create without boundaries. Optimized for the latest hardware, it feels as natural as pencil on paper."}
                   </p>
                </div>

                <div>
                     <h3 className="font-display font-bold text-xl text-white mb-8">Features</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                          { title: "Vector Networks", desc: "Intuitive path tools that anticipate your next move." },
                          { title: "Real-time Sync", desc: "Zero latency collaboration for distributed teams." },
                          { title: "Design Tokens", desc: "Manage variables across your entire organization." },
                          { title: "Auto Layout", desc: "Responsive frames that adapt to content changes." }
                        ].map((feat, i) => (
                           <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
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
                <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 sticky top-32">
                    <h3 className="font-display font-bold text-xl text-white mb-6">Specs</h3>
                    <div className="space-y-6">
                         <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                             <span className="text-cream/40">Version</span>
                             <span className="text-cream font-mono">2.4.0</span>
                         </div>
                         <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                             <span className="text-cream/40">Size</span>
                             <span className="text-cream font-mono">145 MB</span>
                         </div>
                         <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                             <span className="text-cream/40">Platform</span>
                             <div className="flex gap-2">
                                {tool.platform?.map(p => (
                                    <span key={p} className="text-cream font-mono text-xs bg-white/10 px-2 py-1 rounded">{p}</span>
                                ))}
                             </div>
                         </div>
                         <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                             <span className="text-cream/40">License</span>
                             <span className="text-cream font-mono">{tool.pricing}</span>
                         </div>
                         
                         <button className="w-full mt-4 flex items-center justify-center gap-2 text-cream/60 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold pt-2">
                             <span>Visit Website</span>
                             <ExternalLink size={12} />
                         </button>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* Footer Navigation */}
      <div className="bg-[#0f0f0f] py-24 border-t border-white/5 relative z-10">
         <div className="container mx-auto px-6 text-center">
            <p className="text-accent-orange/80 text-xs font-bold uppercase tracking-widest mb-6">Explore</p>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto hover:text-cream/80 cursor-pointer transition-colors">
                Texture Lab
            </h3>
            <button onClick={onBack} className="text-cream/40 hover:text-white transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-white/20 pb-1">
                Back to Feed
            </button>
         </div>
      </div>
    </div>
  );
};

export default ToolDetail;

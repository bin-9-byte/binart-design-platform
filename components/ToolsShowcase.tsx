
import React, { useState } from 'react';
import { DESIGN_TOOLS } from '../constants';
import { Tool } from '../types';
import { Layers, Palette, Type, Activity, Grid, Monitor, ArrowRight, ArrowLeft } from 'lucide-react';

interface ToolsShowcaseProps {
  onToolSelect?: (tool: Tool) => void;
}

const ITEMS_PER_PAGE = 9;

const ToolsShowcase: React.FC<ToolsShowcaseProps> = ({ onToolSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalPages = Math.ceil(DESIGN_TOOLS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTools = DESIGN_TOOLS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'figma': return <Layers size={28} />;
      case 'palette': return <Palette size={28} />;
      case 'type': return <Type size={28} />;
      case 'motion': return <Activity size={28} />;
      case 'grid': return <Grid size={28} />;
      case 'monitor': return <Monitor size={28} />;
      case 'layers': return <Layers size={28} />;
      case 'activity': return <Activity size={28} />;
      default: return <Layers size={28} />;
    }
  };

  const handlePageChange = (direction: 'next' | 'prev') => {
    setIsAnimating(true);
    setTimeout(() => {
        if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
        // Small delay to allow fade out, then fade in occurs via key change
        setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="tools" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
             <div className="sticky top-32">
                 <h2 className="font-display text-4xl font-bold text-cream mb-6">
                   Curated Tools
                 </h2>
                 <p className="text-cream/60 leading-relaxed mb-8">
                   A selection of resources to accelerate your workflow and expand your creative capability. Updated weekly.
                 </p>
                 <a href="#" className="text-sm font-bold uppercase tracking-widest text-accent-orange hover:text-white transition-colors border-b border-accent-orange/30 pb-1">
                    Submit a tool
                 </a>
             </div>
          </div>

          <div className="lg:col-span-3 flex flex-col justify-between">
             
             {/* Tools Grid with Animation Key and Fixed Height Container */}
             {/* Adjusted min-h for 3 rows of shorter cards (3 rows * ~240px + gaps) */}
             <div className="min-h-[850px] lg:min-h-[780px]">
                <div 
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ease-out ${isAnimating ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}
                >
                    {currentTools.map((tool) => (
                    <div 
                        key={tool.id}
                        onClick={() => onToolSelect && onToolSelect(tool)}
                        className="group bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col justify-between h-full min-h-[240px]"
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 ${tool.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                        
                        <div className="relative z-10">
                            <div className="mb-4 text-cream group-hover:text-accent-orange transition-colors">
                            {getIcon(tool.icon)}
                            </div>
                            <h3 className="font-display text-lg font-bold text-cream mb-2 group-hover:translate-x-1 transition-transform">
                                {tool.name}
                            </h3>
                            <p className="text-sm text-cream/50 mb-4 line-clamp-2 leading-relaxed">
                                {tool.description}
                            </p>
                        </div>

                        <div className="relative z-10 mt-auto pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                            <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-cream/40 group-hover:text-white transition-colors">
                                <span>Get Tool</span>
                                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
             </div>

             {/* Pagination Controls */}
             <div className="mt-12 pt-8 flex items-center justify-between">
                
                {/* Status Indicator */}
                <div className="text-xs font-mono text-cream/30 uppercase tracking-widest">
                    Showing <span className="text-cream">{String(startIndex + 1).padStart(2, '0')}</span>-
                    <span className="text-cream">{String(Math.min(startIndex + ITEMS_PER_PAGE, DESIGN_TOOLS.length)).padStart(2, '0')}</span> of {String(DESIGN_TOOLS.length).padStart(2, '0')}
                </div>

                {/* Arrows & Numbers */}
                <div className={`flex items-center space-x-6 transition-opacity duration-300 ${totalPages <= 1 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                    <button 
                        onClick={() => handlePageChange('prev')}
                        disabled={currentPage === 1}
                        className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-accent-orange hover:text-accent-orange cursor-pointer'}`}
                    >
                        <ArrowLeft size={16} />
                    </button>

                    <div className="font-display font-bold text-xl text-cream select-none">
                        {String(currentPage).padStart(2, '0')} <span className="text-white/20 text-sm font-normal mx-1">/</span> <span className="text-white/40 text-lg">{String(totalPages).padStart(2, '0')}</span>
                    </div>

                    <button 
                        onClick={() => handlePageChange('next')}
                        disabled={currentPage === totalPages}
                        className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:border-accent-orange hover:text-accent-orange cursor-pointer'}`}
                    >
                        <ArrowRight size={16} />
                    </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;

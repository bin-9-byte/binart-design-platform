import React from 'react';
import { Tool } from '../../types';
import { ExternalLink, Layers, Palette, Type, Activity, Grid, Monitor, Check, Sun, Moon, ArrowRight } from 'lucide-react';

interface ToolHeroProps {
  tool: Tool;
  transitionId: string | null;
}

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

const ToolHero: React.FC<ToolHeroProps> = ({ tool, transitionId }) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-24 relative">
        {/* Background Glow */}
        <div className={`absolute -top-32 -right-32 w-[600px] h-[600px] ${tool.color} opacity-10 blur-[120px] rounded-full pointer-events-none`}></div>

        <div className="flex-1 relative z-10">
            {/* Icon & Title Group */}
            <div className="flex items-center gap-6 mb-8">
                <div 
                    className={`w-20 h-20 ${tool.color} flex items-center justify-center border border-line/5`}
                    style={transitionId ? { viewTransitionName: 'hero-image' } : undefined}
                >
                    {getIcon(tool.icon, 32)}
                </div>
                <div>
                    <h1 className="font-display font-bold text-5xl text-cream tracking-tight mb-2">
                        {tool.name}
                    </h1>
                    <div className="flex items-center gap-3">
                        {tool.pricing && (
                            <span className="text-xs font-mono uppercase tracking-widest text-cream/40 border border-line/5 px-2 py-1">
                                {tool.pricing}
                            </span>
                        )}
                        <span className="text-cream/40">•</span>
                        <span className="text-cream/60 font-mono text-sm">v1.0.0</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="font-sans text-xl text-cream/80 max-w-2xl leading-relaxed font-light mb-8">
                {tool.description}
            </p>

            {/* Actions & Tags Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                {/* CTA Button */}
                {tool.link ? (
                    <a 
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cream hover:text-accent-orange transition-colors text-sm uppercase tracking-widest font-bold group w-fit"
                    >
                        <span className="border-b border-cream/20 group-hover:border-accent-orange pb-0.5 transition-colors">{tool.ctaLabel || 'Visit Website'}</span>
                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-fast" />
                    </a>
                ) : (
                    <span className="text-cream/20 text-sm uppercase tracking-widest font-bold cursor-not-allowed w-fit">
                        Coming Soon
                    </span>
                )}

                {/* Divider (Hidden on mobile) */}
                <div className="hidden sm:block w-px h-4 bg-line/20"></div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tool.tags?.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-line/20 text-cream/60 text-[10px] tracking-wide uppercase bg-transparent">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        
        {/* Right Side Spacer (Optional for layout balance if needed) */}
        <div className="hidden md:block w-12"></div>
    </div>
  );
};

export default ToolHero;

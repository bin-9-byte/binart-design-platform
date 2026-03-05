import React from 'react';
import { Tool } from '../../types';
import { ExternalLink, Layers, Palette, Type, Activity, Grid, Monitor, Check, Sun, Moon } from 'lucide-react';

interface ToolSpecsProps {
  tool: Tool;
}

const ToolSpecs: React.FC<ToolSpecsProps> = ({ tool }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Description */}
      <div className="lg:col-span-2">
        <h3 className="font-display font-bold text-2xl text-cream mb-4">
          About
        </h3>
        <p className="font-sans text-lg text-cream/70 leading-loose font-light tracking-wide max-w-3xl">
          {tool.longDescription || tool.description}
        </p>
      </div>

      {/* Quick Info */}
      <div className="lg:col-span-1">
        <div className="bg-surface/50 border border-line/5 p-6 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm pb-4 border-b border-line/5 last:border-0 last:pb-0">
              <span className="text-cream/40">Version</span>
              <span className="text-cream font-mono">1.0.0</span>
            </div>
            <div className="flex justify-between items-center text-sm pb-4 border-b border-line/5 last:border-0 last:pb-0">
              <span className="text-cream/40">Platform</span>
              <div className="flex gap-2">
                {tool.platform?.map(p => (
                  <span key={p} className="text-cream font-mono text-xs bg-white/5 px-2 py-1">
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center text-sm pb-4 border-b border-line/5 last:border-0 last:pb-0">
              <span className="text-cream/40">License</span>
              <span className="text-cream font-mono text-accent-orange">{tool.pricing}</span>
            </div>
            {tool.link && (
              <div className="pt-6 flex justify-center">
                <a 
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-cream hover:text-accent-orange transition-colors text-xs font-bold uppercase tracking-widest hover:border-accent-orange pb-1 border-b border-cream/20"
                >
                  <span>{tool.ctaLabel || 'Open Tool'}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolSpecs;

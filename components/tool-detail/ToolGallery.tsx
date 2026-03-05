import React from 'react';
import { Tool } from '../../types';
import { ExternalLink, Layers, Palette, Type, Activity, Grid, Monitor, Check, Sun, Moon } from 'lucide-react';

interface ToolGalleryProps {
  tool: Tool;
}

const ToolGallery: React.FC<ToolGalleryProps> = ({ tool }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Main Image (Large) */}
      <div className="lg:col-span-2 bg-surface/5 overflow-hidden">
        {tool.cover ? (
          <img 
            src={tool.cover} 
            alt={`${tool.name} cover`} 
            className="w-full h-auto object-cover"
          />
        ) : (
          <div className="w-full aspect-[16/9] bg-gradient-to-br from-charcoal to-surface flex items-center justify-center text-cream/20 font-display text-4xl font-bold">
            No Cover
          </div>
        )}
      </div>

      {/* Grid Images (Small) */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        {tool.images?.slice(0, 2).map((img, i) => (
          <div key={i} className="bg-surface/5 overflow-hidden">
            <img 
              src={img} 
              alt={`${tool.name} screenshot ${i+1}`} 
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
        {/* Placeholder if no images */}
        {!tool.images?.length && (
          <>
            <div className="w-full aspect-[4/3] bg-white/5 flex items-center justify-center text-cream/10">
              <span className="font-mono text-xs">Screenshot 1</span>
            </div>
            <div className="w-full aspect-[4/3] bg-white/5 flex items-center justify-center text-cream/10">
              <span className="font-mono text-xs">Screenshot 2</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ToolGallery;

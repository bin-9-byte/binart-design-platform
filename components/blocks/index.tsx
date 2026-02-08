import React from 'react';
import { ContentBlock } from '../../types';

export const TextBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
  <p className="font-sans text-lg leading-8 text-cream/80 mb-8 font-light tracking-wide">
    {block.text}
  </p>
);

export const HeadingBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
  <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
    {block.text}
  </h2>
);

export const ImageBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
  <div className="my-12 w-full">
    <img 
        src={block.src} 
        alt={block.alt || 'Article image'} 
        className="w-full h-auto rounded-sm shadow-2xl border border-white/5"
    />
    {block.caption && (
        <p className="mt-3 text-center text-xs font-mono text-cream/40">{block.caption}</p>
    )}
  </div>
);

export const QuoteBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
  <blockquote className="my-12 relative">
     <div className="absolute -left-6 top-0 text-6xl text-accent-orange opacity-50 font-serif leading-none">"</div>
     <p className="font-display text-3xl font-bold text-cream italic leading-tight pl-6">
       {block.text}
     </p>
     {block.caption && (
       <cite className="block mt-4 pl-6 text-sm font-sans uppercase tracking-widest text-cream/50 not-italic">
         — {block.caption}
       </cite>
     )}
  </blockquote>
);

export const GalleryBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
        {block.images?.map((img, i) => (
            <img key={i} src={img} className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="Gallery item" />
        ))}
    </div>
);

export const DividerBlock: React.FC = () => (
    <div className="w-12 h-1px bg-accent-orange my-16 mx-auto h-[1px]"></div>
);

export const NoteBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
    <div className="my-12 bg-white/5 border-l-2 border-accent-orange p-6 rounded-r-lg">
        {block.title && (
            <h4 className="font-display text-accent-orange font-bold text-lg mb-2">{block.title}</h4>
        )}
        <p className="font-sans text-cream/80 text-base leading-relaxed">
            {block.text}
        </p>
    </div>
);

export const ListBlock: React.FC<{ block: ContentBlock }> = ({ block }) => {
    const Tag = block.listType === 'ol' ? 'ol' : 'ul';
    return (
        <Tag className={`my-8 pl-6 space-y-3 text-cream/80 font-sans text-lg ${block.listType === 'ol' ? 'list-decimal' : 'list-disc'}`}>
            {block.items?.map((item, i) => (
                <li key={i} className="pl-2 marker:text-accent-orange">{item}</li>
            ))}
        </Tag>
    );
};

export const VideoBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
    <div className="my-12 w-full">
        <video 
            src={block.videoUrl} 
            poster={block.poster}
            controls
            playsInline
            loop
            className="w-full h-auto rounded-sm shadow-2xl border border-white/5 bg-black"
        />
        {block.caption && (
            <p className="mt-3 text-center text-xs font-mono text-cream/40">{block.caption}</p>
        )}
    </div>
);

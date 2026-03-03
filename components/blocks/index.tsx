import React from 'react';
import { ContentBlock } from '../../types';

export const TextBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
  <p className="font-sans text-lg leading-8 text-cream/80 mb-8 font-light tracking-wide">
    {block.text}
  </p>
);

export const HeadingBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
  <h2 className="font-display text-3xl font-bold text-cream mt-16 mb-6 leading-tight">
    {block.text}
  </h2>
);

export const ImageBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
  <div className="my-12 w-full">
    <img 
        src={block.src} 
        alt={block.alt || 'Article image'} 
        className="block w-full h-auto rounded-sm"
    />
    {block.caption && (
        <p className="mt-3 text-center text-xs font-mono text-cream/40">{block.caption}</p>
    )}
  </div>
);

export const QuoteBlock: React.FC<{ block: ContentBlock; variant?: 'default' | 'afterHeading' }> = ({ block, variant = 'default' }) => (
  <blockquote className={variant === 'afterHeading' ? 'mt-6 mb-12 relative' : 'my-12 relative'}>
     <div className="absolute -left-6 top-0 text-6xl text-accent-orange opacity-50 font-serif leading-none">"</div>
     <p className={variant === 'afterHeading'
       ? 'font-display text-lg md:text-xl font-semibold text-cream italic leading-tight pl-6'
       : 'font-display text-xl md:text-2xl font-semibold text-cream italic leading-tight pl-6'
     }>
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
            <img key={i} src={img} className="block w-full h-auto rounded-sm" alt="Gallery item" />
        ))}
    </div>
);

export const DividerBlock: React.FC = () => (
    <div className="w-12 h-1px bg-accent-orange my-16 mx-auto h-[1px]"></div>
);

export const NoteBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
    <div className="my-12 bg-muted/5 border-l-2 border-accent-orange p-6 rounded-r-lg">
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
            className="w-full h-auto rounded-sm bg-black"
        />
        {block.caption && (
            <p className="mt-3 text-center text-xs font-mono text-cream/40">{block.caption}</p>
        )}
    </div>
);

export const PersonaBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
    <div className="my-12 p-8 bg-white/5 rounded-lg border border-white/10 flex flex-col md:flex-row gap-8 items-start">
        {block.src && (
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full overflow-hidden bg-white/10">
                <img src={block.src} alt={block.title || 'Persona'} className="w-full h-full object-cover" />
            </div>
        )}
        <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                    <h3 className="text-xl font-display font-bold text-cream">{block.title}</h3>
                    {block.role && <p className="text-accent-orange text-sm uppercase tracking-wider mt-1">{block.role}</p>}
                </div>
            </div>
            {block.bio && <p className="text-cream/80 font-sans leading-relaxed mb-6">{block.bio}</p>}
            
            {block.traits && (
                <div className="flex flex-wrap gap-2">
                    {block.traits.map((trait, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-cream/70 font-mono">
                            {trait}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </div>
);

export const GridBlock: React.FC<{ block: ContentBlock }> = ({ block }) => {
    const cols = block.columns || 2;
    const gridClass = cols === 3 ? 'md:grid-cols-3' : cols === 4 ? 'md:grid-cols-4' : 'md:grid-cols-2';
    
    return (
        <div className={`grid grid-cols-1 ${gridClass} gap-6 my-12`}>
            {block.gridItems?.map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-lg border border-white/5">
                    {item.image && (
                        <div className="mb-4 rounded overflow-hidden aspect-video bg-black/20">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                    )}
                    {item.title && <h4 className="font-display font-bold text-lg text-cream mb-2">{item.title}</h4>}
                    {item.description && <p className="text-sm text-cream/60 leading-relaxed">{item.description}</p>}
                </div>
            ))}
        </div>
    );
};

export const StatsBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12 py-8 border-y border-white/5">
        {block.stats?.map((stat, i) => (
            <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-accent-orange mb-1">{stat.value}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-cream/60 mb-2">{stat.label}</div>
                {stat.description && <div className="text-xs text-cream/40">{stat.description}</div>}
            </div>
        ))}
    </div>
);

export const ProcessBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
    <div className="my-12 space-y-8">
        {block.steps?.map((step, i) => (
            <div key={i} className="flex gap-6 group">
                <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-accent-orange/20 text-accent-orange flex items-center justify-center font-mono text-sm border border-accent-orange/50">
                        {i + 1}
                    </div>
                    {i !== (block.steps?.length || 0) - 1 && (
                        <div className="w-px h-full bg-white/10 my-2 group-hover:bg-accent-orange/30 transition-colors"></div>
                    )}
                </div>
                <div className="pb-8">
                    <h4 className="font-display font-bold text-lg text-cream mb-2">{step.title}</h4>
                    <p className="text-cream/70 leading-relaxed">{step.description}</p>
                </div>
            </div>
        ))}
    </div>
);

export const ComparisonBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
    <div className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <div className="relative rounded-lg overflow-hidden border border-white/10">
                    <img src={block.imageBefore} alt="Before" className="w-full h-auto" />
                    <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur text-xs font-mono text-white rounded">
                        {block.labelBefore || 'BEFORE'}
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <div className="relative rounded-lg overflow-hidden border border-white/10">
                    <img src={block.imageAfter} alt="After" className="w-full h-auto" />
                    <div className="absolute top-2 left-2 px-2 py-1 bg-accent-orange text-xs font-mono text-white rounded">
                        {block.labelAfter || 'AFTER'}
                    </div>
                </div>
            </div>
        </div>
        {block.caption && (
            <p className="mt-4 text-center text-xs font-mono text-cream/40">{block.caption}</p>
        )}
    </div>
);

export const KeyValueBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
    <div className="my-12 rounded-lg border border-white/10 bg-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2">
            {block.kvItems?.map((item, i) => (
                <div
                    key={`${item.key}-${i}`}
                    className="px-6 py-5 border-b border-white/10 md:border-b-0 md:border-r border-white/10 last:border-b-0 md:last:border-r-0"
                >
                    <div className="text-xs font-mono uppercase tracking-widest text-cream/50 mb-2">{item.key}</div>
                    <div className="text-cream font-sans leading-relaxed">{item.value}</div>
                    {item.note && <div className="mt-2 text-xs text-cream/40">{item.note}</div>}
                </div>
            ))}
        </div>
    </div>
);

export const InsightsBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
    <div className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {block.insights?.map((insight, i) => (
                <div key={`${insight.title}-${i}`} className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h4 className="font-display font-bold text-lg text-cream mb-4">{insight.title}</h4>
                    {insight.evidence && (
                        <div className="mb-4">
                            <div className="text-xs font-mono uppercase tracking-widest text-cream/40 mb-2">Evidence</div>
                            <div className="text-cream/70 leading-relaxed">{insight.evidence}</div>
                        </div>
                    )}
                    {insight.impact && (
                        <div className="mb-4">
                            <div className="text-xs font-mono uppercase tracking-widest text-cream/40 mb-2">Impact</div>
                            <div className="text-cream/70 leading-relaxed">{insight.impact}</div>
                        </div>
                    )}
                    {insight.recommendation && (
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest text-accent-orange/80 mb-2">Recommendation</div>
                            <div className="text-cream leading-relaxed">{insight.recommendation}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export const JourneyBlock: React.FC<{ block: ContentBlock }> = ({ block }) => (
    <div className="my-12">
        <div className="flex gap-4 overflow-x-auto pb-2">
            {block.phases?.map((phase, i) => (
                <div
                    key={`${phase.name}-${i}`}
                    className="min-w-[280px] max-w-[360px] flex-shrink-0 bg-white/5 rounded-lg border border-white/10 p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="font-display font-bold text-cream">{phase.name}</div>
                        <div className="text-xs font-mono text-cream/40">{String(i + 1).padStart(2, '0')}</div>
                    </div>
                    {phase.goal && (
                        <div className="mb-4">
                            <div className="text-xs font-mono uppercase tracking-widest text-cream/40 mb-2">Goal</div>
                            <div className="text-cream/70 leading-relaxed">{phase.goal}</div>
                        </div>
                    )}
                    {phase.painPoints?.length ? (
                        <div className="mb-4">
                            <div className="text-xs font-mono uppercase tracking-widest text-cream/40 mb-2">Pain</div>
                            <ul className="space-y-2 text-cream/70">
                                {phase.painPoints.map((p, idx) => (
                                    <li key={`${p}-${idx}`} className="flex gap-2">
                                        <span className="text-accent-orange/80">•</span>
                                        <span className="leading-relaxed">{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                    {phase.opportunities?.length ? (
                        <div>
                            <div className="text-xs font-mono uppercase tracking-widest text-accent-orange/80 mb-2">Opportunity</div>
                            <ul className="space-y-2 text-cream">
                                {phase.opportunities.map((o, idx) => (
                                    <li key={`${o}-${idx}`} className="flex gap-2">
                                        <span className="text-accent-orange">•</span>
                                        <span className="leading-relaxed">{o}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    </div>
);

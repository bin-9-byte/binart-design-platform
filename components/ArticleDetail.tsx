
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Article, ContentBlock } from '../types';
import { FEATURED_ARTICLES, TOPIC_DATA } from '../constants';
import { ArrowLeft, Share2, Play, Pause, Sun, Moon } from 'lucide-react';
import { 
  TextBlock, 
  HeadingBlock, 
  ImageBlock, 
  QuoteBlock, 
  GalleryBlock, 
  DividerBlock,
  NoteBlock,
  ListBlock,
  VideoBlock,
  PersonaBlock,
  GridBlock,
  StatsBlock,
  ProcessBlock,
  ComparisonBlock,
  KeyValueBlock,
  InsightsBlock,
  JourneyBlock
} from './blocks';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
  onArticleSelect?: (article: Article, sourceId?: string) => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  transitionId: string | null;
}

const BlockComponents: Record<string, React.FC<{ block: ContentBlock }>> = {
  paragraph: TextBlock,
  h2: HeadingBlock,
  image: ImageBlock,
  gallery: GalleryBlock,
  divider: DividerBlock,
  note: NoteBlock,
  list: ListBlock,
  video: VideoBlock,
  persona: PersonaBlock,
  grid: GridBlock,
  stats: StatsBlock,
  process: ProcessBlock,
  comparison: ComparisonBlock,
  kv: KeyValueBlock,
  insights: InsightsBlock,
  journey: JourneyBlock
};

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack, onArticleSelect, theme, onThemeToggle, transitionId }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Find next article logic
  const allArticles = TOPIC_DATA;
  const currentIndex = allArticles.findIndex(a => a.id === article.id);
  // Default to first article if not found (shouldn't happen) or loop back to start
  const nextArticle = currentIndex >= 0 
      ? allArticles[(currentIndex + 1) % allArticles.length]
      : allArticles[0];

  // Scroll to top on mount immediately
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [article.id]);

  useEffect(() => {
    setIsVideoPlaying(false);
    if (article.mediaType !== 'video') return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const maybePromise = video.play();

    if (maybePromise && typeof (maybePromise as Promise<void>).then === 'function') {
      (maybePromise as Promise<void>)
        .then(() => setIsVideoPlaying(true))
        .catch(() => {});
      return;
    }

    setIsVideoPlaying(!video.paused);
  }, [article.id, article.mediaType]);

  const toggleVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const renderHeroMedia = () => {
    if (article.mediaType === 'video') {
      return (
        <div className="w-full h-full relative group cursor-pointer" onClick={toggleVideo}>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="relative inline-flex h-full max-w-full">
                    <video 
                        ref={videoRef}
                        src={article.videoUrl}
                        poster={article.imageUrl}
                        className="h-full w-auto max-w-full object-contain"
                        muted
                        playsInline
                        loop
                        onClick={(e) => { e.preventDefault(); }}
                    />
                    <div className="absolute inset-0 bg-muted/10 group-hover:bg-transparent transition-colors duration-base ease-standard pointer-events-none"></div>
                </div>
            </div>
            
            {/* Play/Pause Button Overlay */}
            <div className={`absolute bottom-6 right-6 w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-cream border border-line/10 transition-all duration-base ease-standard z-20 ${isVideoPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                {isVideoPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
            </div>
        </div>
      );
    }
    
    if (article.mediaType === 'gif') {
      return (
        <div className="w-full h-full relative flex items-center justify-center">
            {/* Prioritize gifUrl for animation, fallback to imageUrl if missing */}
            <img 
                src={article.gifUrl || article.imageUrl} 
                alt={article.title} 
                className="h-full w-auto max-w-full object-contain"
            />
            {/* No overlay icon for GIF, just pure content */}
        </div>
      );
    }

    return (
        <div className="w-full h-full relative group flex items-center justify-center">
            <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="h-full w-auto max-w-full object-contain"
            />
            {/* No Play Icon for static images */}
        </div>
    );
  };

  return (
    <article className="min-h-screen bg-charcoal text-cream selection:bg-accent-orange selection:text-white">
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

      <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-32">
        {/* 1. Hero Image/Video Section */}
        <div 
          className="w-full h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-sm relative mb-16 bg-transparent flex items-center justify-center"
          style={transitionId ? { viewTransitionName: 'hero-image' } : undefined}
        >
            {renderHeroMedia()}
        </div>

        {/* 2. Title & Metadata Header (Centered) */}
        <div className="max-w-4xl mx-auto text-center mb-20 border-b border-line/5 pb-16">
             <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-cream mb-8">
                {article.title}
             </h1>

             <p className="font-sans text-lg md:text-xl text-cream/60 max-w-2xl mx-auto leading-relaxed mb-8">
                {article.excerpt}
             </p>

             <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-cream/40">
                <span className="text-cream">By {article.author}</span>
                <span className="hidden md:inline">•</span>
                <span>{article.category}</span>
                <span className="hidden md:inline">•</span>
                <span>{article.date}</span>
                <span className="hidden md:inline">•</span>
                <span>{article.readTime}</span>
             </div>
        </div>

        {/* 3. Main Article Body */}
        <article className="max-w-3xl mx-auto pb-32">
             {/* If no blocks exist, render default content */}
             {article.blocks ? (
                 article.blocks.map((block, idx) => {
                   const prevType = idx > 0 ? article.blocks?.[idx - 1]?.type : null;
                   if (block.type === 'quote') {
                     return (
                       <QuoteBlock
                         key={idx}
                         block={block}
                         variant={prevType === 'h2' ? 'afterHeading' : 'default'}
                       />
                     );
                   }
                   const Component = BlockComponents[block.type];
                   return Component ? <Component key={idx} block={block} /> : null;
                 })
             ) : (
                 <div className="space-y-8">
                     <p className="font-sans text-lg leading-8 text-cream/80 mb-8 font-light tracking-wide">
                        {article.excerpt}
                     </p>
                     <p className="font-sans text-lg leading-8 text-cream/80 mb-8 font-light tracking-wide">
                        [Content placeholder: Detailed analysis and visual exploration of {article.title}.]
                     </p>
                 </div>
             )}
             
             {/* Article Signature */}
             <div className="mt-24 pt-12 flex items-center justify-center">
                <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
             </div>
        </article>
      </div>

      {/* Footer Navigation */}
      <div className="bg-surface py-24 border-t border-line/5">
         <div className="container mx-auto px-6 text-center">
            <p className="text-accent-orange/80 text-xs font-bold uppercase tracking-widest mb-6">Read Next</p>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-cream mb-8 max-w-3xl mx-auto">
              <button
                type="button"
                onClick={() => onArticleSelect?.(nextArticle)}
                className="hover:text-cream/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-surface rounded-sm active:scale-[0.99]"
              >
                {nextArticle.title}
              </button>
            </h3>
            <button type="button" onClick={onBack} className="text-cream/40 hover:text-cream transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-line/20 pb-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-surface rounded-sm px-1">
                Back to Feed
            </button>
         </div>
      </div>
    </article>
  );
};

export default ArticleDetail;

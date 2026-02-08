
import React, { useState, useRef, useLayoutEffect } from 'react';
import { Article, ContentBlock } from '../types';
import { FEATURED_ARTICLES, TOPIC_DATA } from '../constants';
import { ArrowLeft, Share2, Play, Pause } from 'lucide-react';
import { 
  TextBlock, 
  HeadingBlock, 
  ImageBlock, 
  QuoteBlock, 
  GalleryBlock, 
  DividerBlock,
  NoteBlock,
  ListBlock,
  VideoBlock
} from './blocks';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
  onArticleSelect?: (article: Article) => void;
}

const BlockComponents: Record<string, React.FC<{ block: ContentBlock }>> = {
  paragraph: TextBlock,
  h2: HeadingBlock,
  image: ImageBlock,
  quote: QuoteBlock,
  gallery: GalleryBlock,
  divider: DividerBlock,
  note: NoteBlock,
  list: ListBlock,
  video: VideoBlock
};

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack, onArticleSelect }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Find next article logic
  const allArticles = [...FEATURED_ARTICLES, ...TOPIC_DATA];
  const currentIndex = allArticles.findIndex(a => a.id === article.id);
  // Default to first article if not found (shouldn't happen) or loop back to start
  const nextArticle = currentIndex >= 0 
      ? allArticles[(currentIndex + 1) % allArticles.length]
      : allArticles[0];

  // Scroll to top on mount immediately
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article.id]);

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
            <video 
                ref={videoRef}
                src={article.videoUrl}
                poster={article.imageUrl}
                className="w-full h-full object-cover"
                playsInline
                loop
                onClick={(e) => { e.preventDefault(); /* Click handled by container to toggle */ }}
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
            
            {/* Functional Play/Pause Control */}
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-charcoal/90 backdrop-blur rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 z-20 shadow-lg">
                {isVideoPlaying ? (
                    <Pause size={16} fill="currentColor" className="text-white" />
                ) : (
                    <Play size={16} fill="currentColor" className="text-white ml-1" />
                )}
            </div>
        </div>
      );
    }

    if (article.mediaType === 'gif') {
      return (
        <div className="w-full h-full relative">
            {/* Prioritize gifUrl for animation, fallback to imageUrl if missing */}
            <img 
                src={article.gifUrl || article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover"
            />
            {/* No overlay icon for GIF, just pure content */}
        </div>
      );
    }

    // Default: Image
    return (
        <div className="w-full h-full relative group">
            <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
            {/* No Play Icon for static images */}
        </div>
    );
  };

  return (
    <div className="bg-charcoal min-h-screen relative z-50 animate-fade-in-up">
      {/* Navigation Bar (Floating/Sticky) */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 pointer-events-none">
        <button 
            onClick={onBack}
            className="pointer-events-auto flex items-center space-x-2 text-cream hover:text-accent-orange transition-colors group bg-charcoal/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg"
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back</span>
        </button>

        <div className="flex gap-2">
            <button className="pointer-events-auto text-cream hover:text-white transition-colors bg-charcoal/80 backdrop-blur-md p-2.5 rounded-full border border-white/10 shadow-lg">
                <Share2 size={16} />
            </button>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-32">
        {/* 1. Hero Image/Video Section */}
        <div className="w-full aspect-video md:aspect-[21/10] overflow-hidden rounded-sm relative mb-16 bg-[#0a0a0a] border border-white/5">
            {renderHeroMedia()}
        </div>

        {/* 2. Title & Metadata Header (Centered) */}
        <div className="max-w-4xl mx-auto text-center mb-20 border-b border-white/5 pb-16">
             <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white mb-8">
                {article.title}
             </h1>

             <p className="font-sans text-lg md:text-xl text-cream/60 max-w-2xl mx-auto leading-relaxed mb-8">
                {article.excerpt}
             </p>

             <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-cream/40">
                <span className="text-white">By {article.author}</span>
                <span className="hidden md:inline">•</span>
                <span>{article.category}</span>
                <span className="hidden md:inline">•</span>
                <span>{article.date}</span>
             </div>
        </div>

        {/* 3. Main Article Body */}
        <article className="max-w-2xl mx-auto pb-32">
             {/* If no blocks exist, render default content */}
             {article.blocks ? (
                 article.blocks.map((block, idx) => {
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
      <div className="bg-[#0f0f0f] py-24 border-t border-white/5">
         <div className="container mx-auto px-6 text-center">
            <p className="text-accent-orange/80 text-xs font-bold uppercase tracking-widest mb-6">Read Next</p>
            <h3 
                onClick={() => onArticleSelect?.(nextArticle)}
                className="font-display text-3xl md:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto hover:text-cream/80 cursor-pointer transition-colors"
            >
                {nextArticle.title}
            </h3>
            <button onClick={onBack} className="text-cream/40 hover:text-white transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-white/20 pb-1">
                Back to Feed
            </button>
         </div>
      </div>
    </div>
  );
};

export default ArticleDetail;

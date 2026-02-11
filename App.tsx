
import React, { useState, useRef, useLayoutEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import TopicShowcase from './components/TopicShowcase';
import ToolsShowcase from './components/ToolsShowcase';
import Footer from './components/Footer';
import ArticleDetail from './components/ArticleDetail';
import ToolDetail from './components/ToolDetail';
import SubscribeOverlay from './components/SubscribeOverlay';
import { Article, Tool } from './types';

const App: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  
  const scrollPositionRef = useRef(0);
  const isDetailOpen = useRef(false);

  const handleArticleSelect = (article: Article) => {
    // Save current scroll position before switching
    scrollPositionRef.current = window.scrollY;
    isDetailOpen.current = true;
    setActiveArticle(article);
    setActiveTool(null);
  };

  const handleToolSelect = (tool: Tool) => {
    scrollPositionRef.current = window.scrollY;
    isDetailOpen.current = true;
    setActiveTool(tool);
    setActiveArticle(null);
  };

  const handleBack = () => {
    setActiveArticle(null);
    setActiveTool(null);
  };

  useLayoutEffect(() => {
    // Restore scroll position ONLY when returning from ANY detail view to the feed
    // If we WERE in a detail view (isDetailOpen) and now BOTH active states are null, restore scroll
    if (isDetailOpen.current && !activeArticle && !activeTool) {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'instant'
      });
      isDetailOpen.current = false;
    }
  }, [activeArticle, activeTool]);

  // Determine what to render
  const renderContent = () => {
    if (activeArticle) {
      return <ArticleDetail article={activeArticle} onBack={handleBack} onArticleSelect={handleArticleSelect} />;
    }
    if (activeTool) {
      return <ToolDetail tool={activeTool} onBack={handleBack} />;
    }
    
    return (
      <>
        <Hero />
        {/* Added id="discover" for navigation, reverted title to Featured Stories */}
        <FeaturedSection id="discover" title="Featured Stories" onArticleSelect={handleArticleSelect} />
        <FeaturedSection title="UX" onArticleSelect={handleArticleSelect} />
        <FeaturedSection title="Typography" onArticleSelect={handleArticleSelect} />
        <FeaturedSection title="Guides" onArticleSelect={handleArticleSelect} />
        <TopicShowcase onArticleSelect={handleArticleSelect} />
        <ToolsShowcase onToolSelect={handleToolSelect} />
      </>
    );
  };

  const isFeedVisible = !activeArticle && !activeTool;

  return (
    <div className="bg-charcoal min-h-screen text-cream selection:bg-accent-orange selection:text-white">
      {/* 
        Navigation is shown on the feed. Detail views have their own back buttons/headers.
      */}
      {isFeedVisible && (
        <Navigation onSubscribeClick={() => setIsSubscribeOpen(true)} />
      )}
      
      <main>
        {renderContent()}
      </main>

      {isFeedVisible && <Footer />}

      <SubscribeOverlay isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
      
      {/* Global Grain Overlay for Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
                <feTurbulence 
                    type="fractalNoise" 
                    baseFrequency="0.65" 
                    numOctaves="3" 
                    stitchTiles="stitch" 
                />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
};

export default App;

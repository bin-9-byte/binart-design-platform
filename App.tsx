
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { flushSync } from 'react-dom';
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
  const [transitionId, setTransitionId] = useState<string | null>(null);
  // Store the sourceId (uniqueKey) of the last clicked item to restore the transition on back
  const lastSourceIdRef = useRef<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });
  
  const scrollPositionRef = useRef(0);
  const isDetailOpen = useRef(false);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const isOverlayOpen = isSubscribeOpen;

  useEffect(() => {
    const el = backgroundRef.current as any;
    if (!el) return;
    el.inert = isOverlayOpen;
  }, [isOverlayOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleArticleSelect = (article: Article, sourceId?: string) => {
    const isFromFeed = !activeArticle && !activeTool;
    if (isFromFeed) {
      scrollPositionRef.current = window.scrollY;
      isDetailOpen.current = true;
    }
    
    // Store sourceId for back transition (unused for now in simplified back logic, but good to keep)
    lastSourceIdRef.current = sourceId || article.id;

    if (document.startViewTransition) {
      document.documentElement.dataset.transition = 'forward';
      // Set transitionId to the sourceId (unique for this card instance) if provided,
      // otherwise fallback to article.id (though this might cause conflicts if duplicate IDs exist)
      flushSync(() => {
        setTransitionId(sourceId || article.id);
      });
      
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setActiveArticle(article);
          setActiveTool(null);
        });
      });

      transition.finished.finally(() => {
        setTransitionId(null);
        delete document.documentElement.dataset.transition;
      });
    } else {
      setActiveArticle(article);
      setActiveTool(null);
    }
  };

  const handleToolSelect = (tool: Tool, sourceId?: string) => {
    const isFromFeed = !activeArticle && !activeTool;
    if (isFromFeed) {
      scrollPositionRef.current = window.scrollY;
      isDetailOpen.current = true;
    }
    
    lastSourceIdRef.current = sourceId || tool.id;

    if (document.startViewTransition) {
      document.documentElement.dataset.transition = 'back';
      flushSync(() => {
        setTransitionId(null);
      });

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setActiveTool(tool);
          setActiveArticle(null);
        });
      });

      transition.finished.finally(() => {
        setTransitionId(null);
        delete document.documentElement.dataset.transition;
      });
    } else {
      setActiveTool(tool);
      setActiveArticle(null);
    }
  };

  const handleBack = () => {
    if (document.startViewTransition) {
      document.documentElement.dataset.transition = 'back';
      
      // IMPORTANT: We do NOT set transitionId here.
      // This ensures that the Feed (list) items do NOT get the 'hero-image' view-transition-name during back navigation.
      // Consequently, the Detail page's hero image (which has the name) will not find a matching target in the new view.
      // This causes the browser to fallback to the default root animation (Slide Down / Fade Out) for the whole page,
      // including the image, which effectively solves the "flying image" issue when scrolled down.
      
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setActiveArticle(null);
          setActiveTool(null);
        });
      });

      transition.finished.finally(() => {
        setTransitionId(null);
        delete document.documentElement.dataset.transition;
      });
    } else {
      setActiveArticle(null);
      setActiveTool(null);
    }
  };

  useLayoutEffect(() => {
    // View Transition handles the visual transition, but we need to restore scroll position for the Feed
    // However, if we scroll IMMEDIATELY, it might jar the exit animation of the Detail page
    // The browser's View Transition API snapshots the OLD state (Detail) and NEW state (Feed)
    // If we scroll the Feed (New State) instantly, the snapshot might capture the scrolled position correctly,
    // which is what we want.
    if (isDetailOpen.current && !activeArticle && !activeTool) {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'instant' // Use instant to ensure the feed is in place BEFORE the snapshot is rendered
      });
      isDetailOpen.current = false;
    }
  }, [activeArticle, activeTool]);

  // Determine what to render
  const renderContent = () => {
    if (activeArticle) {
      return <ArticleDetail article={activeArticle} onBack={handleBack} onArticleSelect={handleArticleSelect} theme={theme} onThemeToggle={toggleTheme} transitionId={transitionId} />;
    }
    if (activeTool) {
      return <ToolDetail tool={activeTool} onBack={handleBack} theme={theme} onThemeToggle={toggleTheme} transitionId={transitionId} />;
    }
    
    return (
      <>
        <Hero />
        {/* Added id="discover" for navigation, reverted title to Featured Stories */}
        <FeaturedSection id="discover" title="Featured Stories" featuredOnly onArticleSelect={handleArticleSelect} transitionId={transitionId} />
        <FeaturedSection title="UX" section="UX" onArticleSelect={handleArticleSelect} transitionId={transitionId} />
        <FeaturedSection title="AIGC" section="AIGC" onArticleSelect={handleArticleSelect} transitionId={transitionId} />
        <FeaturedSection title="Guides" section="Guides" onArticleSelect={handleArticleSelect} transitionId={transitionId} />
        <TopicShowcase onArticleSelect={handleArticleSelect} transitionId={transitionId} />
        <ToolsShowcase onToolSelect={handleToolSelect} transitionId={transitionId} />
      </>
    );
  };

  const isFeedVisible = !activeArticle && !activeTool;

  return (
    <div className="bg-charcoal min-h-screen text-cream selection:bg-accent-orange selection:text-white">
      <div ref={backgroundRef} aria-hidden={isOverlayOpen}>
        {isFeedVisible && (
          <Navigation
            onSubscribeClick={() => {
              setIsSubscribeOpen(true);
            }}
            theme={theme}
            onThemeToggle={toggleTheme}
          />
        )}

        <main>
          {renderContent()}
        </main>

        {isFeedVisible && (
          <Footer
            onSubscribeClick={() => {
              setIsSubscribeOpen(true);
            }}
          />
        )}

        <div aria-hidden="true" className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay">
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

      <SubscribeOverlay isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
    </div>
  );
};

export default App;

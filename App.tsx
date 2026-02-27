
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
import SearchOverlay from './components/SearchOverlay';
import { Article, Tool } from './types';

const App: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [transitionId, setTransitionId] = useState<string | null>(null);
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

  const isOverlayOpen = isSubscribeOpen || isSearchOpen;

  useEffect(() => {
    const el = backgroundRef.current as any;
    if (!el) return;
    el.inert = isOverlayOpen;
  }, [isOverlayOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      if (e.key.toLowerCase() !== 'k') return;
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable) return;
      e.preventDefault();
      setIsSubscribeOpen(false);
      setIsSearchOpen(true);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleArticleSelect = (article: Article) => {
    const isFromFeed = !activeArticle && !activeTool;
    if (isFromFeed) {
      scrollPositionRef.current = window.scrollY;
      isDetailOpen.current = true;
    }
    
    if (document.startViewTransition) {
      document.documentElement.dataset.transition = 'forward';
      // Set transitionId to the article.id so that only this article's image gets the view-transition-name
      flushSync(() => {
        setTransitionId(article.id);
      });
      
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setActiveArticle(article);
          setActiveTool(null);
        });
      });

      transition.finished.finally(() => {
        // Clear transitionId after transition is done to avoid side effects
        setTransitionId(null);
      });
    } else {
      setActiveArticle(article);
      setActiveTool(null);
    }
  };

  const handleToolSelect = (tool: Tool) => {
    const isFromFeed = !activeArticle && !activeTool;
    if (isFromFeed) {
      scrollPositionRef.current = window.scrollY;
      isDetailOpen.current = true;
    }
    
    if (document.startViewTransition) {
      document.documentElement.dataset.transition = 'forward';
      flushSync(() => {
        setTransitionId(tool.id);
      });

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setActiveTool(tool);
          setActiveArticle(null);
        });
      });

      transition.finished.finally(() => {
        setTransitionId(null);
      });
    } else {
      setActiveTool(tool);
      setActiveArticle(null);
    }
  };

  const handleBack = () => {
    if (document.startViewTransition) {
      document.documentElement.dataset.transition = 'back';
      
      // When going back, we need to set the transitionId again so the list item matches the detail hero
      // activeArticle or activeTool is still set at this point
      const currentId = activeArticle?.id || activeTool?.id;
      if (currentId) {
         flushSync(() => {
            setTransitionId(currentId);
         });
      }

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setActiveArticle(null);
          setActiveTool(null);
        });
      });

      transition.finished.finally(() => {
        setTransitionId(null);
      });
    } else {
      setActiveArticle(null);
      setActiveTool(null);
    }
  };

  useLayoutEffect(() => {
    // Restore scroll position ONLY when returning from ANY detail view to the feed
    // If we WERE in a detail view (isDetailOpen) and now BOTH active states are null, restore scroll
    if (isDetailOpen.current && !activeArticle && !activeTool) {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'auto'
      });
      isDetailOpen.current = false;
    }
  }, [activeArticle, activeTool]);

  // Determine what to render
  const renderContent = () => {
    if (activeArticle) {
      return <ArticleDetail article={activeArticle} onBack={handleBack} onArticleSelect={handleArticleSelect} theme={theme} onThemeToggle={toggleTheme} />;
    }
    if (activeTool) {
      return <ToolDetail tool={activeTool} onBack={handleBack} theme={theme} onThemeToggle={toggleTheme} />;
    }
    
    return (
      <>
        <Hero />
        {/* Added id="discover" for navigation, reverted title to Featured Stories */}
        <FeaturedSection id="discover" title="Featured Stories" featuredOnly onArticleSelect={handleArticleSelect} transitionId={transitionId} />
        <FeaturedSection title="UX" section="UX" onArticleSelect={handleArticleSelect} transitionId={transitionId} />
        <FeaturedSection title="Typography" section="Typography" onArticleSelect={handleArticleSelect} transitionId={transitionId} />
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
              setIsSearchOpen(false);
              setIsSubscribeOpen(true);
            }}
            onSearchClick={() => {
              setIsSubscribeOpen(false);
              setIsSearchOpen(true);
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
              setIsSearchOpen(false);
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
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default App;

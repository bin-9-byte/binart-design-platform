
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Pause, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [contentRight, setContentRight] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );
  const containerRef = useRef<HTMLElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef({ current: 0, target: 0 });

  const computeLayout = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const padding = vw >= 768 ? 48 : 24;
    const containerW = Math.max(0, Math.min(vw - padding * 2, 1280));

    if (vw >= 1024) {
      const videoW = Math.min(containerW * 0.52, 760);
      const videoH = videoW * 9 / 16;
      const x = (vw - containerW) / 2 + (containerW - videoW);
      const y = (vh - videoH) / 2;
      return { vw, vh, padding, containerW, videoW, videoH, x, y, mode: 'desktop' as const };
    }

    const videoW = Math.min(vw - padding * 2, 920);
    const videoH = videoW * 9 / 16;
    const x = (vw - videoW) / 2;
    const yMin = padding + 96;
    const yMax = vh - videoH - padding - 64;
    const y = Math.max(yMin, Math.min(yMax, Math.round(vh * 0.52 - videoH / 2)));
    return { vw, vh, padding, containerW, videoW, videoH, x, y, mode: 'mobile' as const };
  };

  const [layout, setLayout] = useState(() =>
    typeof window === 'undefined'
      ? { vw: 0, vh: 0, padding: 24, containerW: 0, videoW: 0, videoH: 0, x: 0, y: 0, mode: 'mobile' as const }
      : computeLayout()
  );

  useEffect(() => {
    let raf = 0;
    let lerpRaf = 0;
    let containerTop = 0;
    let viewportH = 0;
    const LERP_FACTOR = 0.15;

    const measure = () => {
      viewportH = window.innerHeight;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      containerTop = rect.top + window.scrollY;

      const measureEl = measureRef.current;
      if (measureEl) {
        const r = measureEl.getBoundingClientRect();
        const styles = window.getComputedStyle(measureEl);
        const padR = Number.parseFloat(styles.paddingRight) || 0;
        setContentRight(r.right - padR);
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const start = containerTop;
        const animationRange = viewportH * 1.8;
        const raw = (window.scrollY - start) / animationRange;
        const next = Math.max(0, Math.min(1, raw));
        progressRef.current.target = next;
      });
    };

    const lerpLoop = () => {
      const diff = progressRef.current.target - progressRef.current.current;
      if (Math.abs(diff) > 0.0001) {
        progressRef.current.current += diff * LERP_FACTOR;
        setProgress(progressRef.current.current);
      }
      lerpRaf = window.requestAnimationFrame(lerpLoop);
    };

    const onResize = () => {
      measure();
      setLayout(computeLayout());
      onScroll();
    };

    measure();
    onScroll();
    lerpLoop();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (raf) window.cancelAnimationFrame(raf);
      if (lerpRaf) window.cancelAnimationFrame(lerpRaf);
    };
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const el = document.documentElement;
    const update = () => setIsDark(el.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const eased = progress * progress * (3 - 2 * progress);
  const easedSlow = eased * eased;

  const stage = (() => {
    const vw = layout.vw;
    const vh = layout.vh;
    const ratio = 16 / 9;
    const coverW = vw / vh > ratio ? vw : vh * ratio;
    const coverH = coverW / ratio;
    const x0 = (vw - coverW) / 2;
    const y0 = (vh - coverH) / 2;

    const x1 = layout.x;
    const right1 = contentRight ?? (vw - layout.padding);
    const w1Raw = right1 - x1;
    const w1 = w1Raw >= 120 ? w1Raw : layout.videoW;
    const h1 = w1 * 9 / 16;
    const centerY1 = layout.y + layout.videoH / 2;
    const y1 = centerY1 - h1 / 2;

    const x = (1 - eased) * x0 + eased * x1;
    const y = (1 - eased) * y0 + eased * y1;
    const w = (1 - eased) * coverW + eased * w1;
    const h = (1 - eased) * coverH + eased * h1;
    const r = 0;

    return { x, y, w, h, r };
  })();

  const titleP = Math.max(0, Math.min(1, (progress - 0.08) / 0.62));
  const titleOpacity = titleP;
  const titleTranslateY = (1 - titleP) * 26;
  const titleBlur = (1 - titleP) * 10;
  const titleScale = 0.94 + titleP * 0.08;
  const dimMax = isDark ? 0.22 : 0.06;
  const contrastMax = isDark ? 0.06 : 0.02;
  const overlayMax = isDark ? 0.22 : 0.08;
  const videoDim = dimMax * easedSlow;
  const videoBrightness = (isDark ? 1 : 1.04) - videoDim;
  const videoSaturate = isDark ? 1 - easedSlow * dimMax : 1 - easedSlow * 0.1;
  const videoContrast = isDark ? 1 + easedSlow * contrastMax : 1 - easedSlow * contrastMax;
  const bgOverlayClass = isDark
    ? 'bg-gradient-to-b from-black/45 via-black/15 to-black/70'
    : 'bg-gradient-to-b from-charcoal/0 via-charcoal/0 to-charcoal/25';
  const bgOverlayOpacity = isDark ? 1 - eased : 1 - easedSlow;

  return (
    <section ref={containerRef} className="relative h-[290vh] bg-charcoal">
      <div className="sticky top-0 h-screen overflow-hidden bg-charcoal">
        <div ref={measureRef} className="container mx-auto px-6 md:px-12 h-0 overflow-hidden pointer-events-none select-none opacity-0"></div>
        <div
          className="absolute overflow-hidden"
          style={{
            left: `${stage.x.toFixed(2)}px`,
            top: `${stage.y.toFixed(2)}px`,
            width: `${stage.w.toFixed(2)}px`,
            height: `${stage.h.toFixed(2)}px`,
            borderRadius: `${stage.r.toFixed(2)}px`
          }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/hero/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              filter: `brightness(${videoBrightness.toFixed(3)}) saturate(${videoSaturate.toFixed(3)}) contrast(${videoContrast.toFixed(3)})`
            }}
          />
          <div
            className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-black' : 'bg-charcoal'}`}
            style={{ opacity: easedSlow * overlayMax }}
          ></div>
          <div
            className="absolute inset-0 shadow-2xl pointer-events-none"
            style={{ opacity: eased }}
          ></div>
        </div>

        <div
          className={`absolute inset-0 pointer-events-none ${bgOverlayClass}`}
          style={{ opacity: bgOverlayOpacity }}
        ></div>

        <div className="absolute inset-0 z-10">
          <div className="h-full container mx-auto px-6 md:px-12 flex items-center">
            <div
              className="max-w-2xl"
              style={{
                opacity: titleOpacity,
                transform: `translateY(${titleTranslateY.toFixed(2)}px) scale(${titleScale.toFixed(3)})`,
                filter: `blur(${titleBlur.toFixed(2)}px)`
              }}
            >
              <h1 className="font-display font-bold text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tighter text-cream">
                <span className="block">Design</span>
                <span className="block">Research</span>
                <span className="block">Culture</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-20">
          <button
            type="button"
            onClick={toggleVideo}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-cream border border-line/10 transition-all duration-fast ease-standard hover:bg-surface active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/50 focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal"
          >
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
          </button>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-cream/50 pointer-events-none"
          style={{ opacity: 1 - Math.min(1, progress * 1.6) }}
        >
          <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
          <div className="w-px h-12 bg-cream/20"></div>
          <ArrowDown size={14} className="text-cream/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

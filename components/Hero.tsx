
import React, { useState } from 'react';
import { ArrowDown, Globe, Activity, PenTool, Command, Mic, Pause, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

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

  return (
    <section className="relative min-h-screen flex items-center bg-charcoal pt-32 pb-20 overflow-hidden">
        {/* Background Elements - Warmer/Neutral Tones */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Content */}
            <div className="flex flex-col items-start">
                <h1 className="font-display font-bold text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.95] tracking-tighter text-cream mb-10">
                    <span className="block">Design</span>
                    <span className="block">Research</span>
                    <span className="block">Culture</span>
                </h1>
                <p className="font-sans text-lg md:text-xl text-cream/70 max-w-lg leading-relaxed mb-8">
                    How dynamic cues help users discover, learn, and master the evolving landscape of digital interaction and visual storytelling.
                </p>
                
                <div className="w-12 h-1 bg-accent-orange rounded-full"></div>
            </div>

            {/* Right Content - Video Player */}
            <div className="relative w-full aspect-square bg-[#0a0a0a] overflow-hidden border border-white/10 shadow-2xl ring-1 ring-white/5 group rounded-2xl">
                 
                 {/* Video Element */}
                 <video 
                    ref={videoRef}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    src="/hero.mp4" 
                    autoPlay
                    muted
                    loop
                    playsInline
                 />
                 
                 {/* Optional Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/40 to-transparent pointer-events-none"></div>

                 {/* Play/Pause Button Overlay */}
                 <div className="absolute bottom-6 right-6 z-20">
                     <button 
                        onClick={toggleVideo}
                        className="w-10 h-10 md:w-12 md:h-12 bg-cream text-charcoal rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-lg group-hover:bg-accent-orange group-hover:text-white"
                     >
                         {isPlaying ? (
                             <Pause className="w-4 h-4 md:w-5 md:h-5 transition-colors duration-300" fill="currentColor" />
                         ) : (
                             <Play className="w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ml-1" fill="currentColor" />
                         )}
                     </button>
                 </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Placeholder images - assuming these are transparent PNG logos
const caseStudies = [
  { image: "/case1.png" },
  { image: "/case2.png" },
  { image: "/case3.png" },
  { image: "/case5.png" },
  { image: "/case6.png" },
  { image: "/case7.png" },
  { image: "/case8.png" },
  { image: "/case9.png" },
  { image: "/case10.png" },
];

// Duplicate the array multiple times to ensure the loop never breaks on ultra-wide monitors
const doubledStudies = [...caseStudies, ...caseStudies, ...caseStudies, ...caseStudies, ...caseStudies, ...caseStudies];

export function CaseStudiesSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-brand-bg border-b border-brand-border/50">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(216,252,77,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 mb-16 md:mb-24 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 rounded-sm bg-accent animate-pulse-slow" />
            <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
              Our Partners
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            // Flawless mobile scaling: max-w forces natural wrapping instead of hard <br/> tags
            className="text-[40px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-black leading-[0.95] tracking-tighter text-white text-center max-w-4xl"
          >
            Real Brands. <br className="hidden md:block" /> Real Growth. <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Zero Downtime.</span>
          </motion.h2>
        </div>
      </div>

      {/* 
        INFINITE SMOOTH SCROLLING CAROUSELS 
        The mask-image fades the edges to black, making the entrance/exit look cinematic.
      */}
      <div 
        className="w-full relative z-10 flex flex-col gap-8 md:gap-12"
        style={{ 
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Row 1 - Scrolling Left */}
        <motion.div 
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: isHovered ? 80 : 40, // Slows down when hovered
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {doubledStudies.map((study, idx) => (
            <div 
              key={`row1-${idx}`}
              // Scaled down mobile sizing (w-[120px]) so it doesn't look gigantic on phones
              className="shrink-0 w-[120px] md:w-[160px] lg:w-[200px] pr-8 md:pr-16 flex items-center justify-center transition-all duration-500 cursor-pointer group"
            >
              <img 
                src={study.image} 
                alt="Brand Partner" 
                className="w-full h-auto max-h-[60px] md:max-h-[80px] object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Scrolling Right */}
        <motion.div 
          className="flex w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: isHovered ? 80 : 40,
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...doubledStudies].reverse().map((study, idx) => (
            <div 
              key={`row2-${idx}`}
              className="shrink-0 w-[120px] md:w-[160px] lg:w-[200px] pr-8 md:pr-16 flex items-center justify-center transition-all duration-500 cursor-pointer group"
            >
              <img 
                src={study.image} 
                alt="Brand Partner" 
                className="w-full h-auto max-h-[60px] md:max-h-[80px] object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Refined CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mt-16 md:mt-24 relative z-20"
      >
        <button className="flex items-center gap-3 text-[11px] md:text-[13px] font-bold uppercase tracking-widest border border-white/10 px-8 py-4 rounded-full text-white bg-white/5 hover:bg-accent hover:border-accent hover:text-black transition-all duration-300 group">
          View All Case Studies
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

    </section>
  );
}
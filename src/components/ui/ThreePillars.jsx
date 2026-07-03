"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function ThreePillars() {
  // Stagger animation for the hero content loading in
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-brand-bg px-4 md:px-6 z-0">
      
      {/* 1. CINEMATIC VIDEO BACKGROUND */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none mix-blend-luminosity scale-105"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      
      {/* Deep vignette to ensure perfect text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0b0c0c_100%)] pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c0c]/40 via-transparent to-[#0b0c0c] pointer-events-none" />

      

     

      {/* 3. OPTICALLY CENTERED HERO CONTENT */}
      {/* We use -mt-12 to shift the content slightly up. Optically, this makes it look perfectly centered to the human eye. */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-16"
      >
         

          {/* Crisp, Massive Headline */}
          <motion.h1 variants={itemVariants} className="text-[clamp(44px,7vw,96px)] font-black leading-[0.95] tracking-tighter mb-6 text-white drop-shadow-2xl">
              Fueling the Next <br />
              {/* Hollow text refined with a faint glow so it doesn't look flat */}
              <span className="text-transparent [-webkit-text-stroke:1.5px_#d8fc4d] drop-shadow-[0_0_15px_rgba(216,252,77,0.2)]">Generation</span> of Brands
          </motion.h1>

          {/* Elegant Subheadline */}
          <motion.p variants={itemVariants} className="text-white/70 text-[clamp(16px,2vw,20px)] font-medium mb-12 max-w-2xl px-4 leading-relaxed">
              We build and manage elite growth engines. Powering bold ideas with omnichannel strategy, stunning creative, and guaranteed revenue scaling.
          </motion.p>

          {/* High-End Tactile Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-5">
              
              {/* Primary Button: Added a subtle inner shadow to make it feel 3D */}
              <button className="relative overflow-hidden bg-brand-lime text-black px-8 py-4 rounded-full text-[16px] font-bold hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-[0_0_40px_rgba(216,252,77,0.2)] group border border-[#cbf03d]">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Hover sheen effect */}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </button>

              {/* Secondary Button: Premium frosted glass look */}
              <button className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  Watch Demo
              </button>

          </motion.div>
      </motion.main>
      
    </section>
  );
}
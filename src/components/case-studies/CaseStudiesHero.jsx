"use client";

import { motion } from "framer-motion";

export function CaseStudiesHero() {
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
    <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden bg-brand-bg px-4 md:px-6 pt-32 pb-24 z-0 border-b border-white/5">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(216,252,77,0.08)_0%,_transparent_60%)] pointer-events-none" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        <motion.span 
          variants={itemVariants}
          className="inline-block py-1.5 px-4 border border-brand-lime/20 rounded-full bg-brand-lime/5 text-brand-lime text-xs font-bold uppercase tracking-[0.2em] mb-6"
        >
          Proven Results
        </motion.span>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black leading-[1] tracking-tighter mb-8 text-white uppercase"
        >
          We don&apos;t sell ideas.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-lime to-[#8ba800]">
            We engineer growth.
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants} 
          className="text-white/60 text-lg md:text-xl font-medium mb-12 max-w-3xl leading-relaxed"
        >
          Take a look at how we&apos;ve helped ambitious brands dominate their markets, scale their revenue, and crush their competitors.
        </motion.p>
        
      </motion.div>
    </section>
  );
}

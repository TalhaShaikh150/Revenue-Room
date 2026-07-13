"use client";

import { ArrowRight, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
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
      
      {/* 1. CINEMATIC VIDEO BACKGROUND, hidden on mobile (native image is faster) */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="metadata"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none mix-blend-luminosity hidden md:block"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Mobile fallback: static gradient (no video weight on phones) */}
      <div className="absolute inset-0 md:hidden bg-[radial-gradient(ellipse_at_top,_rgba(216,252,77,0.08)_0%,_transparent_60%)] pointer-events-none" />

      
      {/* Deep vignette to ensure perfect text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0b0c0c_100%)] pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c0c]/40 via-transparent to-[#0b0c0c] pointer-events-none" />

      

     

      {/* 3. OPTICALLY CENTERED HERO CONTENT */}
      {/* We use -mt-12 to shift the content slightly up. Optically, this makes it look perfectly centered to the human eye. */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center mt-8 md:mt-16"
      >
         
          <motion.h1 
            variants={itemVariants} 
            className="text-[14vw] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] 2xl:text-[88px] font-black leading-[1] lg:leading-[1.15] 2xl:leading-[1] tracking-tighter mb-8 md:mb-8 text-white drop-shadow-2xl w-full px-2 sm:px-4"
          >
              Marketing Agency <br />
             
              <span className="inline-block mt-2 md:mt-0">
                <span className="text-transparent [-webkit-text-stroke:1px_#ffffff] md:[-webkit-text-stroke:1.5px_#ffffff] opacity-80">
                  That Never
                </span>{' '}
                <span className="text-transparent [-webkit-text-stroke:1px_#d8fc4d] md:[-webkit-text-stroke:1.5px_#d8fc4d] drop-shadow-[0_0_15px_rgba(216,252,77,0.3)]">
                  Sleeps.
                </span>
              </span>
          </motion.h1>

          {/* Elegant Subheadline */}
          <motion.p 
            variants={itemVariants} 
            className="text-white/70 text-[12px] sm:text-base md:text-lg font-medium mb-8 md:mb-12 max-w-3xl leading-relaxed drop-shadow-md px-4 sm:px-0"
          >
              <span className="text-white font-bold">Australia&apos;s first round the clock marketing agency.</span> While other agencies clock off, our team is still optimising your ads, chasing your leads, and cutting wasted spend <span className="text-white font-bold">day, night, and everything in between.</span>
          </motion.p>
          
          {/* Email Capture Form */}
          <motion.div variants={itemVariants} className="w-full max-w-2xl mx-auto flex flex-col items-center gap-4 px-4 sm:px-0">
              
          {/* Email Capture Form - MOBILE (Visible only on small screens) */}
          <form className="w-full flex flex-col items-center gap-3 sm:hidden px-2">
              <div className="relative w-full flex items-center bg-[#fcfcfc] rounded-full py-4 shadow-[0_10px_30px_rgba(216,252,77,0.15)]">
                  <div className="pl-5 pr-2 text-black/50">
                     <Moon className="w-5 h-5" />
                  </div>
                  <input 
                      type="email" 
                      required
                      placeholder="Enter your email to start growth, tonight" 
                      className="flex-1 bg-transparent border-none outline-none text-black placeholder:text-black/50 text-[13px] font-medium w-full truncate pr-4"
                  />
              </div>
              <button type="submit" aria-label="Submit email" className="w-max bg-brand-lime text-black py-3 px-8 rounded-full text-[14px] font-bold flex items-center gap-2 shadow-[0_5px_20px_rgba(216,252,77,0.2)]">
                  Submit
              </button>
          </form>

          {/* Email Capture Form - DESKTOP (Visible from sm     upwards) */}
          <form className="relative w-full hidden sm:flex items-center bg-[#fcfcfc] rounded-full p-1.5 shadow-[0_0_40px_rgba(216,252,77,0.15)] group focus-within:shadow-[0_0_40px_rgba(216,252,77,0.3)] transition-shadow duration-500">
              <div className="pl-6 pr-3 text-black/50">
                 <Moon className="w-5 h-5" />
              </div>
              <input 
                  type="email" 
                  required
                  placeholder="Enter your email and we'll start working on your growth, tonight" 
                  className="flex-1 bg-transparent border-none outline-none text-black placeholder:text-black/50 text-[15px] font-medium w-full truncate"
              />
              <button type="submit" aria-label="Submit email" className="shrink-0 bg-brand-lime text-black px-8 py-3.5 rounded-full text-[15px] font-bold hover:scale-[1.02] transition-all duration-300 flex items-center ">
                  Let&apos;s go 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
          </form>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-6 text-white/50 text-[11px] sm:text-[13px] font-medium mt-1">
                  <span>Real humans, real results, 24/7.</span>
                  <span className="hidden sm:block text-white/20">•</span>
                  <span>4.8 stars from 300+ businesses</span>
              </div>

          </motion.div>
      </motion.main>
      
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ServiceHero({ 
  title, 
  subtitle, 
  description, 
  ctaText = "Get Started", 
  ctaLink = "/contact",
  // NEW: Added useful highlights for the service
  highlights = [
    "Data-Driven Strategy",
    "Omnichannel Execution",
    "Transparent ROI Reporting"
  ]
}) {
  const smoothEase = [0.16, 1, 0.3, 1];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: smoothEase } }
  };

  return (
    <section className="relative min-h-[85dvh] w-full flex items-center overflow-hidden bg-brand-bg px-4 md:px-8 pt-32 pb-24">
      
      {/* 1. ULTRA-CLEAN BACKGROUND (Subtle Grid + Gradient) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top_left,_rgba(216,252,77,0.05)_0%,_transparent_70%)] pointer-events-none z-0" />

      {/* 2. THE BRAND THREAD (Sharp Horizontal Floor) */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] z-10">
        <svg preserveAspectRatio="none" viewBox="0 0 1000 2" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="hero-floor-glow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(216,252,77,0)" />
              <stop offset="20%" stopColor="#d8fc4d" />
              <stop offset="80%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,1 L1000,1"
            fill="none" stroke="url(#hero-floor-glow)" strokeWidth="2" className="blur-[4px] opacity-60"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: smoothEase }}
          />
          <motion.path
            d="M0,1 L1000,1"
            fill="none" stroke="url(#hero-floor-glow)" strokeWidth="1" className="opacity-100"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: smoothEase }}
          />
        </svg>
      </div>

      {/* 3. CONTENT GRID */}
      <div className="w-full max-w-[1300px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT: Core Messaging */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-accent rounded-sm animate-pulse-slow" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary">
              Capabilities // {subtitle}
            </span>
          </motion.div>

          <motion.h1 
            variants={item} 
            className="text-[48px] md:text-[64px] lg:text-[80px] font-black leading-[1.05] md:leading-[0.95] tracking-tighter mb-6 text-white"
          >
            {title}
          </motion.h1>

          <motion.p 
            variants={item} 
            className="text-white/70 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href={ctaLink}
              className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 w-full sm:w-auto font-bold hover:bg-accent hover:shadow-[0_0_20px_rgba(216,252,77,0.2)] transition-all duration-300"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {/* Added a highly useful secondary action */}
            <Link 
              href="#works"
              className="flex items-center justify-center px-8 py-4 w-full sm:w-auto text-white font-bold border border-white/10 hover:border-white/30 hover:bg-white/5 transition-colors duration-300"
            >
              View Case Studies
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT: Useful Service Highlights */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: smoothEase, delay: 0.4 }}
          className="lg:col-span-4 lg:col-start-9 w-full"
        >
          <div className="bg-[#0a0a0c] border border-brand-border p-8 relative overflow-hidden group">
            {/* Subtle hover glow on the card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] rounded-full group-hover:bg-accent/10 transition-colors duration-500" />
            
            <h3 className="text-white font-bold tracking-wide uppercase text-sm mb-6 pb-4 border-b border-white/10">
              Core Deliverables
            </h3>
            
            <ul className="space-y-5">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-white/80 font-medium leading-snug">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
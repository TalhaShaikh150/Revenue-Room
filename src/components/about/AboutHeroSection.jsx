"use client";

import { motion } from "framer-motion";

export function AboutHeroSection() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="relative w-full pt-32 pb-16 md:pt-48 md:pb-24 px-4 md:px-8 bg-brand-bg flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Subtle Glows & Texture */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564')] bg-cover bg-center mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg to-brand-bg pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-lime/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-[1000px] mx-auto text-center relative z-10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: smoothEase }}
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-brand-lime/30 rounded-full bg-brand-lime/5 text-brand-lime text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(202,255,4,0.15)]">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            Who We Are
          </span>
          <h1 className="text-white text-5xl md:text-7xl lg:text-[80px] font-black uppercase tracking-tighter leading-[1] mb-8">
            The agency that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-white">
              never sleeps.
            </span>
          </h1>
          <p className="text-white/70 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Revenue Room was built on a simple premise: your customers are active 24/7, so your marketing should be too. We blend data-driven strategy with relentless execution to scale brands globally.
          </p>
        </motion.div>
      </div>

    </section>
  );
}

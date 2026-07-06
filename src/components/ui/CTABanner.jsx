"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export function CTABanner() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 relative z-10 bg-brand-bg flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto max-w-[900px] text-center relative z-10">

        {/* Clean, Stark Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
        >
          <h2 className="text-[44px] md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[1.1] text-white mb-6 uppercase">
            Ready to <span className="text-brand-lime">Scale?</span>
          </h2>
          <p className="text-base md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-medium px-4">
            Stop wasting time with generic agencies. Partner with a team that treats your revenue like their own.
          </p>
        </motion.div>

        {/* Responsive Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: smoothEase, delay: 0.2 }}
          className="w-full max-w-2xl mx-auto"
        >
          {/* Mobile Form (Stacked) */}
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex flex-col gap-4 md:hidden w-full px-2"
          >
            <div className="w-full flex items-center bg-[#121214] border border-white/10 rounded-full px-5 py-2 focus-within:border-brand-lime/50 focus-within:shadow-[0_0_20px_rgba(216,252,77,0.1)] transition-all">
              <Mail className="w-5 h-5 text-white/40 mr-3" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/40 py-3 text-base"
              />
            </div>
            <button 
              type="submit" 
              className="w-max mx-auto flex items-center justify-center gap-2 bg-brand-lime text-black font-bold py-3.5 px-8 rounded-full text-base hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(216,252,77,0.2)]"
            >
              Let's Talk <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Desktop Form (Single Pill) */}
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="hidden md:flex relative w-full items-center bg-[#121214] border border-white/10 rounded-full p-2 pl-6 pr-2 transition-all duration-300 focus-within:border-brand-lime/50 focus-within:shadow-[0_0_30px_rgba(216,252,77,0.15)] group"
          >
            <div className="text-white/40 group-focus-within:text-brand-lime transition-colors mr-4">
              <Mail size={20} strokeWidth={2} />
            </div>
            
            <input 
              type="email" 
              placeholder="Enter your email address to get started" 
              required
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 py-4 text-lg w-full mr-6"
            />
            
            <button 
              type="submit" 
              className="flex items-center gap-2 bg-brand-lime text-black font-bold py-4 px-10 rounded-full hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(216,252,77,0.2)] hover:shadow-[0_0_40px_rgba(216,252,77,0.4)]"
            >
              Let's Talk <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
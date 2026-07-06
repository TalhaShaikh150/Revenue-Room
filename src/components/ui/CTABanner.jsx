"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function CTABanner() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-32 md:py-40 px-6 relative z-10 bg-brand-bg flex flex-col items-center justify-center border-t border-brand-border">
      <div className="container mx-auto max-w-3xl text-center">
        
        {/* Subtle Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="mb-6"
        >
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase">
            Initiate Growth
          </span>
        </motion.div>

        {/* Clean, Stark Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white mb-6">
            Ready to scale?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-xl mx-auto leading-relaxed">
            Stop wasting time with generic agencies. Partner with a team that treats your revenue like their own.
          </p>
        </motion.div>

        {/* Minimalist Input Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: smoothEase, delay: 0.2 }}
        >
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="relative max-w-md mx-auto flex items-center bg-[#121214] border border-brand-border rounded-full p-1.5 transition-all duration-300 focus-within:border-white/30 focus-within:bg-[#161619]"
          >
            <div className="pl-5 pr-2 text-text-secondary">
              <Mail size={18} strokeWidth={2} />
            </div>
            
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-text-secondary/70 py-3 text-base w-full"
            />
            
            <button 
              type="submit" 
              className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-accent transition-colors duration-300"
            >
              Let's Talk
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
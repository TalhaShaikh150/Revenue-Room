"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-32 px-6 relative z-10 overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute inset-0 bg-brand-surface -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-brand-surface to-brand-surface opacity-80 blur-3xl -z-10 animate-pulse-slow" />

      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Ready to scale?
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Stop wasting time with generic agencies. Partner with a team that treats your revenue like their own.
          </p>

          {/* Pill input-as-CTA (Pattern H) */}
          <div className="relative max-w-lg mx-auto flex items-center bg-brand-raised border border-white/10 rounded-full p-2 transition-shadow hover:shadow-lg hover:shadow-accent/10 focus-within:border-accent/50 focus-within:shadow-accent/20">
            <div className="pl-4 pr-2 text-text-secondary">
              <Mail size={20} />
            </div>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border-none outline-none text-text-primary placeholder:text-text-secondary/50 py-3"
            />
            <button className="bg-accent text-brand font-bold py-3 px-8 rounded-full hover:brightness-110 transition-all transform active:scale-95">
              Let's Talk
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function ServiceFeatures({ 
  title, 
  subtitle, 
  description = "We don't just execute tasks. We deploy proven architectural frameworks designed to capture market share, reduce wasted spend, and scale your revenue predictably.",
  features 
}) {
  const smoothEase = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: smoothEase } },
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 relative z-10 bg-brand-bg overflow-hidden border-b border-brand-border">
      
      {/* Structural Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 60% 100% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 100% at 50% 50%, black 0%, transparent 100%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
        
        {/* LEFT COLUMN: The Persuasive Pitch (Sticky on Desktop) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-sm bg-accent animate-pulse-slow" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                {subtitle}
              </span>
            </div>
            
            <h2 className="text-[44px] md:text-[56px] lg:text-[72px] font-black tracking-tighter leading-[1.05] md:leading-[0.95] text-white mb-8">
              {title}
            </h2>
            
            <p className="text-white/60 text-lg font-medium leading-relaxed mb-10 max-w-md">
              {description}
            </p>

            {/* Micro-Trust Anchor */}
            <div className="flex items-center gap-4 py-4 px-5 border border-white/10 bg-[#0a0a0c] max-w-sm">
              <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
              <div>
                <p className="text-white text-sm font-bold tracking-wide">The Revenue Room Standard</p>
                <p className="text-white/50 text-xs mt-1">Data-backed execution. Zero guesswork.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Proven Process / Features */}
        <div className="lg:col-span-7 relative">
          
          {/* Vertical Architectural Line (The "Process" Thread) */}
          <div className="absolute top-0 bottom-0 left-[27px] md:left-[39px] w-[2px] bg-white/5 z-0" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col relative z-10"
          >
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="group relative flex items-start pl-16 md:pl-24 py-12 border-b border-white/5 last:border-0"
              >
                {/* Timeline Node & Number */}
                <div className="absolute left-0 top-12 flex items-center justify-center w-14 md:w-20 bg-brand-bg py-2">
                  {/* Glowing Dot that activates on hover */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-brand-border bg-brand-bg group-hover:border-accent group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(216,252,77,0.8)] transition-all duration-500 z-10" />
                  {/* Faint Number */}
                  <span className="text-white/10 font-black text-4xl group-hover:text-white/30 transition-colors duration-500 relative -left-8 md:-left-12 top-1">
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent text-white/50 transition-all duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-500">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/60 leading-relaxed text-base md:text-lg mb-6 group-hover:text-white/80 transition-colors duration-500">
                    {feature.description}
                  </p>

                  {/* 
                    NEW: The "Business Impact" Tag. 
                    This answers the client's internal "So what?" question.
                    (e.g., feature.impact = "Reduces CPA by an average of 22%") 
                  */}
                  {feature.impact && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-[#0a0a0c] text-xs font-medium text-white/70 group-hover:border-accent/30 group-hover:text-white transition-colors duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Impact: {feature.impact}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* THE CONVINCER BLOCK (Risk Reversal at the end of the list) */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 ml-16 md:ml-24 p-8 bg-gradient-to-br from-[#121215] to-[#0a0a0c] border border-white/10 rounded-2xl relative overflow-hidden group"
            >
              {/* Subtle hover sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">Ready to bypass the guesswork?</h4>
              <p className="text-white/60 text-sm mb-6 max-w-sm leading-relaxed">
                Stop paying for vanity metrics. We tie our deliverables directly to your bottom-line revenue.
              </p>
              
              <Link href="/contact" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
                Claim Your Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Deep Dive Audit",
    description: "We tear down your current funnels, ad accounts, and tracking to find every single leaky bucket in your customer journey.",
  },
  {
    title: "Strategic Blueprint",
    description: "No templated strategies. We engineer a custom, data-backed blueprint designed exclusively to scale your specific business model.",
  },
  {
    title: "Relentless Execution",
    description: "We deploy the strategy, monitor performance 24/7, and ruthlessly optimize until we hit your target ROI and scale beyond.",
  }
];

export function CaseStudiesMethodology() {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-8 bg-white text-black rounded-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-20 mt-12 md:mt-24 mb-12">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: smoothEase }}
            className="lg:w-1/2"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-black/10 rounded-full bg-black/5 text-black text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black uppercase tracking-tighter leading-[1.1] mb-6">
              How We Engineer <br />
              <span className="text-brand-lime drop-shadow-md">These Results.</span>
            </h2>
            <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed mb-8">
              Great results aren't accidents. They are the byproduct of a ruthless, systematic approach to growth. We don't guess; we test, measure, and scale.
            </p>
            
            <button className="flex items-center gap-3 text-sm md:text-base font-bold uppercase tracking-widest border border-black/20 px-8 py-4 rounded-full bg-black text-white hover:bg-brand-lime hover:text-black hover:border-brand-lime transition-all duration-300 group">
              Start Your Growth
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="lg:w-1/2 flex flex-col gap-6"
          >
            {steps.map((step, idx) => (
              <div key={idx} className="bg-[#f4f4f5] p-6 md:p-8 rounded-[24px] flex gap-4 md:gap-6 hover:bg-black hover:text-white transition-colors duration-500 group">
                <div className="shrink-0 pt-1">
                  <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-black/20 group-hover:text-brand-lime transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight mb-2">{step.title}</h3>
                  <p className="text-black/60 group-hover:text-white/70 font-medium leading-relaxed transition-colors duration-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

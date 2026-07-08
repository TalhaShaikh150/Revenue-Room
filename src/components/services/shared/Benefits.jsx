"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function ServiceBenefits({ title, subtitle, benefits, imageSrc, imageAlt }) {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="py-24 px-4 md:px-8 relative z-10 bg-[#0b0c0c]">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8, ease: smoothEase }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">
                {subtitle}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-white">
              {title}
            </h2>

            <div className="flex flex-col gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-lime shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-lime/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

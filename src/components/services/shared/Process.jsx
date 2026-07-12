"use client";

import { motion } from "framer-motion";

// Pre-defined premium Unsplash images to elevate the process steps
const PROCESS_IMAGES = [
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
];

export function ServiceProcess({ title, subtitle, steps }) {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="bg-brand-bg text-white py-24 md:py-32 px-4 md:px-8 w-full relative z-20 overflow-hidden border-t border-white/5">
      
      {/* Subtle Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-brand-lime/5 to-transparent pointer-events-none" />

      <div className="max-w-[1300px] mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">
                {subtitle}
              </span>
            </div>
            <h2 className="text-[32px] md:text-[clamp(40px,5vw,64px)] font-black leading-[1.05] tracking-tight uppercase">
              {title}
            </h2>
          </motion.div>
        </div>

        {/* Process Steps - Editorial Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, index) => {
            const imgUrl = PROCESS_IMAGES[index % PROCESS_IMAGES.length];
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: index * 0.1, ease: smoothEase }}
                className="group relative flex flex-col h-[450px] md:h-[500px] rounded-[32px] overflow-hidden bg-[#0a0a0c] border border-white/10 cursor-pointer"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={imgUrl}
                    alt={step.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"
                  />
                  {/* Heavy dark gradient to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
                  <div className="absolute inset-0 bg-[#0a0a0c]/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Number indicator */}
                <div className="absolute top-6 right-8 text-brand-lime/20 font-black text-6xl md:text-8xl leading-none group-hover:text-brand-lime transition-colors duration-500">
                  0{index + 1}
                </div>
                
                {/* Content */}
                <div className="relative z-10 mt-auto p-8 md:p-10">
                  <div className="w-12 h-1 bg-white/10 mb-6 group-hover:bg-brand-lime group-hover:w-16 transition-all duration-500" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-brand-lime transition-colors duration-500 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-medium text-sm md:text-base group-hover:text-white/90 transition-colors duration-500">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

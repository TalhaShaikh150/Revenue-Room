"use client";

import { motion } from "framer-motion";

export function ServiceProcess({ title, subtitle, steps }) {
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <section className="bg-white text-black py-24 px-4 md:px-8 w-full relative z-20">
      <div className="max-w-[1300px] mx-auto w-full">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-black/5 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-black/70">
                {subtitle}
              </span>
            </div>
            <h2 className="text-[32px] md:text-[clamp(40px,5vw,64px)] font-black leading-[1.1] tracking-tight max-w-3xl">
              {title}
            </h2>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: index * 0.1, ease: smoothEase }}
              className="relative flex flex-col"
            >
              {/* Number indicator */}
              <div className="text-brand-lime font-black text-6xl md:text-8xl leading-none mb-6 drop-shadow-md [-webkit-text-stroke:2px_#000]">
                0{index + 1}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-black/60 leading-relaxed font-medium">
                {step.description}
              </p>

              {/* Connecting line (hidden on mobile, visible on lg screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-black/10 -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

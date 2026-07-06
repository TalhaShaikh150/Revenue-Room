"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Added more case studies and switched to standard dark theme colors
const caseStudies = [
  {
    title: "NIMBLE FINTECH",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    title: "VILL AES",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    title: "TITLES CO",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    title: "MUSCLE CHEF",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    title: "RENT IT OUT",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    title: "ORIGINAL UGG",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    title: "GLOBAL TECH",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    title: "E-COMMERCE PRO",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=800",
  }
];

// Duplicate the array to create a seamless infinite loop
const doubledStudies = [...caseStudies, ...caseStudies];

export function CaseStudiesSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full py-8 md:py-12 overflow-hidden bg-brand-bg">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-12">
        {/* Header Elements - Scaled Down */}
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-lime text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
          >
            Case Studies
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl md:text-5xl lg:text-[64px] font-black uppercase text-center leading-[1.2] tracking-tighter"
          >
            Real Brands. Real Growth.<br/>Zero Downtime.<br />
          </motion.h2>
        </div>
      </div>

      {/* Infinite Smooth Scrolling Carousel */}
      <div 
        className="w-full relative z-10 flex overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="flex gap-4 md:gap-6 px-2 md:px-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: isHovered ? 60 : 30, // Slows down when hovered
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {doubledStudies.map((study, idx) => (
            <div 
              key={idx}
              className="shrink-0 w-[240px] md:w-[320px] h-[400px] md:h-[480px] bg-[#0e0e10] border border-white/5 rounded-[24px] overflow-hidden relative group cursor-pointer"
            >
              {/* Title */}
              <div className="absolute top-6 left-6 z-20 w-[80%]">
                 <h3 className="text-white font-black text-xl md:text-2xl leading-tight uppercase tracking-tight drop-shadow-lg group-hover:text-brand-lime transition-colors duration-300">
                   {study.title}
                 </h3>
              </div>

              {/* Product / App Image */}
              <div className="absolute bottom-0 left-0 w-full h-[80%] group-hover:scale-105 transition-transform duration-700 ease-out z-10 rounded-b-[24px] overflow-hidden">
                 <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                 {/* Fade gradient so the top of the image seamlessly blends into the dark card background */}
                 <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e10] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none z-30 rounded-[24px]"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Standardized CTA Button */}
      <div className="flex justify-center mt-12 md:mt-16 relative z-20">
        <button className="flex items-center gap-3  text-[12px] font-bold uppercase tracking-widest border border-white/10 px-8 py-4 rounded-full bg-brand-lime text-black border-black transition-all duration-300 group">
          View All Case Studies
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </section>
  );
}

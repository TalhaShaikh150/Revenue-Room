"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  { image: "/case1.png" },
  { image: "/case2.png" },
  { image: "/case3.png" },
  { image: "/case5.png" },
  { image: "/case6.png" },
  { image: "/case7.png" },
  { image: "/case8.png" },
  { image: "/case9.png" },
  { image: "/case10.png" },
];

// Duplicate the array to create a seamless infinite loop (more copies for smaller items)
const doubledStudies = [...caseStudies, ...caseStudies, ...caseStudies, ...caseStudies];

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

      {/* Infinite Smooth Scrolling Carousels */}
      <div 
        className="w-full relative z-10 flex flex-col gap-6 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Row 1 - Scrolling Left */}
        <motion.div 
          className="flex px-2 md:px-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: isHovered ? 60 : 30, // Slows down when hovered
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {doubledStudies.map((study, idx) => (
            <div 
              key={`row1-${idx}`}
              className="shrink-0 w-[140px] md:w-[180px] h-[100px] md:h-[120px] pr-8 md:pr-12 flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <img src={study.image} alt="Case Study" className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Scrolling Right */}
        <motion.div 
          className="flex px-2 md:px-3 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: isHovered ? 60 : 30,
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...doubledStudies].reverse().map((study, idx) => (
            <div 
              key={`row2-${idx}`}
              className="shrink-0 w-[140px] md:w-[180px] h-[100px] md:h-[120px] pr-8 md:pr-12 flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <img src={study.image} alt="Case Study" className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
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

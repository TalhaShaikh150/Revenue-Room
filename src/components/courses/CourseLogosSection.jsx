"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

export function CourseLogosSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-brand-bg border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-col items-center">
          <p className="text-white/50 font-medium tracking-widest uppercase text-sm mb-4">
            Trusted by Industry Leaders
          </p>
        </div>
      </div>

      {/* Infinite Smooth Scrolling Carousel */}
      <div 
        className="w-full relative z-10 flex flex-col gap-6 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Single Row - Scrolling Left */}
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
              key={`logo-row-${idx}`}
              className="shrink-0 w-[140px] md:w-[180px] h-[80px] md:h-[100px] pr-8 md:pr-12 flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              <img src={study.image} alt="Brand Logo" className="w-full h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

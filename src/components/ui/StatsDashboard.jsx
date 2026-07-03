"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function StatsDashboard() {
  // Ultra-smooth Apple-like easing
  const smoothEase = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: smoothEase, staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: smoothEase } },
  };

  return (
    <section className="relative z-20 w-full max-w-[1200px] mx-auto px-4 md:px-6 pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6"
      >
        
        {/* PANEL 1: THE LIQUID AREA CHART (Spans 8 columns) */}
        <motion.div 
          variants={cardVariants}
          className="lg:col-span-8 bg-[#0e0e10] border border-white/[0.06] rounded-[32px] p-8 md:p-10 relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group"
        >
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                Average Client Trajectory
              </p>
              <h3 className="text-white text-[48px] md:text-[64px] font-black leading-[0.9] tracking-tighter">
                +145<span className="text-white/30 text-[32px] md:text-[48px]">%</span>
              </h3>
            </div>
            
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
              </span>
              <span className="text-white text-xs font-semibold tracking-wide">YoY Revenue Scaling</span>
            </div>
          </div>

          {/* Premium Liquid Area Chart (Stripe/Robinhood aesthetic) */}
          <div className="absolute bottom-0 left-0 w-full h-[180px] md:h-[220px] pointer-events-none">
            <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                {/* Lush Area Gradient */}
                <linearGradient id="liquid-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d8fc4d" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#d8fc4d" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#d8fc4d" stopOpacity="0" />
                </linearGradient>
                {/* Line Gradient */}
                <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(216,252,77,0)" />
                  <stop offset="20%" stopColor="#d8fc4d" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
              </defs>

              {/* Background Grid Lines */}
              <path d="M0,100 L1000,100 M0,200 L1000,200" stroke="rgba(255,255,255,0.03)" strokeWidth="2" strokeDasharray="10 10" />

              {/* Area Fill Animation */}
              <motion.path
                d="M0,300 L0,250 C150,250 250,180 400,220 C550,260 650,100 800,120 C900,130 950,40 1000,20 L1000,300 Z"
                fill="url(#liquid-gradient)"
                initial={{ y: 300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: smoothEase, delay: 0.2 }}
              />
              
              {/* Sharp Top Line Animation */}
              <motion.path
                d="M0,250 C150,250 250,180 400,220 C550,260 650,100 800,120 C900,130 950,40 1000,20"
                fill="none"
                stroke="url(#line-gradient)"
                strokeWidth="4"
                className="drop-shadow-[0_0_12px_rgba(216,252,77,0.8)]"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: smoothEase, delay: 0.3 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Stacked Supporting Cards (Spans 4 columns) */}
        <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
          
          {/* PANEL 2: RADIAL ROAS DIAL */}
          <motion.div 
            variants={cardVariants}
            className="flex-1 bg-[#0e0e10] border border-white/[0.06] rounded-[32px] p-8 flex items-center justify-between relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            <div className="relative z-10 flex flex-col h-full justify-center">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                Return On Ad Spend
              </p>
              <h3 className="text-white text-[40px] font-black leading-none tracking-tighter">
                3.4<span className="text-brand-lime text-[24px]">x</span>
              </h3>
            </div>

            {/* Bespoke Radial Gauge */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* Background Track */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                {/* Animated Value Track */}
                <motion.circle 
                  cx="50" cy="50" r="40" 
                  fill="none" 
                  stroke="#d8fc4d" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                  strokeDasharray="251.2" /* 2 * pi * 40 */
                  initial={{ strokeDashoffset: 251.2 }}
                  whileInView={{ strokeDashoffset: 251.2 * 0.25 }} /* Animates to ~75% full */
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: smoothEase, delay: 0.5 }}
                  className="drop-shadow-[0_0_8px_rgba(216,252,77,0.5)]"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          {/* PANEL 3: ACTIVE NODE MATRIX */}
          <motion.div 
            variants={cardVariants}
            className="flex-1 bg-[#0e0e10] border border-white/[0.06] rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group"
          >
            <div className="relative z-10">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                Active Campaigns
              </p>
              <h3 className="text-white text-[32px] font-black leading-none tracking-tighter">
                100+
              </h3>
            </div>

            {/* Custom Dot Matrix Visual */}
            <div className="mt-6 grid grid-cols-8 gap-2 relative z-10 w-max">
              {[...Array(24)].map((_, i) => {
                // Randomly select some dots to be "active/glowing"
                const isActive = [3, 7, 12, 14, 19, 22].includes(i);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.2 }}
                    whileInView={isActive ? { opacity: [0.2, 1, 0.2] } : { opacity: 0.2 }}
                    viewport={{ once: true }}
                    transition={isActive ? { duration: 2, repeat: Infinity, delay: i * 0.1 } : {}}
                    className={`w-2 h-2 rounded-full ${isActive ? 'bg-brand-lime shadow-[0_0_8px_#d8fc4d]' : 'bg-white/10'}`}
                  />
                );
              })}
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 blur-[30px] rounded-full pointer-events-none group-hover:bg-brand-lime/10 transition-colors duration-700"></div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
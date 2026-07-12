"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// FIX: Removed 'default' to match your named imports in page.js
export function StatsDashboard() {
  // Ultra-smooth Apple-like easing
  const smoothEase = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: smoothEase },
    },
  };

  const ref = useRef(null);
  // Trigger loading when within 400px of viewport
  const isInView = useInView(ref, { once: true, margin: "400px" });

  return (
    <section ref={ref} className="relative z-20 w-full max-w-[1200px] mx-auto px-2 md:px-6 pt-16 min-h-[500px]">
      {isInView && (
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6"
        >
          {/* PANEL 1: THE LIQUID AREA CHART (Spans 8 columns) */}
          <m.div
            variants={cardVariants}
            className="lg:col-span-8 bg-[#0e0e10] border border-white/5 rounded-[32px] p-6 md:p-10 relative overflow-hidden group min-h-[280px] md:min-h-[320px]"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
            <div>
              <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                Average Client Trajectory
              </p>
              <h3 className="text-white text-[36px] md:text-[64px] font-black leading-[0.9] tracking-tighter">
                +145
                <span className="text-white/30 text-[24px] md:text-[48px]">
                  %
                </span>
              </h3>
            </div>

            <div className="flex hidden md:flex items-center gap-3 bg-[#1a1a1c] border border-white/10 rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"
                  style={{ animationDuration: "3s" }}
                ></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
              </span>
              <span className="text-white text-xs font-semibold tracking-wide">
                YoY Revenue Scaling
              </span>
            </div>
          </div>

          <m.div
            className="absolute bottom-0 left-0 w-full h-[180px] md:h-[220px] origin-bottom pointer-events-none"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: smoothEase, delay: 0.1 }}
          >
            <svg
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
              className="w-full h-full"
              shapeRendering="optimizeSpeed"
            >
              <defs>
                <linearGradient
                  id="liquid-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#d8fc4d" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#d8fc4d" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#d8fc4d" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="M0,100 L1000,100 M0,200 L1000,200"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="2"
                strokeDasharray="10 10"
              />

              <path
                d="M0,300 L0,250 C150,250 250,180 400,220 C550,260 650,100 800,120 C900,130 950,40 1000,20 L1000,300 Z"
                fill="url(#liquid-gradient)"
              />
            </svg>
          </m.div>

          <div className="absolute bottom-0 left-0 w-full h-[180px] md:h-[220px] pointer-events-none">
            <svg
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(216,252,77,0)" />
                  <stop offset="20%" stopColor="#d8fc4d" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
              </defs>
              <m.path
                d="M0,250 C150,250 250,180 400,220 C550,260 650,100 800,120 C900,130 950,40 1000,20"
                fill="none"
                stroke="url(#line-gradient)"
                strokeWidth="4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: smoothEase, delay: 0.3 }}
              />
            </svg>
          </div>
        </m.div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
          {/* PANEL 2: RADIAL ROAS DIAL */}
          <m.div
            variants={cardVariants}
            className="flex-1 bg-[#0e0e10] border border-white/5 rounded-[32px] p-6 md:p-8 flex items-center justify-between relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col h-full justify-center">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                Return On Ad Spend
              </p>
              <h3 className="text-white text-[32px] md:text-[40px] font-black leading-none tracking-tighter">
                3.4<span className="text-brand-lime text-[24px]">x</span>
              </h3>
            </div>

            <div className="relative w-24 h-24 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="8"
                />
                <m.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#d8fc4d"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  whileInView={{ strokeDashoffset: 251.2 * 0.25 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: smoothEase, delay: 0.2 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </m.div>

          {/* PANEL 3: ACTIVE NODE MATRIX */}
          <m.div
            variants={cardVariants}
            className="flex-1 bg-[#0e0e10] border border-white/5 rounded-[32px] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                Active Campaigns
              </p>
              <h3 className="text-white text-[28px] md:text-[32px] font-black leading-none tracking-tighter">
                100+
              </h3>
            </div>

            <div className="mt-6 grid grid-cols-8 gap-2 relative z-10 w-max">
              {[...Array(24)].map((_, i) => {
                const isActive = [3, 7, 12, 14, 19, 22].includes(i);
                return (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      isActive
                        ? "bg-brand-lime opacity-100"
                        : "bg-white/10 opacity-20"
                    }`}
                    style={
                      isActive
                        ? {
                            animation:
                              "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                            animationDelay: `${i * 0.15}s`,
                          }
                        : undefined
                    }
                  />
                );
              })}
            </div>

            <div
              className="absolute -bottom-10 -right-10 w-48 h-48 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(circle, rgba(216,252,77,0.15) 0%, rgba(216,252,77,0) 70%)",
              }}
            />
          </m.div>
        </div>
      </m.div>
      )}
    </section>
  );
}

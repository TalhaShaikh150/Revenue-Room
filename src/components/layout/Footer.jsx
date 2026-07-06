"use client";

import { motion } from "framer-motion";

export function Footer() {
  // Ultra-smooth easing for the line drawing animation
  const smoothEase = [0.22, 1, 0.36, 1];

  // The precise Bezier curve path matching your image (gentle rise, slight dip, sharp sweep up)
  const curvePath = "M 0,90 C 250,80 400,40 550,50 C 700,60 800,90 1000,10";

  return (
    <footer className="relative bg-brand-bg text-text-secondary border-t border-brand-border overflow-hidden">
      
      {/* Ambient Radial Glow in the bottom corner */}
      <div 
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(216,252,77,0.15) 0%, rgba(216,252,77,0) 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 md:px-8 pt-20 pb-8">
        
        {/* Top Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          
          <div className="max-w-sm">
            <div className="flex items-center gap-4 mb-6">
              {/* Pinging Node Dot */}
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-accent opacity-75" style={{ animationDuration: '3s' }}></span>
                <span className="relative inline-flex rounded-sm h-3 w-3 bg-accent"></span>
              </span>
              <h2 className="text-3xl font-black text-white tracking-tighter">
                Revenue Room
              </h2>
            </div>
            <p className="text-base leading-relaxed">
              We scale premium brands with our full-service execution, training academy, and fractional consultancy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <p className="text-white font-bold mb-6 tracking-tight">Capabilities</p>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#" className="hover:text-accent transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">SEO</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Paid Social</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Paid Search</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-6 tracking-tight">The Paths</p>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="/agency" className="hover:text-accent transition-colors">Agency</a></li>
                <li><a href="/academy" className="hover:text-accent transition-colors">Academy</a></li>
                <li><a href="/consultancy" className="hover:text-accent transition-colors">Consultancy</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-white font-bold mb-6 tracking-tight">Company</p>
              <ul className="space-y-3 text-sm font-medium">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#works" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 
          THE PROFESSIONAL GLOWING CURVE
          Hardware accelerated SVG layers to create a flawless, lag-free bloom.
        */}
        <div className="relative w-full h-[80px] md:h-[120px] mb-4 pointer-events-none">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
            <defs>
              {/* Exact gradient from your image: Fade -> Lime -> White */}
              <linearGradient id="premium-glow-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(216,252,77,0)" />
                <stop offset="30%" stopColor="rgba(216,252,77,0.3)" />
                <stop offset="65%" stopColor="#d8fc4d" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            
            {/* Layer 1: Wide Ambient Bloom */}
            <motion.path
              d={curvePath}
              fill="none"
              stroke="url(#premium-glow-gradient)"
              strokeWidth="12"
              strokeLinecap="round"
              className="blur-[12px] opacity-40"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 2, ease: smoothEase }}
              style={{ willChange: "stroke-dashoffset" }}
            />
            
            {/* Layer 2: Tight Core Glow */}
            <motion.path
              d={curvePath}
              fill="none"
              stroke="url(#premium-glow-gradient)"
              strokeWidth="6"
              strokeLinecap="round"
              className="blur-[4px] opacity-70"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 2, ease: smoothEase }}
              style={{ willChange: "stroke-dashoffset" }}
            />
            
            {/* Layer 3: Sharp Neon Tube */}
            <motion.path
              d={curvePath}
              fill="none"
              stroke="url(#premium-glow-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              className="opacity-100"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 2, ease: smoothEase }}
              style={{ willChange: "stroke-dashoffset" }}
            />
          </svg>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-medium relative z-10 pt-4">
          <p>© {new Date().getFullYear()} Revenue Room. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // The ultimate slow, buttery-smooth easing curve
  const cinematicEase = [0.16, 1, 0.3, 1];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Company", "Works", "Pricing", "Resources"];

  return (
    <>
      {/* 
        1. THE ANCHOR CONTAINER 
        This is locked to the right side of the max-width container. 
      */}
      <div className="fixed top-6 inset-x-0 w-full max-w-[1200px] mx-auto px-4 md:px-8 z-[100] pointer-events-none flex justify-end">
        
        {/* 
          2. THE MORPHING WIDTH CAPSULE
          We ONLY animate the width. It smoothly retracts into the right corner.
        */}
        <motion.nav
          initial={false}
          animate={{
            width: scrolled ? "60px" : "100%",
          }}
          transition={{ duration: 0.85, ease: cinematicEase }} // Increased duration for supreme smoothness
          className="h-[60px] bg-[#0b0c0c]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-full overflow-hidden pointer-events-auto relative"
        >
          <AnimatePresence mode="wait">
            
            {/* STATE A: Full Navbar (Centered visually because width is 100%) */}
            {!scrolled && (
              <motion.div
                key="full-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }}
                // Exit very quickly so the text disappears BEFORE the capsule crushes it
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                // min-w-[1000px] ensures the text doesn't squish while the box is shrinking
                className="absolute inset-0 w-[calc(100vw-32px)] md:w-[calc(100vw-64px)] max-w-[1136px] flex items-center justify-between px-6 mx-auto"
              >
                {/* Text Logo */}
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                  <div className="w-2 h-2 bg-brand-lime group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-bold text-[15px] tracking-tight text-white">
                    Revenue Room
                  </span>
                </Link>

                {/* Center Links */}
                <div className="hidden md:flex items-center gap-1">
                  {links.map((link, index) => (
                    <Link
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative px-5 py-2 text-[12px] font-medium text-white/70 hover:text-white transition-colors"
                    >
                      {link}
                      {hoveredIndex === index && (
                        <motion.div
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 bg-white/10 rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  ))}
                </div>

                {/* Right CTA */}
                <button className="bg-white text-black px-5 py-2 rounded-full text-[12px] font-bold hover:bg-brand-lime transition-colors duration-300 shrink-0">
                  Contact Us
                </button>
              </motion.div>
            )}

            {/* STATE B: Scrolled Hamburger Button */}
            {scrolled && (
              <motion.button
                key="hamburger"
                // It waits for the capsule to finish shrinking before fading in
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0, transition: { duration: 0.5, delay: 0.3 } }}
                exit={{ opacity: 0, rotate: 45, transition: { duration: 0.2 } }}
                onClick={() => setMenuOpen(true)}
                className="absolute right-0 top-0 w-[60px] h-[60px] flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Menu className="w-5 h-5 text-white" />
              </motion.button>
            )}

          </AnimatePresence>
        </motion.nav>
      </div>

      {/* 3. THE FULL-SCREEN OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.6, ease: cinematicEase }}
            className="fixed inset-0 z-[200] bg-[#0b0c0c]/95 backdrop-blur-3xl flex flex-col px-6 md:px-12 py-6 overflow-hidden"
          >
            {/* OVERLAY HEADER */}
            <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between border-b border-white/10 pb-6">
              
              {/* BIG LOGO SPOT */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-lime flex items-center justify-center text-black font-black text-lg rounded-sm">R</div>
                <span className="text-white font-bold text-xl tracking-tight">Revenue Room</span>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setMenuOpen(false)}
                className="w-[60px] h-[60px] bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group"
              >
                <X className="w-5 h-5 text-white group-hover:text-brand-lime transition-colors" />
              </button>
            </div>

            {/* OVERLAY CONTENT */}
            <div className="flex-1 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pt-12 md:pt-0">
              
              {/* Links */}
              <div className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <div key={link} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{ duration: 0.6, ease: cinematicEase, delay: 0.1 + (i * 0.05) }}
                    >
                      <Link 
                        href={`#${link.toLowerCase()}`} 
                        onClick={() => setMenuOpen(false)}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white/70 hover:text-white transition-colors block"
                      >
                        {link}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Sidebar Info */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col gap-10 mt-16 md:mt-0"
              >
                <div>
                  <h4 className="text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-3">Start a project</h4>
                  <a href="mailto:hello@revenueroom.com" className="text-white text-lg font-medium hover:text-brand-lime transition-colors">
                    hello@revenueroom.com
                  </a>
                </div>

                <div>
                  <h4 className="text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-3">Follow Us</h4>
                  <div className="flex flex-col gap-2">
                    {["LinkedIn", "Twitter", "Instagram"].map(social => (
                      <a key={social} href="#" className="text-white/70 text-sm font-medium hover:text-white transition-colors">
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
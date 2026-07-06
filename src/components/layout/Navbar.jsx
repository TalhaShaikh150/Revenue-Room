"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Cinematic smooth easing curve
  const smoothEase = [0.16, 1, 0.3, 1];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > window.innerHeight * 0.9);
          ticking = false;
        });
        ticking = true;
      }
    };
    // passive: true = critical for mobile scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Company", "Works", "Pricing", "Resources"];

  return (
    <>
      {/* 
        1. THE DYNAMIC ANCHOR WRAPPER 
        The padding here (px-4 to px-12) determines exactly where the hamburger 
        menu will sit on large monitors. It scales natively.
      */}
      <div className="fixed top-6 inset-x-0 w-full px-4 md:px-8 lg:px-12 z-[100] pointer-events-none flex">
        
        {/* 
          2. THE MORPHING NAV CAPSULE
          We use the `layout` prop. Framer Motion smoothly glides the element 
          from `mx-auto` (Center) to `ml-auto` (Right) without any jumping.
        */}
        <motion.nav
          layout
          initial={false}
          animate={{
            maxWidth: scrolled ? 60 : 1200,
          }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className={`w-full h-[60px] bg-[#0b0c0c]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-full overflow-hidden pointer-events-auto relative flex items-center ${
            scrolled ? "ml-auto mr-0" : "mx-auto"
          }`}
        >
          <AnimatePresence mode="wait">
            
            {/* STATE A: Full Navbar */}
            {!scrolled && (
              <motion.div
                key="full-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }}
                // Extremely fast exit so the text disappears before the pill crushes it
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                // min-w forces the content to never squish
                className="absolute inset-0 flex items-center justify-between px-4 md:px-6 min-w-[280px] md:min-w-[800px] w-full h-full"
              >
                {/* Minimal Logo */}
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                  <div className="w-2 h-2 bg-brand-lime group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-bold text-[14px] md:text-[15px] tracking-tight text-white">
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

                {/* Right CTA and Mobile Menu */}
                <div className="flex items-center gap-2 shrink-0">
                  <button className="hidden sm:block bg-white text-black px-5 py-2 rounded-full text-[12px] font-bold hover:bg-brand-lime transition-colors duration-300">
                    Contact Us
                  </button>
                  <button 
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden flex items-center justify-center w-9 h-9 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Menu className="w-4 h-4 text-white" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STATE B: Scrolled Hamburger Button */}
            {scrolled && (
              <motion.button
                key="hamburger"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.1 } }}
                onClick={() => setMenuOpen(true)}
                className="absolute inset-0 w-full h-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Menu className="w-5 h-5 text-white" />
              </motion.button>
            )}

          </AnimatePresence>
        </motion.nav>
      </div>

      {/* 3. THE OVERLAY MENU (Perfectly scaled) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="fixed inset-0 z-[200] bg-[#0b0c0c]/95 backdrop-blur-3xl flex flex-col px-6 md:px-12 py-8 overflow-hidden"
          >
            {/* OVERLAY HEADER */}
            <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between border-b border-white/10 pb-6">
              
              {/* IMAGE LOGO SLOT */}
              <div className="flex items-center gap-3">
                {/* Replace this div with your client's actual logo image */}
                {/* <img src="/logo.svg" alt="Revenue Room" className="h-8 w-auto" /> */}
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
                      transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 + (i * 0.05) }}
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
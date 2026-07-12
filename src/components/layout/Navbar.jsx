"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";

// --- CUSTOM SVG SOCIAL ICONS ---
const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XTwitterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const navItems = [
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    subItems: [
      { label: "SEO & Search Ads", href: "/services/seo-google-ai-search-advertising" },
      { label: "Paid Social Scaling", href: "/services/paid-social-media-advertising" },
      { label: "Web Dev & Landing Pages", href: "/services/web-development-landing-pages" },
      { label: "Organic Management", href: "/services/organic-social-media-management" },
      { label: "Video Production", href: "/services/video-editing-production" },
    ],
  },
  { label: "Courses", href: "/courses" },
  { label: "Consulting", href: "/consulting" },
  { label: "Blogs", href: "/blogs" },
  { label: "Who We Are", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
];

const socialLinks = [
  { name: "LinkedIn", icon: <LinkedinIcon className="w-4 h-4" />, href: "#" },
  { name: "X (Twitter)", icon: <XTwitterIcon className="w-4 h-4" />, href: "#" },
  { name: "Instagram", icon: <InstagramIcon className="w-4 h-4" />, href: "#" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const isActive = (href) => pathname === href || (href !== "/" && pathname.startsWith(href));
  const isParentActive = (item) => item.hasDropdown && item.subItems?.some((sub) => isActive(sub.href));


  return (
    <>
      {/* NORMAL STICKY NAVBAR */}
      <div className="fixed top-6 inset-x-0 w-full px-4 md:px-8 lg:px-12 z-[100] pointer-events-none flex">
        <motion.nav
          layout
          initial={false}
          animate={{ maxWidth: scrolled ? 60 : 1200 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className={`w-full h-[60px] bg-[#0b0c0c]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-full overflow-visible pointer-events-auto relative flex items-center ${
            scrolled ? "ml-auto mr-0" : "mx-auto"
          }`}
        >
          <AnimatePresence mode="wait">
            {!scrolled && (
              <motion.div
                key="full-nav"
                initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }} exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="absolute inset-0 flex items-center justify-between px-4 md:px-6 min-w-[280px] md:min-w-[800px] w-full h-full"
              >
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                  <div className="w-2 h-2 bg-accent group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-bold text-[14px] md:text-[15px] tracking-tight text-white">Revenue Room</span>
                </Link>

                <div className="hidden md:flex items-center gap-1">
                  {navItems.map((item, index) => {
                    const active = isParentActive(item) || isActive(item.href);
                    return (
                      <div
                        key={item.label}
                        className="relative group h-[60px] flex items-center"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <Link
                          href={item.hasDropdown ? "#" : item.href}
                          className={`relative px-3 lg:px-4 py-2 text-[12px] font-bold tracking-wide uppercase transition-colors flex items-center gap-1 ${
                            active ? "text-accent" : "text-white/70 hover:text-white"
                          }`}
                        >
                          {item.label}
                          {item.hasDropdown && <ChevronDown className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />}
                          {hoveredIndex === index && (
                            <motion.div layoutId="nav-hover-pill" className="absolute inset-0 bg-white/10 rounded-full -z-10" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                          )}
                        </Link>
                        
                        {item.hasDropdown && item.subItems && (
                          <div className="absolute top-[50px] left-0 w-64 bg-[#0a0a0c]/95 backdrop-blur-2xl border border-white/10 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden shadow-2xl py-3 z-50">
                            {item.subItems.map((subItem) => {
                              const subActive = isActive(subItem.href);
                              return (
                                <Link
                                  key={subItem.label} href={subItem.href}
                                  className={`flex items-center gap-3 px-5 py-3 text-[11px] font-bold tracking-wider uppercase transition-colors ${
                                    subActive ? "text-accent bg-accent/5" : "text-white/70 hover:text-accent hover:bg-white/5"
                                  }`}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${subActive ? "bg-accent" : "bg-white/20"}`} />
                                  {subItem.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link href="/contact" className="hidden sm:block bg-white text-black px-6 py-2 rounded-full text-[12px] font-bold hover:bg-accent transition-colors duration-300">
                    Sign Up
                  </Link>
                  <button onClick={() => setMenuOpen(true)} className="md:hidden flex items-center justify-center w-9 h-9 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Menu className="w-4 h-4 text-white" />
                  </button>
                </div>
              </motion.div>
            )}

            {scrolled && (
              <motion.button
                key="hamburger"
                initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }} exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.1 } }}
                onClick={() => setMenuOpen(true)}
                className="absolute inset-0 w-full h-full flex items-center justify-center hover:bg-white/10 transition-colors group"
              >
                <Menu className="w-5 h-5 text-white group-hover:text-accent transition-colors" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* FULL-SCREEN OVERLAY MENU (STRICT 100DVH FIT) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-5%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-5%" }}
            transition={{ duration: 0.5, ease: smoothEase }}
            // Fixed height ensures perfect fitting, internal scrolling handles overflow on tiny mobile screens
            className="fixed inset-0 z-[200] bg-[#050505] flex flex-col h-[100dvh] w-full"
          >
            
            {/* ABSOLUTE CLOSE BUTTON */}
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 md:top-8 md:right-12 w-[50px] h-[50px] bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group z-50">
              <X className="w-5 h-5 text-white group-hover:text-accent transition-transform duration-300 group-hover:rotate-90" />
            </button>

            {/* BODY — allows scrolling when dropdowns push content off-screen */}
            <div className="flex-1 w-full overflow-y-auto min-h-0">
              <div className="max-w-[1300px] mx-auto min-h-full flex items-center px-6 md:px-12 py-12 md:py-24">
                
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-full">
                  
                  {/* LEFT: Navigation Links */}
                  <div className="lg:col-span-7 flex flex-col w-full">
                    {navItems.map((item, i) => (
                      <MobileNavItem 
                        key={item.label} item={item} setMenuOpen={setMenuOpen} smoothEase={smoothEase} i={i} isActive={isActive} isParentActive={isParentActive}
                      />
                    ))}
                  </div>

                  {/* RIGHT: Contact & Socials */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
                    className="lg:col-span-4 lg:col-start-9 flex flex-col gap-8 lg:pl-12 lg:border-l border-white/10"
                  >
                    <div>
                      <h4 className="text-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-3">Start a project</h4>
                      <a href="mailto:hello@revenueroomdigital.com.au" className="group flex flex-col">
                        <span className="text-white text-lg md:text-xl font-bold tracking-tight group-hover:text-accent transition-colors break-words">
                          hello@revenueroom<br className="hidden lg:block"/>digital.com.au
                        </span>
                        <div className="h-[1px] w-full bg-white/20 mt-3 group-hover:bg-accent transition-colors" />
                      </a>
                    </div>

                    <div>
                      <h4 className="text-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-3">Headquarters</h4>
                      <p className="text-white/70 text-base font-medium">
                        Sydney, Australia <br/>
                        <span className="text-white/40 text-sm">Available Worldwide 24/7</span>
                      </p>
                    </div>

                    <div>
                      <h4 className="text-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-3">Social Network</h4>
                      <div className="flex flex-wrap gap-3">
                        {socialLinks.map((social) => (
                          <a 
                            key={social.name} 
                            href={social.href} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-black hover:bg-accent hover:border-accent transition-all duration-300 group"
                          >
                            {social.icon}
                            <span className="text-sm font-bold tracking-wide">{social.name}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ----------------------------------------------------
// SLEEK MOBILE NAV ITEM COMPONENT
// ----------------------------------------------------
const MobileNavItem = ({ item, setMenuOpen, smoothEase, i, isActive, isParentActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemActive = isParentActive(item) || isActive(item.href);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.05 }}
      className="w-full border-b border-white/10 overflow-hidden"
    >
      {item.hasDropdown && item.subItems ? (
        <div className="flex flex-col w-full">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`group py-3 md:py-4 text-2xl md:text-3xl lg:text-5xl font-black tracking-tighter transition-all duration-500 flex items-center justify-between w-full text-left ${
              itemActive || isOpen ? "text-white" : "text-white/50 hover:text-white"
            }`}
          >
            <div className="flex items-center transition-transform duration-500 group-hover:translate-x-4">
              <span className={`mr-4 w-2 h-2 rounded-full bg-brand-lime transition-all duration-500 ${itemActive || isOpen ? 'opacity-100 scale-100 shadow-[0_0_10px_rgba(202,255,4,0.8)]' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-[0_0_10px_rgba(202,255,4,0.8)]'}`} />
              <span>{item.label}</span>
            </div>
            <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 ${isOpen ? 'text-brand-lime rotate-180' : 'text-white/30 group-hover:text-brand-lime'}`} />
          </button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: smoothEase }}
              >
                {/* Clean, space-saving link list */}
                <div className="flex flex-col gap-2 pb-6 pt-2 pl-6">
                  {item.subItems.map(subItem => {
                    const subActive = isActive(subItem.href);
                    return (
                     <Link 
                       key={subItem.label} href={subItem.href} onClick={() => setMenuOpen(false)}
                       className={`group flex items-center py-2 transition-all duration-300 ${
                         subActive ? "text-brand-lime" : "text-white/60 hover:text-white"
                       }`}
                     >
                       <ArrowRight className={`w-4 h-4 text-brand-lime transition-all duration-300 ${subActive ? "translate-x-0 opacity-100 mr-3" : "-translate-x-4 opacity-0 w-0 mr-0 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-3"}`} />
                       <span className={`text-lg md:text-xl font-bold tracking-tight transition-transform duration-300 ${subActive ? "translate-x-2" : "group-hover:translate-x-2"}`}>
                         {subItem.label}
                       </span>
                     </Link>
                  )})}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link 
          href={item.href} 
          onClick={() => setMenuOpen(false)}
          className={`group py-3 md:py-4 text-2xl md:text-3xl lg:text-5xl font-black tracking-tighter transition-all duration-500 flex items-center w-full ${
            itemActive ? "text-white" : "text-white/50 hover:text-white"
          }`}
        >
          <div className="flex items-center transition-transform duration-500 group-hover:translate-x-4">
            <span className={`mr-4 w-2 h-2 rounded-full bg-brand-lime transition-all duration-500 ${itemActive ? 'opacity-100 scale-100 shadow-[0_0_10px_rgba(202,255,4,0.8)]' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:shadow-[0_0_10px_rgba(202,255,4,0.8)]'}`} />
            <span>{item.label}</span>
          </div>
        </Link>
      )}
    </motion.div>
  );
};
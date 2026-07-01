"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-center w-full"
    >
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between border-b border-white/10 pb-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-text-primary" />
          Asia.Agency
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-widest font-semibold text-text-secondary">
          <Link href="/about" className="hover:text-white transition-colors">About us</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/works" className="hover:text-white transition-colors">Works</Link>
          <Link href="/services" className="hover:text-white transition-colors flex items-center gap-1">
            Services <span className="text-[8px]">v</span>
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/different" className="hover:text-white transition-colors">How we're different</Link>
        </nav>

        {/* CTA */}
        <Button variant="outline" className="hidden md:flex py-1.5 px-4 text-xs font-semibold rounded-full border-white/20">
          Contact us!
        </Button>
      </div>
    </motion.header>
  );
}


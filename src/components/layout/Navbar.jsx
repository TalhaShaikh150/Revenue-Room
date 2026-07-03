"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 w-full z-20">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 bg-brand-lime"></div>
        <span className="font-black text-xl tracking-tight">Revenue Room</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="#"
          className="text-[13px] text-brand-gray font-medium hover:text-white transition"
        >
          Company
        </Link>
        <Link
          href="#"
          className="text-[13px] text-brand-gray font-medium hover:text-white transition"
        >
          Works
        </Link>
        <Link
          href="#"
          className="text-[13px] text-brand-gray font-medium hover:text-white transition"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-[13px] text-brand-gray font-medium hover:text-white transition"
        >
          Resources
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Available Status */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-3.5 h-3.5 rounded-full border border-brand-lime/30">
            <div className="w-1.5 h-1.5 bg-brand-lime rounded-full"></div>
          </div>
          <span className="text-[12px] text-brand-gray font-medium">
            Available
          </span>
        </div>
        {/* Contact Button */}
        <button className="bg-white text-black px-4 py-2 rounded-[10px] text-[13px] font-bold hover:bg-gray-100 transition">
          Contact Now
        </button>
      </div>
    </nav>
  );
}

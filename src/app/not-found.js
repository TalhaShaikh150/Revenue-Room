import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "404 - Page Not Found | Revenue Room Digital",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="bg-brand-bg min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4 pt-32 pb-24 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="relative inline-block mb-6">
            <span className="text-brand-lime font-black text-[120px] md:text-[200px] leading-none tracking-tighter opacity-90 relative z-10">
              404
            </span>
            {/* Outline text effect for a premium feel */}
            <span className="absolute top-0 left-0 text-transparent font-black text-[120px] md:text-[200px] leading-none tracking-tighter [-webkit-text-stroke:2px_#d8fc4d] opacity-30 translate-x-4 translate-y-4 -z-10">
              404
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Lost in the Noise?
          </h1>
          
          <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            The page you're looking for has moved, been deleted, or never existed in the first place. Let's get you back to growing your revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand-lime text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Return to Homepage
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

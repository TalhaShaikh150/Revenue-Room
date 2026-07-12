import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceCTA({ serviceId = "general", title = "Ready to Dominate Your Market?", description = "Let's discuss how we can help you achieve your revenue goals." }) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#050505] px-4 md:px-8 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto relative z-10 flex justify-center">
        
        {/* Premium Image-Backed CTA Card */}
        <div className="w-full relative rounded-[32px] md:rounded-[48px] overflow-hidden bg-[#0a0a0c] border border-white/10 group shadow-2xl">
          
          {/* High-quality background image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium office" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000"
            />
            {/* Dark gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-[#0a0a0c]/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0c_100%)]" />
          </div>

          <div className="relative z-10 px-6 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-lime/30 bg-brand-lime/5 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse-slow" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">
                Next Steps
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white mb-6 tracking-tighter leading-[1.05] uppercase max-w-3xl">
              {title}
            </h2>
            
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl font-medium leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href={`/contact?service=${serviceId}`}
                className="group flex items-center justify-center gap-3 bg-brand-lime text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full sm:w-auto"
              >
                Book This Service
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-white/10 hover:border-white/30 transition-all duration-300 w-full sm:w-auto backdrop-blur-md"
              >
                Ask a Question
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

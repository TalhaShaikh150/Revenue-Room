import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceCTA({ serviceId = "general", title = "Ready to Dominate Your Market?", description = "Let's discuss how we can help you achieve your revenue goals." }) {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 bg-brand-primary/5"></div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/contact?service=${serviceId}`}
            className="group flex items-center gap-2 bg-brand-lime text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Book This Service
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}

// SERVER COMPONENT, no "use client" needed
import Image from "next/image";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/Motion";

const teamMembers = [
  {
    name: "Alex Sterling",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "David Kim",
    role: "Lead Media Buyer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Emily Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  }
];

export function TeamSection() {
  return (
    <section className="relative w-full py-16 md:py-32 px-4 md:px-8 bg-brand-bg border-t border-white/5">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="text-center mb-16 md:mb-24">
          <FadeIn>
            <h2 className="text-white text-3xl md:text-5xl lg:text-[56px] font-black uppercase tracking-tighter leading-[1.1] mb-6">
              Meet the <span className="text-brand-lime">Machine</span>
            </h2>
            <p className="text-white/50 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              We don&apos;t hire employees, we build a roster of killers. Every person on this team is obsessed with one thing: your ROI.
            </p>
          </FadeIn>
        </div>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, idx) => (
            <FadeInItem key={idx}>
              <div className="group relative">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-6">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover grayscale"
                  />
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle gradient overlay at bottom for text readability if we put text inside, but we'll put it below */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">{member.name}</h3>
                  <p className="text-brand-lime font-bold uppercase tracking-widest text-xs md:text-sm">{member.role}</p>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

      </div>
    </section>
  );
}

// SERVER COMPONENT ,  no "use client" needed
import { FadeIn } from "@/components/ui/Motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Alignment",
    description: "We start by deeply understanding your business, your current challenges, and your aggressive growth goals. No cookie-cutter assumptions.",
  },
  {
    number: "02",
    title: "The Deep Dive",
    description: "Our experts tear down your existing setup, analyzing ad accounts, tracking, creatives, and funnels to find the bottlenecks holding you back.",
  },
  {
    number: "03",
    title: "Strategic Roadmap",
    description: "We present a comprehensive, data-backed action plan. You get crystal-clear recommendations on what to fix, what to scale, and where to pivot.",
  },
  {
    number: "04",
    title: "Execution & Advisory",
    description: "We don't just hand you a PDF and leave. We partner with your team to implement the changes and provide ongoing advisory to ensure success.",
  }
];

export function ConsultingProcess() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-[#0b0c0c] border-y border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Our Consulting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Process</span>
            </h2>
            <p className="text-lg text-white/50">
              A structured, no-BS approach to uncovering your growth roadblocks and building a scalable path forward.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden group hover:border-brand-lime/30 transition-colors h-full">
                <div className="text-6xl font-black text-white/5 mb-6 group-hover:text-brand-lime/10 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/Motion";




export function ServiceProcess({ title, subtitle, steps }) {
  return (
    <section className="bg-brand-bg text-white py-24 md:py-32 px-4 md:px-8 w-full relative z-20 overflow-hidden border-t border-white/5">
      
      {/* Subtle Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-brand-lime/5 to-transparent pointer-events-none" />

      <div className="max-w-[1300px] mx-auto w-full relative z-10">
        
        {/* Header */}
        <FadeIn className="mb-16 md:mb-24 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">
              {subtitle}
            </span>
          </div>
          <h2 className="text-[32px] md:text-[clamp(40px,5vw,64px)] font-black leading-[1.05] tracking-tight uppercase">
            {title}
          </h2>
        </FadeIn>

        {/* Process Steps */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, index) => {

            return (
              <FadeInItem key={index}>
                <div className="group relative flex flex-col h-[450px] md:h-[500px] rounded-[32px] overflow-hidden bg-[#0a0a0c] border border-white/10 cursor-pointer">


                  {/* Number indicator */}
                  <div className="absolute top-6 right-8 text-brand-lime/20 font-black text-6xl md:text-8xl leading-none group-hover:text-brand-lime transition-colors duration-500">
                    0{index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 mt-auto p-8 md:p-10">
                    <div className="w-12 h-1 bg-white/10 mb-6 group-hover:bg-brand-lime group-hover:w-16 transition-all duration-500" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-brand-lime transition-colors duration-500 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed font-medium text-sm md:text-base group-hover:text-white/90 transition-colors duration-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}

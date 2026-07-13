import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ServicePricing({ plans, serviceId = "general" }) {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the level of growth that fits your current business stage. No hidden fees, just predictable ROI.
          </p>
        </div>
        <div className={`grid grid-cols-1 items-stretch gap-8 ${plans.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.isPopular 
                  ? "bg-[#111113] border-brand-lime shadow-[0_0_30px_rgba(216,252,77,0.1)]" 
                  : "bg-white/[0.02] border-white/10"
              } transition-transform hover:-translate-y-2 duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-lime text-black text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8 flex flex-col gap-1">
                <div className="flex items-end gap-2 flex-wrap">
                  <span className={`${plan.price.length > 8 ? 'text-2xl md:text-3xl' : 'text-4xl'} font-black text-white`}>{plan.price}</span>
                  {plan.period && <span className="text-gray-400 text-sm mb-1">{plan.period}</span>}
                </div>
                {plan.setupFee && (
                  <span className="text-white font-bold text-xs mt-1">
                    {plan.setupFee}
                  </span>
                )}
                {plan.disclaimer && (
                  <span className="text-gray-500 text-[10px]">
                    {plan.disclaimer}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.isPopular ? "text-brand-lime" : "text-white/40"}`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/contact?service=${serviceId}&plan=${encodeURIComponent(plan.name.toLowerCase())}`}
                className={`group flex items-center justify-center gap-2 w-full py-4 rounded-lg font-bold transition-all duration-300 ${
                  plan.isPopular 
                    ? "bg-brand-lime text-black hover:bg-white" 
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise CTA Block */}
        <div className="mt-16 md:mt-24 bg-[#0e0e10] border border-brand-lime/20 rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Need a Custom Enterprise Solution?
            </h3>
            <p className="text-white/60 text-base md:text-lg">
              For large-scale operations, we engineer custom growth strategies and deployments. Let's build the perfect plan for your business.
            </p>
          </div>
          <Link
            href={`/contact?service=${serviceId}&plan=enterprise`}
            className="shrink-0 group flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-brand-lime hover:text-black hover:border-brand-lime transition-all duration-300 uppercase tracking-widest text-[12px]"
          >
            Book Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

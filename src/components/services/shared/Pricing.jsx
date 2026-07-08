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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
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
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-lime text-black text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-end gap-1">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-400 text-sm mb-1">{plan.period}</span>}
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
      </div>
    </section>
  );
}

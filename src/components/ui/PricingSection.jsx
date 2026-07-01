"use client";

import { Card } from "./Card";
import { Button } from "./Button";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for emerging brands needing a solid foundation.",
      features: ["1 Dedicated Account Manager", "Bi-weekly reporting", "Standard Support", "Basic SEO Optimization"]
    },
    {
      name: "Growth",
      price: "$6,000",
      period: "/month",
      description: "For established businesses ready to aggressively scale.",
      features: ["Dedicated Media Buying Team", "Weekly Strategy Calls", "Priority Support", "Advanced Conversion Tracking", "Custom Creative Assets"],
      isRecommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Embedded fractional leadership and full-funnel execution.",
      features: ["Fractional CMO", "Daily Slack Access", "Full Funnel Audits", "Custom Data Dashboards", "In-house Team Training"]
    }
  ];

  return (
    <section className="py-32 px-6 relative z-10 overflow-hidden">
      {/* Ghost Watermark Text (Pattern C) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-transparent opacity-5 pointer-events-none select-none tracking-tighter w-full text-center"
        style={{ WebkitTextStroke: "2px white" }}
      >
        PRICING
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">Transparent Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <Card 
              key={idx} 
              elevated={plan.isRecommended}
              className={`flex flex-col h-full ${plan.isRecommended ? 'border-accent/30 bg-brand py-12 transform md:scale-105 z-20' : 'py-8'}`}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-brand text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 border-b border-white/5 pb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-text-secondary h-12">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tighter">{plan.price}</span>
                  <span className="text-text-secondary font-medium">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isRecommended ? "primary" : "outline"} 
                className="w-full"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

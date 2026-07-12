"use client";

import { motion } from "framer-motion";
import { Search, Compass, Users, LineChart } from "lucide-react";

const services = [
  {
    title: "Deep-Dive Audits",
    description:
      "We tear down your existing ad accounts, analytics, and conversion funnels to find hidden waste and untapped opportunities. You get a comprehensive report with actionable next steps.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Strategy & Planning",
    description:
      "Stop throwing spaghetti at the wall. We help you build data-backed, scalable marketing strategies, complete with budget allocation, channel selection, and KPI forecasting.",
    icon: <Compass className="w-6 h-6" />,
  },
  {
    title: "Fractional CMO",
    description:
      "Get executive-level marketing leadership without the full-time overhead. We integrate with your team to direct strategy, manage vendors, and align marketing with business goals.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Ongoing Advisory",
    description:
      "Have an in-house team that just needs guidance? We provide regular check-ins, performance reviews, and strategic sounding boards to keep your campaigns on track.",
    icon: <LineChart className="w-6 h-6" />,
  },
];

export function ConsultingServices() {
  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-6 bg-brand-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            How We Can <span className="text-brand-lime">Help</span>
          </h2>
          <p className="text-lg text-white/50">
            Whether you need a one-off audit to find out why your ads are failing, or a long-term strategic partner, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors group"
            >
              <div className="w-12 h-12 bg-brand-lime/10 text-brand-lime rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

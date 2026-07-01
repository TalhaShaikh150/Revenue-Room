"use client";

import { Card } from "./Card";

export function ServicesGrid() {
  const services = [
    { title: "Web Development", description: "High-performance marketing sites." },
    { title: "Search Engine Optimization", description: "Dominate organic search results." },
    { title: "Paid Social Media", description: "Meta, TikTok, and LinkedIn scaling." },
    { title: "Paid Search (PPC)", description: "Google Ads & YouTube." },
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h2>
          <a href="/agency" className="text-accent hover:underline decoration-accent underline-offset-4 hidden md:block">
            View all services &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Service 1 */}
          <Card className="h-64 flex flex-col justify-between hover:bg-brand-raised transition-colors group cursor-pointer">
            <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{services[0].title}</h3>
            <p className="text-text-secondary">{services[0].description}</p>
          </Card>
          
          {/* Service 2 - Tilted / Flagship */}
          <Card elevated tilted className="h-64 flex flex-col justify-between cursor-pointer group">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-accent">{services[1].title}</h3>
              <span className="bg-accent text-brand text-xs font-bold px-2 py-1 rounded">FLAGSHIP</span>
            </div>
            <p className="text-text-secondary">{services[1].description}</p>
          </Card>

          {/* Service 3 */}
          <Card className="h-64 flex flex-col justify-between hover:bg-brand-raised transition-colors group cursor-pointer">
            <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{services[2].title}</h3>
            <p className="text-text-secondary">{services[2].description}</p>
          </Card>

          {/* Service 4 */}
          <Card className="h-64 flex flex-col justify-between hover:bg-brand-raised transition-colors group cursor-pointer">
            <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{services[3].title}</h3>
            <p className="text-text-secondary">{services[3].description}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

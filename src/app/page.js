"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MapPin, Navigation } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden bg-brand text-text-primary">
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center text-center overflow-hidden bg-black">
        
        {/* Video Background */}
        <video 
          src="/hero2.mp4"
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        />

        {/* Cinematic Vignette/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/60 to-transparent z-[1] pointer-events-none" />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 relative z-10 flex flex-col items-center mt-20"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-2 mb-10 text-[10px] uppercase tracking-widest font-semibold text-text-secondary/70">
            <span>Growth solutions for</span>
            <span className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">startup</span>
            <span className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">agencies</span>
            <span className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">existing company</span>
          </motion.div>

          <motion.h1 variants={fadeUpVariant} className="text-6xl md:text-8xl lg:text-[100px] font-serif font-medium tracking-tight max-w-5xl leading-[1.05] mb-8 drop-shadow-2xl">
            Your <span className="text-accent italic">business growth</span> <br />
            partner beyond just <br />
            marketing
          </motion.h1>

          <motion.p variants={fadeUpVariant} className="text-text-secondary/90 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-loose font-light">
            More than just a marketing agency we build strategies that drive growth from top to
            bottom. From brand positioning to sales funnels, we act as your in-house team to scale
            your business fast.
          </motion.p>

          <motion.div variants={fadeUpVariant}>
            <Button variant="outline" className="bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black border-white/10 gap-3 font-medium transition-all duration-500">
              How we're different <ArrowRight size={16} />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Logos Section */}
      <section className="py-16 border-b border-white/5 opacity-40">
        <div className="container mx-auto flex flex-wrap justify-center gap-8 md:gap-20 items-center px-6">
          {["attentive", "Framer", "pipedrive", "Basecamp", "GitHub", "Square", "classpass", "DocuSign", "RIPPLING"].map((logo, i) => (
            <span key={i} className="text-sm md:text-lg font-serif italic tracking-wider font-semibold">{logo}</span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              About us
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-12">
              We specialize in accelerating business growth through str<span className="text-text-secondary/40 font-light">ategy, creativity, and technology helping startups and established companies stay ahead of the competition.</span>
            </h2>
            <Button variant="outline" className="rounded-full text-xs py-3 px-8 border-white/10 hover:border-white/30 transition-all duration-500">
              Learn more about us
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <h2 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1]">
            We drive your business <br />
            <span className="text-accent italic">beyond limits</span>
          </h2>
          <Button variant="outline" className="rounded-full gap-3 text-sm py-3 px-6 border-white/10 hover:border-white/30 transition-all duration-500">
            Ready to Scale? Let's Talk <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/5 pt-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <div className="text-7xl md:text-[120px] font-serif font-medium tracking-tighter mb-4">100<span className="text-accent">++</span></div>
            <div className="text-text-secondary text-sm uppercase tracking-widest font-semibold">Successful Projects</div>
          </motion.div>
          <motion.div className="md:mt-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <div className="text-7xl md:text-[120px] font-serif font-medium tracking-tighter mb-4">50<span className="text-accent">++</span></div>
            <div className="text-text-secondary text-sm uppercase tracking-widest font-semibold">Industries Served</div>
          </motion.div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto w-full overflow-hidden">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1]">
            Our custom approach <br />
            ensures <span className="text-accent italic">projects success</span>
          </h2>
          <Button variant="outline" className="rounded-full gap-2 text-xs py-2 px-6 border-white/10">
            More projects <ArrowRight size={14} />
          </Button>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 snap-x scrollbar-hide -mx-6 px-6">
          {/* Card 1 */}
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="min-w-[85vw] md:min-w-[700px] bg-brand-surface/50 backdrop-blur-sm border border-white/5 rounded-[40px] p-8 md:p-10 flex flex-col md:flex-row gap-10 snap-center hover:border-white/10 transition-colors duration-500">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-8">
                  <MapPin size={20} className="text-blue-500" />
                </div>
                <h3 className="text-3xl font-serif font-medium mb-4">Digital Marketing Campaign</h3>
                <p className="text-text-secondary/80 text-sm leading-relaxed mb-8 font-light">
                  Our integrated digital strategy led to a 50% increase in leads and a 35% rise in conversion rates, delivering measurable growth.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Marketing campaign", "Strategy", "Campaign"].map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider px-3 py-1.5 bg-white/5 rounded-full border border-white/5 font-semibold text-text-secondary">{tag}</span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[45%] h-64 md:h-auto rounded-3xl overflow-hidden bg-white/5 relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center transition-transform duration-1000 hover:scale-105" />
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="min-w-[85vw] md:min-w-[700px] bg-brand-surface/50 backdrop-blur-sm border border-white/5 rounded-[40px] p-8 md:p-10 flex flex-col md:flex-row gap-10 snap-center hover:border-white/10 transition-colors duration-500">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-8">
                  <Navigation size={20} className="text-blue-500" />
                </div>
                <h3 className="text-3xl font-serif font-medium mb-4">Transforming Online Presence</h3>
                <p className="text-text-secondary/80 text-sm leading-relaxed mb-8 font-light">
                  We redefined the client's digital experience, creating a visually captivating website that boosted traffic in the first quarter.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Digital marketing", "ROI solution", "Strategy"].map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider px-3 py-1.5 bg-white/5 rounded-full border border-white/5 font-semibold text-text-secondary">{tag}</span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[45%] h-64 md:h-auto rounded-3xl overflow-hidden bg-white/5 relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center transition-transform duration-1000 hover:scale-105" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campaigns Accordion Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-serif font-medium text-center mb-20">
          Explore our winning <br />
          <span className="text-accent italic">campaigns</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[40%] flex flex-col gap-4">
            {["Successful Lead Campaigns", "Organic Promotion Success Rate", "Boost in Conversion Rates", "Business data", "Top 5 in"].map((item, idx) => (
              <div key={idx} className={`p-6 rounded-3xl border ${idx === 0 ? 'bg-brand-surface/80 border-white/10 backdrop-blur-sm shadow-xl' : 'border-white/5 bg-transparent hover:border-white/10 hover:bg-white/5'} flex justify-between items-start cursor-pointer transition-all duration-300`}>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-3">{item}</h3>
                  {idx === 0 && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                      <p className="text-xs text-text-secondary/80 mb-6 font-light leading-relaxed">Generating high-quality leads that drive measurable business results across channels.</p>
                      <Button className="bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black text-[10px] uppercase tracking-widest font-semibold py-2 px-5 h-auto min-h-0 border-none transition-colors duration-500">
                        More info &rarr;
                      </Button>
                    </motion.div>
                  )}
                </div>
                <div className="text-text-secondary mt-1 font-light opacity-50">v</div>
              </div>
            ))}
          </div>
          
          <div className="w-full lg:w-[60%] bg-brand-surface/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-10">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-text-secondary/60 border-b border-white/5 uppercase tracking-widest text-[10px] font-semibold">
                  <th className="pb-6 w-1/4">Brand</th>
                  <th className="pb-6 w-1/4">Platform</th>
                  <th className="pb-6 w-1/4">Conversion Cost</th>
                  <th className="pb-6 w-1/4">Monthly Budget</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((row) => (
                  <tr key={row} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors duration-300">
                    <td className="py-6 font-medium flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <MapPin size={14} className="text-blue-500" />
                      </div>
                    </td>
                    <td className="py-6 text-text-secondary font-light">Facebook</td>
                    <td className="py-6 font-serif italic text-lg">$3</td>
                    <td className="py-6 font-serif text-lg">{[9000, 1500, 4000, 2000, 9000][row-1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 px-6 max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#068C64]/80 via-[#068C64]/30 to-brand p-16 md:p-32 text-center border border-[#068C64]/20 shadow-2xl shadow-[#068C64]/10"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
          <h2 className="relative z-10 text-5xl md:text-7xl font-serif font-medium max-w-3xl mx-auto leading-[1.1] mb-12 text-white drop-shadow-2xl">
            Get a reliable partner <br />
            that provides solutions <br />
            to business challenges
          </h2>
          <Button className="relative z-10 bg-white text-black hover:bg-gray-100 rounded-full font-semibold gap-3 px-8 py-4 text-sm transition-transform duration-500 hover:scale-105">
            Hire consultant <ArrowRight size={16} />
          </Button>
        </motion.div>
      </section>

      {/* Footer Top */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <h2 className="text-4xl md:text-5xl font-serif font-medium leading-[1.1]">
          Asia Agency drives <br />
          <span className="text-accent italic">growth</span> with innovation
        </h2>
        <p className="text-sm text-text-secondary/70 max-w-sm leading-loose font-light">
          Our approach goes beyond marketing, we offer 360° solutions that address every aspect of your business. From consulting and operational guidance to full-fledged digital strategies, we create growth plans tailored to your unique goals.
        </p>
      </section>

    </div>
  );
}


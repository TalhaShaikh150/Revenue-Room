"use client";

import { ArrowRight } from "lucide-react";

export function OfferingSection() {
  return (
    <section className="bg-brand-bg text-white py-32 px-4 relative z-20">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Sleek Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-brand-border pb-12">
          <div>
            <h2 className="text-[40px] md:text-[56px] font-black tracking-tighter leading-none mb-4 uppercase">
              Three Paths. <br className="hidden md:block"/> One Result.
            </h2>
            <p className="text-brand-gray text-[18px] max-w-xl">
              We don't force you into a box. Choose the engagement model that fits your current infrastructure, budget, and desired speed of growth.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Main Block: AGENCY (Takes full width on top) */}
          <div className="lg:col-span-2 relative h-[500px] md:h-[600px] rounded-[32px] overflow-hidden group cursor-pointer border border-brand-border hover:border-brand-lime/50 transition-colors duration-500">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000" 
              alt="Agency Execution" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent"></div>
            
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center max-w-3xl z-10">
              <span className="text-brand-lime font-bold tracking-widest uppercase text-sm mb-4">We do it for you</span>
              <h3 className="text-[56px] md:text-[80px] font-black leading-[0.9] tracking-tighter mb-6 text-white uppercase drop-shadow-lg">
                The Agency.
              </h3>
              <p className="text-brand-gray text-[18px] md:text-[20px] mb-10 max-w-xl group-hover:text-white transition-colors">
                An elite, done-for-you growth engine. We completely take over your strategy, paid media, and creative pipelines to scale your revenue. You handle the leads, we bring them.
              </p>
              <div className="flex items-center gap-4 text-brand-lime font-bold text-lg group/link w-max">
                <span className="border-b-2 border-transparent group-hover/link:border-brand-lime transition-all">Partner with our Agency</span>
                <div className="w-10 h-10 rounded-full bg-brand-lime/10 flex items-center justify-center group-hover/link:bg-brand-lime group-hover/link:text-black transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Sub Block 1: COURSES */}
          <div className="relative h-[450px] rounded-[32px] overflow-hidden group cursor-pointer bg-brand-card border border-brand-border hover:border-white/50 transition-colors duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-brand-bg to-brand-bg opacity-50"></div>
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
              <div>
                <span className="text-white/50 font-bold tracking-widest uppercase text-xs mb-4 block">We teach you</span>
                <h3 className="text-[40px] md:text-[48px] font-black leading-[1] tracking-tighter mb-4 text-white uppercase">
                  Academy.
                </h3>
                <p className="text-brand-gray text-[16px] mb-8">
                  Get the exact frameworks, SOPs, and resources we use in our agency. Perfect for businesses looking to build and train their internal marketing teams.
                </p>
              </div>
              <div className="flex items-center gap-4 text-white font-bold text-md group/link w-max mt-auto">
                <span className="border-b border-transparent group-hover/link:border-white transition-all">View Curriculums</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>

          {/* Sub Block 2: CONSULTANCY */}
          <div className="relative h-[450px] rounded-[32px] overflow-hidden group cursor-pointer bg-brand-bg border border-brand-border hover:border-brand-gray transition-colors duration-500">
            {/* Subtle tech pattern background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
              <div>
                <span className="text-brand-gray font-bold tracking-widest uppercase text-xs mb-4 block">Implant us</span>
                <h3 className="text-[40px] md:text-[48px] font-black leading-[1] tracking-tighter mb-4 text-white uppercase">
                  Advisory.
                </h3>
                <p className="text-brand-gray text-[16px] mb-8">
                  Fractional C-suite leadership. We implant our top minds into your business to audit systems, restructure teams, and provide high-level strategic direction.
                </p>
              </div>
              <div className="flex items-center gap-4 text-brand-gray font-bold text-md group/link w-max mt-auto hover:text-white transition-colors">
                <span className="border-b border-transparent group-hover/link:border-white transition-all">Inquire for consulting</span>
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
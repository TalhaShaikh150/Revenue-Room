"use client";

export function ThreePillars() {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-brand-bg pt-[100px] pb-6 px-4">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
      >
        <source src="/hero1.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay to keep content readable over the video */}
      <div className="absolute inset-0 bg-brand-bg/60 pointer-events-none z-0" />

      {/* Background Elements */}
      <div className="bg-circles absolute inset-0 opacity-50 pointer-events-none"></div>
    

      {/* Star Icon Left */}
      <div className="absolute top-[25%] left-[10%] text-white/10 pointer-events-none z-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M2 12h20"/></svg>
      </div>
      {/* Star Icon Right */}
      <div className="absolute top-[35%] right-[15%] text-white/10 pointer-events-none z-0">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M2 12h20"/></svg>
      </div>

      {/* TOP: HERO TEXT AREA */}
      <main className="flex-1 flex flex-col items-center justify-center z-10 w-full max-w-4xl mx-auto min-h-0">
          
         

          {/* Headline - Uses clamp to automatically shrink on shorter screens */}
          <h1 className="text-center text-[clamp(40px,6vw,72px)] font-bold leading-[1.05] tracking-tighter mb-4 text-white">
              Fueling the Next<br />Generation of Brands
          </h1>

          {/* Subheadline */}
          <p className="text-brand-gray text-[clamp(14px,2vw,16px)] font-medium mb-6 md:mb-8 text-center max-w-xl px-4">
              Powering bold ideas with strategy, creativity, and growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4">
              <button className="bg-brand-lime text-black px-6 py-3.5 rounded-[12px] text-[14px] font-bold hover:bg-[#cbf03d] transition-colors flex items-center gap-1.5 shadow-[0_0_20px_rgba(216,252,77,0.15)]">
                  Get Started <span className="font-black">&rarr;</span>
              </button>
              <button className="bg-[#151517] border border-brand-border text-white px-6 py-3.5 rounded-[12px] text-[14px] font-semibold hover:bg-[#1e1e20] transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                  Watch Demo
              </button>
          </div>
      </main>

      {/* BOTTOM: 5 CARDS GRID 
          This uses Tailwind height-media queries [@media(max-height:Xpx)] so the cards scale down if the user is on a small laptop screen, ensuring they NEVER get cut off. */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto flex justify-center items-end gap-2 md:gap-3 mt-auto transform origin-bottom 
        scale-[0.55] 
        sm:scale-[0.7] 
        md:scale-[0.85] 
        lg:scale-100 
        [@media(max-height:850px)]:scale-[0.85] 
        [@media(max-height:750px)]:scale-[0.75] 
        [@media(max-height:650px)]:scale-[0.6] 
        transition-transform duration-300">
          
          {/* Card 1: Marketing Team (Tallest, Left) */}
          <div className="relative w-[260px] h-[300px] bg-[#e9e9e9] rounded-[24px] p-2 shrink-0">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Team" className="w-full h-full object-cover rounded-[18px] filter grayscale" />
              
              <div className="absolute top-6 right-[-20px] bg-white text-black px-3 py-1.5 rounded-full text-[11px] font-bold shadow-lg flex items-center gap-1.5 z-20">
                  <div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
                  Marketing Team
              </div>
          </div>

          {/* Card 2: 100+ (Square, White) */}
          <div className="w-[180px] h-[180px] bg-white rounded-[24px] flex flex-col items-center justify-center text-center p-4 shrink-0 shadow-2xl">
              <h3 className="text-black text-[38px] font-bold tracking-tight leading-none mb-2">100+</h3>
              <p className="text-gray-400 text-[11px] font-medium leading-tight max-w-[120px]">Our Esteemed<br />Clients and Partners</p>
          </div>

          {/* Card 3: Shield (Square, Dark) */}
          <div className="relative w-[180px] h-[180px] bg-[#1a1a1c] border border-[#2a2a2c] rounded-[24px] p-5 overflow-hidden shrink-0 shadow-2xl">
              <h4 className="text-white text-[15px] font-bold leading-tight w-24 relative z-10">Trusted &<br />Transparent<br />Growth</h4>
              
              <div className="absolute -bottom-2 -right-4 w-28 h-28 text-[#333336]">
                  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-2xl">
                      <path d="M50 95 C 20 80, 10 50, 10 20 L 50 10 L 90 20 C 90 50, 80 80, 50 95 Z" fill="#222224" stroke="#333336" strokeWidth="2"/>
                      <path d="M38 45 V 35 C 38 28, 62 28, 62 35 V 45" fill="none" stroke="#e0e0e0" strokeWidth="4" strokeLinecap="round"/>
                      <rect x="34" y="45" width="32" height="24" rx="4" fill="#e0e0e0"/>
                      <circle cx="50" cy="54" r="3" fill="#222224"/>
                      <path d="M49 56 h2 v6 h-2 z" fill="#222224"/>
                  </svg>
              </div>
          </div>

          {/* Card 4: Chart (Square, Dark) */}
          <div className="relative w-[180px] h-[180px] bg-[#1a1a1c] border border-[#2a2a2c] rounded-[24px] p-5 flex flex-col justify-between overflow-hidden shrink-0 shadow-2xl">
              <div>
                  <h3 className="text-white text-[24px] font-bold leading-none mb-1">98.5%</h3>
                  <p className="text-gray-500 text-[10px] leading-tight max-w-[120px]">Marketing campaigns have<br />achieved 98% success</p>
              </div>
              
              <div className="flex items-end gap-2.5 h-16 mt-auto">
                  <div className="w-7 h-10 bg-[#333336] rounded-t-sm rounded-b-sm"></div>
                  <div className="w-7 h-14 bg-[#333336] rounded-t-sm rounded-b-sm"></div>
                  <div className="w-7 h-20 bg-brand-lime rounded-t-[4px] rounded-b-[2px] relative overflow-hidden shadow-[0_0_15px_rgba(216,252,77,0.2)]">
                      <div className="absolute inset-0 bar-pattern"></div>
                  </div>
              </div>
          </div>

          {/* Card 5: Globe (Medium height, Right) */}
          <div className="relative w-[240px] h-[220px] bg-white rounded-[24px] p-6 overflow-hidden shrink-0 shadow-2xl">
              <h3 className="text-black text-[28px] font-bold leading-none mb-1">20+</h3>
              <p className="text-gray-400 text-[10px] font-medium mb-3">Global Enterprise drives innovation</p>
              
              <div className="flex gap-2 relative z-10">
                  <span className="bg-black text-white text-[10px] font-semibold px-3 py-1 rounded-full">United States</span>
                  <span className="bg-black text-white text-[10px] font-semibold px-3 py-1 rounded-full">Australia</span>
              </div>

              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[220px] h-[160px] bg-black rounded-t-[110px] flex items-center justify-center overflow-hidden">
                  <svg className="w-full h-full opacity-30" viewBox="0 0 200 150">
                      <path d="M 0,50 Q 100,80 200,50" fill="none" stroke="gray" strokeWidth="1"/>
                      <path d="M 0,90 Q 100,120 200,90" fill="none" stroke="gray" strokeWidth="1"/>
                      <path d="M 0,130 Q 100,160 200,130" fill="none" stroke="gray" strokeWidth="1"/>
                      <path d="M 40,0 Q 10,75 40,150" fill="none" stroke="gray" strokeWidth="1"/>
                      <path d="M 100,0 Q 100,75 100,150" fill="none" stroke="gray" strokeWidth="1"/>
                      <path d="M 160,0 Q 190,75 160,150" fill="none" stroke="gray" strokeWidth="1"/>
                  </svg>
              </div>
          </div>

      </div>
    </section>
  );
}
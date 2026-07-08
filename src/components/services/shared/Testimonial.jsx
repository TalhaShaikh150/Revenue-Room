export function ServiceTestimonial({ quote, author, role, company }) {
  return (
    <section className="py-32 bg-[#0a0a0c] relative overflow-hidden">
      {/* Huge subtle quote mark in the background */}
      <div className="absolute -top-10 -left-10 md:top-10 md:left-20 text-[200px] md:text-[300px] leading-none font-serif text-white/[0.02] select-none pointer-events-none">
        &ldquo;
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <blockquote className="text-2xl md:text-4xl lg:text-5xl font-medium text-white mb-12 leading-tight md:leading-snug">
          &ldquo;{quote}&rdquo;
        </blockquote>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-1 bg-brand-lime mb-4"></div>
          <div className="text-xl font-bold text-white">{author}</div>
          <div className="text-brand-lime font-medium uppercase tracking-wider text-sm">
            {role}
            {company && <span className="text-gray-500"> // {company}</span>}
          </div>
        </div>
      </div>
    </section>
  );
}

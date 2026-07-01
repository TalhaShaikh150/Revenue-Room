export function Footer() {
  return (
    <footer className="relative bg-brand text-text-secondary pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tighter">AGENCY.</h2>
            <p className="max-w-sm">
              We scale premium brands with our full-service execution, training academy, and fractional consultancy.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/agency/services/web-development" className="hover:text-accent transition-colors">Web Development</a></li>
              <li><a href="/agency/services/seo" className="hover:text-accent transition-colors">SEO</a></li>
              <li><a href="/agency/services/paid-social" className="hover:text-accent transition-colors">Paid Social</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Pillars</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/agency" className="hover:text-accent transition-colors">Done-for-you</a></li>
              <li><a href="/academy" className="hover:text-accent transition-colors">Academy</a></li>
              <li><a href="/consultancy" className="hover:text-accent transition-colors">Consultancy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs">
          <p>© {new Date().getFullYear()} Agency. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Giant wordmark texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-transparent opacity-5 pointer-events-none select-none tracking-tighter" style={{ WebkitTextStroke: "1px white" }}>
        AGENCY
      </div>
    </footer>
  );
}

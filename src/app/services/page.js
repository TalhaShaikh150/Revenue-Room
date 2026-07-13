import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ServiceCTA } from "@/components/services/shared/CTA";

export const metadata = {
  title: "Our Services | Revenue Room Digital",
  description:
    "Explore our complete suite of digital marketing services. From SEO and Google Ads to Paid Social and Web Development, we build revenue engines for ambitious brands.",
  alternates: {
    canonical: "https://revenueroomdigital.com.au/services",
  },
  openGraph: {
    title: "Our Services | Revenue Room Digital",
    description:
      "Explore our complete suite of digital marketing services. We build revenue engines for ambitious brands.",
    url: "https://revenueroomdigital.com.au/services",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-bg text-white overflow-hidden">
      <Navbar />
      
      <div className="pt-20 md:pt-16 pb-0">
        <ServicesGrid showCTA={false} />
      </div>

      <div className="relative z-20 pb-20">
        <ServiceCTA 
          title="Ready to Build Your Revenue Engine?"
          description="Let's discuss how our services can scale your business to the next level."
        />
      </div>

      <Footer />
    </main>
  );
}

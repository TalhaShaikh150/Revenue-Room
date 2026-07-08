import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Web Development & Landing Page Design | Revenue Room Digital",
  description:
    "High-converting websites and landing pages built for Australian businesses. Revenue Room Digital designs and develops fast, beautiful, and SEO-optimised web experiences that turn visitors into customers.",
  keywords: [
    "web development Australia",
    "landing page design",
    "high converting landing pages",
    "website design agency Australia",
    "conversion rate optimisation",
    "CRO web design",
    "landing page agency",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical:
      "https://revenueroomdigital.com.au/services/web-development-landing-pages",
  },
  openGraph: {
    title: "Web Development & Landing Page Design | Revenue Room Digital",
    description:
      "High-converting websites and landing pages built for Australian businesses.",
    url: "https://revenueroomdigital.com.au/services/web-development-landing-pages",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function WebDevLandingPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Web Development &amp; Landing Page Design
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          We design and build fast, beautiful, conversion-focused websites and
          landing pages that are engineered to turn traffic into leads and
          revenue for your business.
        </p>
      </div>
      <Footer />
    </main>
  );
}

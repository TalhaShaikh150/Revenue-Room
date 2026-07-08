import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Contact Us | Revenue Room Digital",
  description:
    "Ready to grow your business? Get in touch with the Revenue Room Digital team. We work with ambitious Australian brands to build and scale profitable digital marketing campaigns.",
  keywords: [
    "contact Revenue Room Digital",
    "digital marketing agency contact",
    "hire marketing agency Australia",
    "get a quote digital marketing",
    "marketing agency consultation",
    "Revenue Room Digital contact",
  ],
  alternates: {
    canonical: "https://revenueroomdigital.com.au/contact",
  },
  openGraph: {
    title: "Contact Us | Revenue Room Digital",
    description:
      "Ready to grow your business? Get in touch with Revenue Room Digital today.",
    url: "https://revenueroomdigital.com.au/contact",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          Let&apos;s talk about your growth goals. Whether you&apos;re ready to
          launch or just exploring your options, our team is here to help you
          build a strategy that delivers real results.
        </p>
      </div>
      <Footer />
    </main>
  );
}

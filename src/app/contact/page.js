import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";

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
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Text content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Build Your Growth Engine
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Whether you&apos;re ready to launch a new campaign or just exploring your options, 
              our team is here to help you build a strategy that delivers real, measurable revenue.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-2">General Inquiries</h3>
                <p className="text-gray-400">hello@revenueroomdigital.com.au</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Office Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 5:30 PM (AEST)</p>
              </div>
            </div>
          </div>

          {/* Right Column - The Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

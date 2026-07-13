import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { ServiceHero } from "@/components/services/shared/Hero";
import { ServiceFeatures } from "@/components/services/shared/Features";
import { ServiceProcess } from "@/components/services/shared/Process";
import { ServiceBenefits } from "@/components/services/shared/Benefits";
import { ServiceCTA } from "@/components/services/shared/CTA";
import { ServiceTestimonial } from "@/components/services/shared/Testimonial";
import { ServiceFAQ } from "@/components/services/shared/FAQ";
import { ServicePricing } from "@/components/services/shared/Pricing";

import {
  LayoutGrid,
  CalendarCheck,
  MessageCircle,
  BarChart2,
  Megaphone,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Organic Social Media Management | Revenue Room Digital",
  description:
    "Build an audience that actually buys. Revenue Room Digital manages your organic social media presence across Instagram, TikTok, LinkedIn, and more, turning followers into loyal customers.",
  keywords: [
    "organic social media management Australia",
    "social media management agency",
    "Instagram management",
    "TikTok content strategy",
    "LinkedIn management agency",
    "social media content creation",
    "community management",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical:
      "https://revenueroomdigital.com.au/services/organic-social-media-management",
  },
  openGraph: {
    title: "Organic Social Media Management | Revenue Room Digital",
    description:
      "Build an audience that actually buys. We manage your organic social presence to turn followers into loyal customers.",
    url: "https://revenueroomdigital.com.au/services/organic-social-media-management",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

const FEATURES = [
  {
    title: "Content Strategy & Calendar",
    description:
      "We build a data-led content strategy tailored to your brand voice and audience behaviour, then plan it all into a structured, consistent monthly content calendar.",
    icon: <CalendarCheck className="w-6 h-6" aria-hidden="true" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Content Creation & Design",
    description:
      "From scroll-stopping graphics to Reels and TikToks, our creative team produces platform-native content that builds brand equity and drives real engagement.",
    icon: <LayoutGrid className="w-6 h-6" aria-hidden="true" />,
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Community Management",
    description:
      "We handle your DMs, comments, and community interactions daily, turning passive followers into engaged brand advocates and loyal repeat customers.",
    icon: <MessageCircle className="w-6 h-6" aria-hidden="true" />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Growth & Hashtag Strategy",
    description:
      "We implement proven organic growth tactics, from hashtag stacking and collaboration outreach to trend hijacking, to consistently grow your reach without ad spend.",
    icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Brand Voice & Tone",
    description:
      "We develop and protect a consistent brand voice across every post and every platform, so your audience knows exactly who you are and what you stand for.",
    icon: <Megaphone className="w-6 h-6" aria-hidden="true" />,
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Monthly Analytics & Reporting",
    description:
      "Full monthly performance reports covering reach, engagement rate, follower growth, and profile conversions, with clear, actionable recommendations each month.",
    icon: <BarChart2 className="w-6 h-6" aria-hidden="true" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
];

const PROCESS_STEPS = [
  {
    title: "Brand & Audience Audit",
    description:
      "We conduct a deep audit of your current accounts, competitors, and target audience to understand what content resonates and where the biggest growth gaps are.",
  },
  {
    title: "Strategy & Creative Direction",
    description:
      "We craft a 3-month content strategy with defined pillars, brand voice guidelines, a posting schedule, and platform-specific content formats.",
  },
  {
    title: "Content Production & Scheduling",
    description:
      "Our creative team produces all graphics, captions, and video content, then schedules everything for optimal posting times using professional scheduling tools.",
  },
  {
    title: "Engage, Optimise & Report",
    description:
      "We manage daily community engagement, monitor performance metrics, and deliver a clear monthly report with insights and strategy adjustments.",
  },
];

const BENEFITS = [
  {
    title: "Consistent Brand Presence",
    description:
      "Never go quiet again. We ensure your brand shows up consistently across every platform, every week, building trust and top-of-mind awareness with your audience.",
  },
  {
    title: "Content That Converts",
    description:
      "We don't just post for the sake of it. Every piece of content is intentionally crafted to move followers further down the funnel toward becoming customers.",
  },
  {
    title: "You Get Your Time Back",
    description:
      "Social media management is a full-time job. We take it completely off your plate so you can focus on running your business while we grow your audience.",
  },
];

const FAQS = [
  {
    question: "Which platforms do you manage?",
    answer:
      "We manage Instagram, TikTok, Facebook, LinkedIn, and Pinterest. Most clients focus on 2–3 platforms where their audience is most active. We'll recommend the best mix during our onboarding process.",
  },
  {
    question: "How many posts do you create per month?",
    answer:
      "This depends on your package. Our Launch plan covers 12 posts/month (3 per week), Scale covers 20 posts/month across multiple platforms, and Enterprise includes unlimited content production including Reels and Stories.",
  },
  {
    question: "Do I need to approve content before it goes live?",
    answer:
      "Yes, absolutely. We operate on a monthly content calendar approval process. You review and approve all content at the start of each month, so you always have full visibility and control over what goes out.",
  },
  {
    question: "Can you grow my follower count?",
    answer:
      "We implement organic growth strategies that attract genuine, relevant followers, not bots. Growth rates vary by industry and platform, but our clients typically see 15–30% follower growth in the first 90 days.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "We start with a 3-month commitment to allow time for strategy implementation and content momentum to build, followed by a flexible rolling monthly agreement.",
  },
];

const PRICING_PLANS = [
  {
    name: "Launch",
    description: "For brands establishing their organic social presence.",
    price: "$200",
    period: "/week",
    isPopular: false,
    features: [
      "3 Posts per week on all platforms",
      "Content Calendar & Strategy",
      "Basic Community Management",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Growth",
    description: "For brands looking to build an engaged following.",
    price: "$300",
    period: "/week",
    isPopular: true,
    features: [
      "5 Posts per week on all platforms",
      "Content Strategy & Scheduling",
      "Proactive Community Management",
      "Monthly Strategy Sync",
    ],
  },
  {
    name: "Enterprise",
    description: "Full-service social media management at scale.",
    price: "Custom",
    period: "",
    isPopular: false,
    features: [
      "Unlimited Platforms",
      "Unlimited Content Production",
      "Influencer & Collaboration Outreach",
      "Advanced Analytics Dashboard",
      "Dedicated Account Director",
      "Custom Reporting",
    ],
  },
];

export default function OrganicSocialMediaManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Organic Social Media Management",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Revenue Room Digital"
        },
        "description": "Build a loyal audience and turn followers into customers with our strategic organic social media management services."
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main className="bg-brand-bg min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <ServiceHero
        subtitle="Organic Social Media"
        title={
          <>
            Build an Audience <br />
            <span className="text-transparent [-webkit-text-stroke:1px_#ffffff] md:[-webkit-text-stroke:1.5px_#ffffff] opacity-80">
              That
            </span>{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_#d8fc4d] md:[-webkit-text-stroke:1.5px_#d8fc4d] drop-shadow-[0_0_15px_rgba(216,252,77,0.3)]">
              Actually Buys.
            </span>
          </>
        }
        description="We manage your brand's organic social presence end-to-end, strategy, content creation, posting, and community management, turning followers into a loyal, revenue-generating audience."
        highlights={[
          "End-to-End Content Strategy",
          "High-Quality Content Production",
          "Community Management",
          "Data & Engagement Reporting",
        ]}
        imageSrc="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1200"
      />

      <ServiceFeatures
        subtitle="Our Core Services"
        title="Everything Your Brand Needs to Win Organically"
        features={FEATURES}
      />

      <ServiceTestimonial
        quote="Since Revenue Room took over our Instagram and TikTok, our engagement rate tripled and we're now generating 30% of our online revenue directly from organic social. Worth every cent."
        author="Jess Thornton"
        role="Brand Manager"
        company="Lume Skincare"
        avatarSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256"
      />

      <ServiceBenefits
        subtitle="The Advantage"
        title="Why brands trust us with their social presence."
        benefits={BENEFITS}
        imageSrc="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Social media content creation and brand management"
      />

      <ServiceProcess
        subtitle="The Blueprint"
        title="How we grow your organic social revenue."
        steps={PROCESS_STEPS}
      />

      <ServicePricing 
        plans={PRICING_PLANS} 
        serviceId="social-media" 
        title="Organic Social Pricing" 
        subtitle="Management Plans"
      />

      <ServiceFAQ faqs={FAQS} />

      <ServiceCTA
        serviceId="social-media"
        title="Ready to Own Your Social Presence?"
        description="Let's build a content engine that grows your audience and converts followers into paying customers."
      />

      <div className="relative z-10 bg-brand-bg flex flex-col pt-16">
        <Footer />
      </div>
    </main>
  );
}

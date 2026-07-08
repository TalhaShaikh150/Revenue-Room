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
  Film,
  Scissors,
  Subtitles,
  Zap,
  PlayCircle,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Video Editing & Production | Revenue Room Digital",
  description:
    "High-impact video editing and production for brands that want to dominate on YouTube, Instagram, TikTok, and paid ads. From raw footage to scroll-stopping final cuts.",
  keywords: [
    "video editing agency Australia",
    "video production Australia",
    "social media video editing",
    "YouTube video editing",
    "TikTok video production",
    "ad creative video editing",
    "short form video agency",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical:
      "https://revenueroomdigital.com.au/services/video-editing-production",
  },
  openGraph: {
    title: "Video Editing & Production | Revenue Room Digital",
    description:
      "High-impact video editing and production for brands that dominate on YouTube, TikTok, and paid ads.",
    url: "https://revenueroomdigital.com.au/services/video-editing-production",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

const FEATURES = [
  {
    title: "Short-Form Video Editing",
    description:
      "Punchy, platform-native edits for TikTok, Instagram Reels, and YouTube Shorts. We cut for retention — strong hooks, rapid pacing, and compelling CTAs that drive action.",
    icon: <Scissors className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Long-Form YouTube Production",
    description:
      "Professional full-length YouTube video production with colour grading, motion graphics, chapter cards, and B-roll — built to maximise watch time and subscriber growth.",
    icon: <PlayCircle className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Ad Creative Production",
    description:
      "We craft high-converting video ad creatives for Meta, TikTok, and YouTube — engineered with proven direct-response frameworks that stop the scroll and drive clicks.",
    icon: <Zap className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Captions & Subtitles",
    description:
      "Accurate, on-brand captions added to every video. 85% of social media video is watched without sound — subtitles are non-negotiable for maximum reach and accessibility.",
    icon: <Subtitles className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Motion Graphics & Animation",
    description:
      "Custom animated lower thirds, logo reveals, text animations, and kinetic typography that elevate your brand and make your content look polished and premium.",
    icon: <Sparkles className="w-6 h-6" aria-hidden="true" />,
  },
  {
    title: "Raw Footage Repurposing",
    description:
      "Already have a library of footage? We repurpose your existing raw recordings — podcasts, interviews, events, long-form videos — into a full month of short-form content.",
    icon: <Film className="w-6 h-6" aria-hidden="true" />,
  },
];

const PROCESS_STEPS = [
  {
    title: "Creative Brief & Onboarding",
    description:
      "We start by understanding your brand aesthetic, target platforms, content goals, and reference styles — so every edit is perfectly on-brand from day one.",
  },
  {
    title: "Footage Submission",
    description:
      "You upload your raw footage to our shared workspace. We accept files from any camera system, smartphone, or screen recording — no format restrictions.",
  },
  {
    title: "Edit, Review & Revise",
    description:
      "We deliver your edited videos within the agreed turnaround time. You review, leave timestamped feedback, and we apply revisions until you're 100% satisfied.",
  },
  {
    title: "Final Delivery & Repurposing",
    description:
      "We export in all required formats and aspect ratios (16:9, 9:16, 1:1) for every platform. On Scale and Enterprise plans, we also repurpose long-form into short-form clips.",
  },
];

const BENEFITS = [
  {
    title: "Fast, Reliable Turnarounds",
    description:
      "We operate on guaranteed turnaround times — most edits delivered within 48–72 hours. No more waiting weeks on a freelancer who goes quiet.",
  },
  {
    title: "Consistent Quality at Scale",
    description:
      "Whether you need 4 or 40 videos per month, our production team maintains the same premium quality at any volume — ideal for agencies and content-heavy brands.",
  },
  {
    title: "Built for Conversion",
    description:
      "Every edit is made with one goal in mind: results. Whether it's watch time, shares, or click-throughs on an ad — we edit with your business objectives front and centre.",
  },
];

const FAQS = [
  {
    question: "What file formats do you accept?",
    answer:
      "We accept all major video formats including MP4, MOV, MXF, AVI, and ProRes. Footage can be submitted via Google Drive, Dropbox, WeTransfer, or our shared client workspace.",
  },
  {
    question: "How fast is your turnaround time?",
    answer:
      "Standard short-form edits (under 3 minutes) are delivered within 48 hours. Long-form YouTube videos (10–30 min) are delivered within 5 business days. Rush delivery is available on request.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "All plans include 2 rounds of revisions per video. Additional revision rounds can be added if needed. We find that 95% of our edits are approved within the first or second round.",
  },
  {
    question: "Do you provide raw footage filming as well?",
    answer:
      "Our primary service is editing and post-production. However, on Enterprise plans we can arrange and manage professional videography shoots in Sydney, Melbourne, and Brisbane.",
  },
  {
    question: "Can you repurpose my podcast into short clips?",
    answer:
      "Absolutely — this is one of our most popular services. We take your long-form podcast or interview, identify the most engaging moments, and cut them into platform-optimised short clips with captions.",
  },
];

const PRICING_PLANS = [
  {
    name: "Starter",
    description: "For creators and small brands needing consistent video output.",
    price: "$800",
    period: "/ month",
    isPopular: false,
    features: [
      "Up to 8 Short-Form Edits/Month",
      "Captions & Subtitles Included",
      "2 Revisions Per Video",
      "48hr Turnaround",
      "Export in All Aspect Ratios",
    ],
  },
  {
    name: "Scale",
    description: "For brands and agencies that need premium video at volume.",
    price: "$1,800",
    period: "/ month",
    isPopular: true,
    features: [
      "Up to 20 Short-Form Edits/Month",
      "2 Long-Form YouTube Edits/Month",
      "Custom Motion Graphics & Branding",
      "Long-Form to Short-Form Repurposing",
      "Captions, Thumbnails & Chapter Cards",
      "Priority 24hr Turnaround",
    ],
  },
  {
    name: "Enterprise",
    description: "Unlimited production for agencies and high-volume brands.",
    price: "Custom",
    period: "",
    isPopular: false,
    features: [
      "Unlimited Short-Form Edits",
      "Unlimited Long-Form Production",
      "Dedicated Senior Editor",
      "Custom Animated Intros & Outros",
      "Ad Creative Production",
      "Slack Channel Access",
    ],
  },
];

export default function VideoEditingProductionPage() {
  return (
    <main className="bg-brand-bg min-h-screen flex flex-col">
      <Navbar />

      <ServiceHero
        subtitle="Video Editing & Production"
        title={
          <>
            Content That <br />
            <span className="text-transparent [-webkit-text-stroke:1px_#ffffff] md:[-webkit-text-stroke:1.5px_#ffffff] opacity-80">
              Stops the
            </span>{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_#d8fc4d] md:[-webkit-text-stroke:1.5px_#d8fc4d] drop-shadow-[0_0_15px_rgba(216,252,77,0.3)]">
              Scroll.
            </span>
          </>
        }
        description="From raw footage to polished, platform-ready video — we edit short-form, long-form, and ad creatives that capture attention, build your brand, and drive real business results."
        highlights={[
          "Short-Form Reels & TikToks",
          "Long-Form YouTube Production",
          "Ad Creative Video Editing",
          "Captions, Graphics & Repurposing",
        ]}
      />

      <ServiceFeatures
        subtitle="Our Capabilities"
        title="Video Production That Moves the Needle"
        features={FEATURES}
      />

      <ServiceTestimonial
        quote="We went from posting once a week to publishing 5 pieces of content daily — all repurposed from our podcast. Revenue Room's video team completely transformed our content output and our reach."
        author="Daniel Cho"
        role="Co-Founder"
        company="The Growth Founders Podcast"
      />

      <ServiceBenefits
        subtitle="The Advantage"
        title="Why top brands trust us to edit their video."
        benefits={BENEFITS}
        imageSrc="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Professional video editing production workflow"
      />

      <ServiceProcess
        subtitle="The Blueprint"
        title="How our video production process works."
        steps={PROCESS_STEPS}
      />

      <ServicePricing plans={PRICING_PLANS} serviceId="video-editing" />

      <ServiceFAQ faqs={FAQS} />

      <ServiceCTA
        serviceId="video-editing"
        title="Ready to Scale Your Video Content?"
        description="Let's build a consistent video production pipeline that keeps your brand visible, engaging, and growing."
      />

      <div className="relative z-10 bg-brand-bg flex flex-col pt-16">
        <Footer />
      </div>
    </main>
  );
}

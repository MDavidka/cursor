import type { Metadata } from "next";
import { SectionPricing } from "@/components/sections/pricing";
import { SectionFaq } from "@/components/sections/faq";
import { SectionCta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent hosting plans starting at $3.99/mo. 30-day free trial on all plans.",
};

export default function PricingPage() {
  return (
    <>
      <SectionPricing />
      <SectionFaq />
      <SectionCta />
    </>
  );
}

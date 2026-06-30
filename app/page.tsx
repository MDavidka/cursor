import { SectionHero } from "@/components/sections/hero";
import { SectionLogos } from "@/components/sections/logos";
import { SectionProductsShowcase } from "@/components/sections/products-showcase";
import { SectionFeatures } from "@/components/sections/features";
import { SectionStats } from "@/components/sections/stats";
import { SectionPricing } from "@/components/sections/pricing";
import { SectionTestimonials } from "@/components/sections/testimonials";
import { SectionFaq } from "@/components/sections/faq";
import { SectionCta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <SectionHero />
      <SectionLogos />
      <SectionProductsShowcase />
      <SectionFeatures />
      <SectionStats />
      <SectionPricing />
      <SectionTestimonials />
      <SectionFaq />
      <SectionCta />
    </>
  );
}

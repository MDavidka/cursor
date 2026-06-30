import { SectionHero } from '@/components/sections/hero';
import { SectionFeatures } from '@/components/sections/features';
import { SectionPricing } from '@/components/sections/pricing';
import { SectionCta } from '@/components/sections/cta';
import { SectionTestimonials } from '@/components/sections/testimonials';
import { SectionFaq } from '@/components/sections/faq';
import { SectionLogos } from '@/components/sections/logos';
import { SectionNewsletter } from '@/components/sections/newsletter';
import { SectionStats } from '@/components/sections/stats';

export default function HomePage() {
  return (
    <>
      <SectionHero />
      <SectionLogos />
      <SectionStats />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionPricing />
      <SectionFaq />
      <SectionCta />
      <SectionNewsletter />
    </>
  );
}
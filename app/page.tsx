import { Zap, Shield, Globe, BarChart3, Users, Settings, Check } from 'lucide-react';

import { SectionHero } from '@/components/sections/hero';
import { SectionFeatures } from '@/components/sections/features';
import { SectionPricing } from '@/components/sections/pricing';
import { SectionCta } from '@/components/sections/cta';
import { SectionFooter } from '@/components/sections/footer';
import { SectionNavbar } from '@/components/sections/navbar';
import { SectionTestimonials } from '@/components/sections/testimonials';
import { SectionFaq } from '@/components/sections/faq';
import { SectionLogos } from '@/components/sections/logos';
import { SectionNewsletter } from '@/components/sections/newsletter'; // Assuming you might want a newsletter section

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'CEO, TechSolutions',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Sarah',
    quote:
      'Acme has revolutionized our workflow. The intuitive interface and powerful features have boosted our productivity significantly. Highly recommend!',
  },
  {
    name: 'John Smith',
    title: 'Lead Developer, CodeCrafters',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=John',
    quote:
       'The best tool we\'ve integrated this year. The support is fantastic, and the continuous updates keep us ahead of the curve.',
  },
  {
    name: 'Emily White',
    title: 'Marketing Director, BrandUp',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Emily',
    quote:
       'Our team loves Acme! It\'s streamlined our marketing efforts and provided insights we never had before. A game-changer for sure.',
  },
];

const faqs = [
  {
    question: 'What is Acme?',
    answer: 'Acme is a powerful platform designed to streamline your business operations, enhance productivity, and drive growth.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply sign up for a free account, and you\'ll be guided through our onboarding process. It\'s quick and easy!',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial with full access to all our Pro features. No credit card required.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time directly from your account settings.',
  },
];

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SectionNavbar
        brand="Acme"
        links={[
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Testimonials', href: '#testimonials' },
          { label: 'FAQ', href: '#faq' },
        ]}
        auth={{ signInLabel: 'Sign in', signInHref: '/login', signUpLabel: 'Get started', signUpHref: '/signup' }}
      />
      <main>
        <SectionHero
          badge="Now available"
          title="Build faster with Acme"
          description="The modern platform for teams who want to ship products their customers love."
          primaryCta={{ label: 'Get started', href: '/signup' }}
          secondaryCta={{ label: 'View docs', href: '/docs' }}
        />
        <SectionLogos
          heading="Trusted by teams at"
          logos={[
            '/logo/company-1.svg',
            '/logo/company-2.svg',
            '/logo/company-3.svg',
            '/logo/company-4.svg',
            '/logo/company-5.svg',
          ]}
        />
        <SectionFeatures
          id="features"
          heading="Everything you need"
          subheading="All the tools your team needs to build and ship great products."
          features={[
            { icon: Zap, title: 'Lightning Fast', description: 'Built on cutting-edge infrastructure with sub-millisecond response times.' },
            { icon: Shield, title: 'Enterprise Security', description: 'SOC 2 Type II certified with end-to-end encryption for all data.' },
            { icon: Globe, title: 'Global Edge', description: 'Deployed across 35 regions worldwide for low-latency access.' },
            { icon: BarChart3, title: 'Advanced Analytics', description: 'Real-time dashboards with custom metrics and team reporting.' },
            { icon: Users, title: 'Team Collaboration', description: 'Built-in workflows for PR reviews, comments, and approvals.' },
            { icon: Settings, title: 'Customizable', description: 'Flexible APIs and webhooks to integrate with your existing stack.' },
          ]}
        />
        <SectionTestimonials
          id="testimonials"
          heading="What our customers say"
          subheading="Don't just take our word for it. Hear from our satisfied customers."
          testimonials={testimonials}
        />
        <SectionPricing
          id="pricing"
          heading="Simple, transparent pricing"
          subheading="Choose the plan that fits your team. No hidden fees."
          tiers={[
            { name: 'Starter', price: '$0', period: 'mo', description: 'For individuals and small projects.', features: ['5 projects', '1 GB storage', 'Community support'], cta: { label: 'Start free', href: '/signup' } },
            { name: 'Pro', price: '$29', period: 'mo', description: 'For growing teams.', features: ['Unlimited projects', '50 GB storage', 'Priority support', 'Advanced analytics'], cta: { label: 'Start trial', href: '/signup' }, featured: true },
            { name: 'Enterprise', price: 'Custom', description: 'For large organizations.', features: ['Everything in Pro', 'SSO & SAML', 'Dedicated support', 'Custom SLA'], cta: { label: 'Contact sales', href: '/contact' } },
          ]}
        />
        <SectionFaq
          id="faq"
          heading="Frequently Asked Questions"
          subheading="Find answers to the most common questions about Acme."
          faqs={faqs}
        />
        <SectionCta
          title="Ready to get started?"
          description="Join thousands of teams already building with Acme."
          primaryCta={{ label: 'Start free trial', href: '/signup' }}
          secondaryCta={{ label: 'Talk to sales', href: '/contact' }}
        />
        <SectionNewsletter
          heading="Stay up to date"
          subheading="Subscribe to our newsletter for the latest news and updates."
          cta="Subscribe"
        />
      </main>
      <SectionFooter
        brand="Acme"
        columns={[
          { title: 'Product', links: [{ label: 'Features', href: '#features' }, { label: 'Pricing', href: '#pricing' }] },
          { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }] },
          { title: 'Legal', links: [{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Service', href: '/terms' }] },
        ]}
        copyright={`© ${currentYear} Acme. All rights reserved.`}
      />
    </>
  );
}
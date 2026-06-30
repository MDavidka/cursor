import {
  Server,
  Cloud,
  Shield,
  Zap,
  Globe,
  Headphones,
  Database,
  Cpu,
  HardDrive,
  Gauge,
  Lock,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  slug: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
  badge?: string;
}

export interface Product {
  name: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  startingAt: string;
  specs: { label: string; value: string }[];
  highlights: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "NexHost",
  tagline: "Hosting engineered for speed.",
  description:
    "NexHost delivers enterprise-grade cloud hosting, VPS, and dedicated servers with 99.99% uptime, global CDN, and 24/7 expert support.",
};

export const navLinks: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const features: Feature[] = [
  {
    icon: Zap,
    title: "Lightning-Fast NVMe",
    description:
      "All plans include NVMe SSD storage with read speeds up to 7,000 MB/s — your sites load in milliseconds.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description:
      "Enterprise-grade DDoS mitigation on every plan. Up to 10 Tbps of always-on protection at no extra cost.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description:
      "45+ edge locations worldwide ensure your content is delivered from the nearest node to every visitor.",
  },
  {
    icon: Database,
    title: "Automated Backups",
    description:
      "Daily automated backups with 30-day retention. One-click restore when you need it.",
  },
  {
    icon: Gauge,
    title: "99.99% Uptime SLA",
    description:
      "Redundant power, network, and cooling across all data centers. Backed by our SLA guarantee.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description:
      "Real humans, real expertise. Average response time under 4 minutes via live chat and ticket.",
  },
];

export const products: Product[] = [
  {
    name: "Shared Hosting",
    slug: "shared-hosting",
    icon: Server,
    description: "Perfect for blogs, portfolios, and small business sites.",
    longDescription:
      "Our shared hosting platform is built on LiteSpeed web servers with NVMe storage and integrated Cloudflare CDN. Ideal for WordPress, static sites, and lightweight PHP applications. Includes cPanel, free SSL, and one-click app installs.",
    startingAt: "$3.99",
    specs: [
      { label: "Storage", value: "50 GB NVMe" },
      { label: "Bandwidth", value: "Unmetered" },
      { label: "Websites", value: "Up to 5" },
      { label: "Email Accounts", value: "Unlimited" },
      { label: "Free SSL", value: "Included" },
      { label: "Support", value: "24/7 Chat" },
    ],
    highlights: [
      "LiteSpeed Web Server",
      "cPanel control panel",
      "Free SSL certificates",
      "One-click WordPress install",
      "Cloudflare CDN included",
    ],
  },
  {
    name: "VPS Hosting",
    slug: "vps-hosting",
    icon: Cpu,
    description: "Scalable virtual private servers with dedicated resources.",
    longDescription:
      "Get root access on KVM-based virtual machines with guaranteed CPU cores, RAM, and NVMe storage. Choose from 8 Linux distributions or bring your own ISO. Scale resources on-demand without downtime. Full API access included.",
    startingAt: "$14.99",
    specs: [
      { label: "vCPU", value: "2 – 16 Cores" },
      { label: "RAM", value: "4 – 64 GB" },
      { label: "Storage", value: "80 – 640 GB NVMe" },
      { label: "Bandwidth", value: "4 – 20 TB" },
      { label: "Root Access", value: "Full" },
      { label: "Snapshots", value: "Weekly" },
    ],
    highlights: [
      "KVM virtualization",
      "Root access",
      "On-demand scaling",
      "Full API access",
      "Weekly snapshots",
    ],
  },
  {
    name: "Dedicated Servers",
    slug: "dedicated-servers",
    icon: HardDrive,
    description: "Bare-metal performance for demanding workloads.",
    longDescription:
      "Single-tenant dedicated servers with Intel Xeon or AMD EPYC processors, ECC RAM, and configurable RAID storage. Choose from 12 data center locations. Includes IPMI access, DDoS protection, and 24/7 hardware monitoring.",
    startingAt: "$79.99",
    specs: [
      { label: "CPU", value: "Intel Xeon / AMD EPYC" },
      { label: "RAM", value: "32 – 512 GB ECC" },
      { label: "Storage", value: "2 × 1 TB NVMe + HDD" },
      { label: "Bandwidth", value: "10 – 50 TB" },
      { label: "Network", value: "10 Gbps" },
      { label: "IPMI", value: "Included" },
    ],
    highlights: [
      "Bare-metal performance",
      "IPMI remote access",
      "Configurable RAID",
      "12 data center locations",
      "Hardware SLA",
    ],
  },
  {
    name: "Cloud Hosting",
    slug: "cloud-hosting",
    icon: Cloud,
    description: "Auto-scaling cloud infrastructure for high-traffic applications.",
    longDescription:
      "Deploy on a distributed cloud platform with auto-scaling, load balancing, and multi-region failover. Pay only for what you use with per-second billing. Built on Kubernetes with managed databases, object storage, and serverless functions.",
    startingAt: "$29.99",
    specs: [
      { label: "Scaling", value: "Auto (1–100+ nodes)" },
      { label: "RAM", value: "2 GB / node" },
      { label: "Storage", value: "50 GB SSD / node" },
      { label: "Transfer", value: "2 TB / node" },
      { label: "Database", value: "Managed PostgreSQL" },
      { label: "CDN", value: "Global Edge" },
    ],
    highlights: [
      "Kubernetes-native",
      "Auto-scaling",
      "Multi-region failover",
      "Per-second billing",
      "Managed databases",
    ],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    slug: "shared-hosting",
    price: "$3.99",
    period: "/mo",
    description: "Perfect for getting started online.",
    features: [
      "1 Website",
      "50 GB NVMe Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "1 Email Account",
      "24/7 Chat Support",
    ],
    cta: { label: "Start free trial", href: "/signup?plan=starter" },
  },
  {
    name: "Business",
    slug: "vps-hosting",
    price: "$14.99",
    period: "/mo",
    description: "For growing businesses and agencies.",
    features: [
      "Unlimited Websites",
      "200 GB NVMe Storage",
      "Unmetered Bandwidth",
      "Free SSL & CDN",
      "Unlimited Email",
      "Priority Support",
      "Daily Backups",
      "Staging Environment",
    ],
    cta: { label: "Start free trial", href: "/signup?plan=business" },
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    slug: "dedicated-servers",
    price: "$79.99",
    period: "/mo",
    description: "Dedicated resources for mission-critical workloads.",
    features: [
      "Dedicated Server",
      "1 TB NVMe Storage",
      "50 TB Bandwidth",
      "Advanced DDoS Protection",
      "Dedicated IP Address",
      "24/7 Phone Support",
      "Custom Firewall Rules",
      "99.99% SLA Guarantee",
      "Migration Assistance",
    ],
    cta: { label: "Contact sales", href: "/contact?plan=enterprise" },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We migrated 40+ client sites to NexHost and saw an average 40% improvement in page load times. The support team handled the entire migration for free.",
    author: "Sarah Chen",
    role: "Founder",
    company: "Pixel & Code Agency",
    avatar: "SC",
  },
  {
    quote:
      "Our SaaS platform handles 2M+ requests per day on NexHost Cloud. Auto-scaling saved us during our Product Hunt launch — zero downtime.",
    author: "Marcus Rivera",
    role: "CTO",
    company: "DataPulse",
    avatar: "MR",
  },
  {
    quote:
      "After 3 years and 4 hosting providers, we finally found one that doesn't oversell. Our VPS performs exactly as advertised, every single day.",
    author: "James O'Connor",
    role: "Lead Developer",
    company: "StackForge",
    avatar: "JO",
  },
  {
    quote:
      "Their dedicated servers are a dream for our ML training pipelines. The IPMI access gives us full control. Worth every penny.",
    author: "Dr. Aisha Patel",
    role: "ML Engineering Lead",
    company: "CortexAI",
    avatar: "AP",
  },
];

export const stats: Stat[] = [
  { value: "150K+", label: "Websites Hosted" },
  { value: "45+", label: "Edge Locations" },
  { value: "99.99", label: "Uptime", suffix: "%" },
  { value: "4", label: "Min Avg. Response", prefix: "<" },
];

export const faqItems: FaqItem[] = [
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes. All shared and VPS hosting plans come with a 30-day money-back guarantee. If you're not satisfied for any reason, we'll issue a full refund — no questions asked.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade (or downgrade) your plan at any time from your dashboard. Upgrades take effect immediately with zero downtime. You only pay the prorated difference.",
  },
  {
    question: "Do you handle website migrations?",
    answer:
      "Yes! Our support team offers free assisted migrations for all new customers. We'll move your sites, databases, and emails from your current host with zero downtime.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include 24/7 live chat and ticket support. Business and Enterprise plans include priority phone support. Our average first response time is under 4 minutes.",
  },
  {
    question: "Where are your data centers located?",
    answer:
      "We operate 12 data centers across North America, Europe, Asia-Pacific, and South America. You can choose your preferred location during signup or let us auto-assign the closest one.",
  },
  {
    question: "Do you offer SSL certificates?",
    answer:
      "Every NexHost plan includes free Let's Encrypt SSL certificates with auto-renewal. We also offer premium SSL certificates for purchase if your use case requires extended validation.",
  },
];

export const logoPartners = [
  "Cloudflare",
  "cPanel",
  "LiteSpeed",
  "Intel",
  "AMD",
  "Kubernetes",
];

export const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "Shared Hosting", href: "/products/shared-hosting" },
      { label: "VPS Hosting", href: "/products/vps-hosting" },
      { label: "Dedicated Servers", href: "/products/dedicated-servers" },
      { label: "Cloud Hosting", href: "/products/cloud-hosting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Knowledge Base", href: "#" },
      { label: "Contact", href: "/contact" },
      { label: "System Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "SLA", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  },
];

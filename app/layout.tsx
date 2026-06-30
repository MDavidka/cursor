import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SectionNavbar } from "@/components/sections/navbar";
import { SectionFooter } from "@/components/sections/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "NexHost — Hosting Engineered for Speed",
    template: "%s — NexHost",
  },
  description:
    "NexHost delivers enterprise-grade cloud hosting, VPS, and dedicated servers with 99.99% uptime, global CDN, and 24/7 expert support.",
  openGraph: {
    title: "NexHost — Hosting Engineered for Speed",
    description:
      "Enterprise-grade hosting with NVMe storage, global CDN, and 24/7 support.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexHost — Hosting Engineered for Speed",
    description:
      "Enterprise-grade hosting with NVMe storage, global CDN, and 24/7 support.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <SectionNavbar />
        <main className="flex-1">{children}</main>
        <SectionFooter />
        <Toaster />
      </body>
    </html>
  );
}

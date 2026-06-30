import type { Metadata } from "next";
import { SectionContact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with NexHost — sales, support, billing, or migration help.",
};

export default function ContactPage() {
  return <SectionContact />;
}

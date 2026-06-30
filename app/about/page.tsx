import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Globe, Users, Zap, Shield } from "lucide-react";
import { SectionStats } from "@/components/sections/stats";
import { SectionCta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about NexHost — our mission, team, and infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <Badge variant="secondary">About NexHost</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hosting engineered{" "}
            <span className="text-primary">for performance</span>
          </h1>
          <p className="max-w-3xl text-muted-foreground text-lg leading-relaxed">
            Founded in 2019, NexHost was built on a simple premise: hosting should be fast, reliable, and
            transparent. We operate 12 data centers worldwide with a team of 200+ engineers, support staff,
            and infrastructure specialists dedicated to keeping your sites online.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto mb-20">
          <Card className="border-border/50">
            <CardContent className="pt-8">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h2 className="text-xl font-bold mb-2">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize enterprise-grade hosting. Every website — from a personal blog to a
                high-traffic SaaS — deserves the same reliable infrastructure and expert support.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="pt-8">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h2 className="text-xl font-bold mb-2">Global Infrastructure</h2>
              <p className="text-muted-foreground leading-relaxed">
                12 data centers across 4 continents, connected by a private fiber backbone. Every location
                features redundant power, cooling, and network — backed by our 99.99% uptime SLA.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="pt-8">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h2 className="text-xl font-bold mb-2">Security First</h2>
              <p className="text-muted-foreground leading-relaxed">
                SOC 2 Type II certified with always-on DDoS protection, WAF rules, and automated
                vulnerability scanning. Your data is encrypted at rest and in transit.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="pt-8">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h2 className="text-xl font-bold mb-2">Real Support</h2>
              <p className="text-muted-foreground leading-relaxed">
                No chatbots, no scripts. Our support engineers are real Linux and cloud experts available
                24/7 via live chat, ticket, and phone. Average first response: under 4 minutes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <SectionStats />
      <SectionCta />
    </>
  );
}

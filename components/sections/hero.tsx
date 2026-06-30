import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Server } from "lucide-react";

export function SectionHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-24 text-center">
        <Badge variant="secondary" className="gap-1.5">
          <Zap className="h-3 w-3" />
          99.99% Uptime Guaranteed
        </Badge>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Hosting engineered{" "}
          <span className="text-primary">for speed</span>
        </h1>

        <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
          Deploy on NVMe-powered infrastructure with global CDN, enterprise DDoS protection,
          and 24/7 expert support. From shared hosting to bare-metal dedicated servers.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button size="lg" asChild>
            <Link href="/signup">
              Launch your site
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">View all products</Link>
          </Button>
        </div>

        <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-primary" />
            Free SSL
          </div>
          <div className="flex items-center gap-1.5">
            <Server className="h-4 w-4 text-primary" />
            NVMe Storage
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-primary" />
            30-Day Refund
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(217_91%_60%_/_0.15),transparent)]" />
    </section>
  );
}

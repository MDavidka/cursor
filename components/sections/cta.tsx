import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function SectionCta() {
  return (
    <section className="container mx-auto px-4 py-20">
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to launch your next project?
          </h2>
          <p className="max-w-xl text-muted-foreground text-lg">
            Join 150,000+ websites already running on NexHost. Start your free 30-day trial — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link href="/signup">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Talk to sales</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

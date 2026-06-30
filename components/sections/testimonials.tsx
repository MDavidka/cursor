import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export function SectionTestimonials() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted by teams worldwide
        </h2>
        <p className="max-w-2xl text-muted-foreground text-lg">
          See why thousands of developers and agencies choose NexHost for their hosting needs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => (
          <Card key={t.author} className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="text-xs">{t.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

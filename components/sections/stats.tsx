import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/lib/data";

export function SectionStats() {
  return (
    <section className="border-y bg-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-border/30 bg-transparent">
              <CardContent className="flex flex-col items-center gap-1 py-8 text-center">
                <p className="text-4xl font-bold tracking-tight">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { features } from "@/lib/data";

export function SectionFeatures() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything your site needs
        </h2>
        <p className="max-w-2xl text-muted-foreground text-lg">
          All plans include the essential tools and infrastructure to keep your sites fast, secure, and always online.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="border-border/50">
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

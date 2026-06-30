import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export function SectionProductsShowcase() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Find your perfect hosting
        </h2>
        <p className="max-w-2xl text-muted-foreground text-lg">
          From simple websites to complex cloud infrastructure — we have a solution for every scale.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.slug} className="border-border/50 group">
            <CardHeader>
              <product.icon className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{product.name}</CardTitle>
              <CardDescription className="leading-relaxed">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {product.startingAt}
                <span className="text-sm font-normal text-muted-foreground">/mo</span>
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/products/${product.slug}`}>
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

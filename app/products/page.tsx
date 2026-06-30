import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore NexHost hosting products — Shared, VPS, Dedicated, and Cloud.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <Badge variant="secondary">Our Products</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hosting for every scale
        </h1>
        <p className="max-w-2xl text-muted-foreground text-lg">
          Choose the perfect hosting solution for your project. All plans include free SSL, DDoS protection, and 24/7 support.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        {products.map((product) => (
          <Card key={product.slug} className="border-border/50">
            <CardHeader>
              <product.icon className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-2xl">{product.name}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">
                {product.startingAt}
                <span className="text-sm font-normal text-muted-foreground">/mo</span>
              </p>
              <ul className="space-y-2">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button asChild>
                <Link href={`/products/${product.slug}`}>
                  View details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">Compare plans</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return (
    <div className="container mx-auto px-4 py-20">
      <Button variant="ghost" size="sm" asChild className="mb-8">
        <Link href="/products">
          <ArrowLeft className="mr-2 h-4 w-4" />
          All products
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-start gap-4">
            <product.icon className="h-12 w-12 text-primary mt-1" />
            <div>
              <Badge variant="secondary" className="mb-2">Starting at {product.startingAt}/mo</Badge>
              <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
              <p className="text-lg text-muted-foreground mt-2 leading-relaxed">
                {product.longDescription}
              </p>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Card className="h-fit border-border/50">
          <CardHeader>
            <CardTitle>Technical Specs</CardTitle>
            <CardDescription>What&apos;s included with {product.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {product.specs.map((spec) => (
                <li key={spec.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" asChild>
              <Link href={`/signup?plan=${product.slug}`}>
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/contact">Talk to sales</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

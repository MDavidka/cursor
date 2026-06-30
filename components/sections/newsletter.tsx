"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function SectionNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSent(true);
  }

  return (
    <section className="container mx-auto px-4 py-20">
      <Card className="border-border/50 max-w-xl mx-auto">
        <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
          <Mail className="h-8 w-8 text-primary" />
          <h3 className="text-2xl font-bold tracking-tight">Stay in the loop</h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            Get product updates, hosting tips, and exclusive offers delivered to your inbox.
          </p>
          {sent ? (
            <p className="text-sm text-primary font-medium">
              Thanks! Check your inbox for a confirmation.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}

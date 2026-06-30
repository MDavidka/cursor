import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Server, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your NexHost account. 30-day free trial, no credit card required.",
};

export default function SignupPage() {
  return (
    <div className="container mx-auto flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-md border-border/50">
        <CardHeader className="text-center">
          <Link href="/" className="flex items-center justify-center gap-2 font-bold text-xl mb-2">
            <Server className="h-5 w-5 text-primary" />
            NexHost
          </Link>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            Start your 30-day free trial — no credit card required
          </CardDescription>
          <Badge variant="secondary" className="mx-auto mt-1">
            30-day free trial
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="signupEmail">Email</Label>
            <Input id="signupEmail" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signupPassword">Password</Label>
            <Input id="signupPassword" type="password" placeholder="Min. 8 characters" />
          </div>
          <ul className="space-y-1.5">
            {["Free SSL certificate", "NVMe SSD storage", "24/7 expert support", "30-day money-back guarantee"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                  {item}
                </li>
              )
            )}
          </ul>
          <Button className="w-full">Create account</Button>
        </CardContent>
        <Separator className="mx-6" />
        <CardFooter className="flex justify-center pt-4">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

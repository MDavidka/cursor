"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Server } from "lucide-react";

interface SectionNavbarProps {
  brand: string;
  links: { label: string; href: string; }[];
  auth: {
    signInLabel: string;
    signInHref: string;
    signUpLabel: string;
    signUpHref: string;
  };
}

export function SectionNavbar({ brand, links, auth }: SectionNavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Server className="h-5 w-5 text-primary" />
            {brand}
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Button key={link.href} variant="ghost" size="sm" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href={auth.signInHref}>{auth.signInLabel}</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={auth.signUpHref}>{auth.signUpLabel}</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 pt-12">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Button key={link.href} variant="ghost" className="justify-start" asChild>
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </Button>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t pt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={auth.signInHref} onClick={() => setOpen(false)}>{auth.signInLabel}</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href={auth.signUpHref} onClick={() => setOpen(false)}>{auth.signUpLabel}</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

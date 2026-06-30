import { logoPartners } from "@/lib/data";

export function SectionLogos() {
  return (
    <section className="container mx-auto px-4 py-16">
      <p className="text-center text-sm text-muted-foreground mb-8">
        Trusted by industry leaders
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {logoPartners.map((logo) => (
          <span
            key={logo}
            className="text-lg font-bold text-muted-foreground/40 tracking-tight select-none"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}

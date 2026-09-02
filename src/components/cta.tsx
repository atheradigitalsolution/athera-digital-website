import Link from "next/link";
import { Section } from "@/components/section";
import { company, finalCta } from "@/lib/site";

export function FinalCta() {
  return (
    <Section bordered={false} className="overflow-hidden">
      <div className="ath-reveal relative overflow-hidden rounded-3xl border border-border bg-surface-raised px-6 py-14 text-center sm:px-14">
        <span
          aria-hidden="true"
          className="ath-aurora pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        />
        <h2 className="relative text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {finalCta.title}
        </h2>
        <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {finalCta.description}
        </p>
        <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/kontak"
            className="ath-sheen w-full overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 sm:w-auto"
          >
            Mulai percakapan
          </Link>
          <a
            href={`mailto:${company.email}`}
            className="w-full rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent sm:w-auto"
          >
            {company.email}
          </a>
        </div>
      </div>
    </Section>
  );
}

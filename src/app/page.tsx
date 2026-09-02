import { about, company, contact, hero, processSteps, services } from "@/lib/site";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          {hero.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {hero.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={hero.primaryCta.href}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Layanan"
          title="Empat hal yang kami kerjakan sampai tuntas"
          description="Bukan daftar panjang yang serba bisa. Ini bidang yang benar-benar kami dalami, dan saling terhubung satu sama lain."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-2xl border border-border bg-surface-raised p-8 transition-colors hover:border-accent/40"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.summary}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="pendekatan" className="scroll-mt-20 border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Pendekatan"
          title="Bertahap, dan setiap tahap ada hasilnya"
          description="Proyek sistem gagal bukan karena teknologinya kurang canggih, tapi karena terlalu lama sebelum ada yang bisa dipakai."
        />

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span className="font-mono text-sm font-medium text-accent">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Tentang kami
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {about.title}
            </h2>
            <div className="mt-6 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <ul className="space-y-6">
            {about.highlights.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-surface-raised p-6"
              >
                <h3 className="text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontak" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-border bg-surface p-10 sm:p-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {contact.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${company.email}`}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Kirim email ke {company.email}
            </a>
            {company.phone ? (
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-raised"
              >
                {company.phone}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <About />
      <Contact />
    </>
  );
}

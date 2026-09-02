import { company, nav } from "@/lib/site";
import { Wordmark } from "@/components/wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {company.tagline}. Konsultan dan pengembang sistem bisnis untuk
              perusahaan yang serius merapikan operasionalnya.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Navigasi
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Kontak
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {company.email}
                  </a>
                </li>
                {company.phone ? (
                  <li className="text-muted">{company.phone}</li>
                ) : null}
                {company.address ? (
                  <li className="max-w-xs text-muted">{company.address}</li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted">
          &copy; {year} {company.name}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}

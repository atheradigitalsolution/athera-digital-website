/**
 * Rangkaian langkah mendatar dengan berkas cahaya yang berjalan di relnya.
 * Di layar sempit rel berubah menjadi garis vertikal, sehingga urutannya tetap
 * terbaca tanpa menggulir ke samping.
 */
export function Pipeline({
  steps,
}: {
  steps: { label: string; caption: string }[];
}) {
  return (
    <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
      {/* Rel: horizontal di layar lebar, vertikal di layar sempit */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-4 bottom-4 w-px overflow-hidden bg-gradient-to-b from-transparent via-border-strong to-transparent lg:inset-x-0 lg:left-0 lg:top-[1.65rem] lg:bottom-auto lg:h-px lg:w-full lg:bg-gradient-to-r"
      >
        <span className="ath-beam absolute inset-0 block bg-gradient-to-b from-transparent via-accent to-transparent lg:bg-gradient-to-r" />
      </span>

      {steps.map((step, i) => (
        <li
          key={step.label}
          className="ath-reveal relative"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <div className="flex items-start gap-3 lg:block">
            <span className="relative z-10 mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl border border-border-strong bg-surface-raised font-mono text-xs text-accent lg:mt-0">
              {String(i + 1).padStart(2, "0")}
              <span
                aria-hidden="true"
                className="ath-pulse absolute inset-0 rounded-xl ring-1 ring-accent/40"
                style={{ animationDelay: `${i * -0.5}s` }}
              />
            </span>
            <div className="lg:mt-4">
              <p className="text-sm font-medium tracking-tight">{step.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{step.caption}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

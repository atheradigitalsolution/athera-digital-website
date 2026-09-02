/**
 * Deret nama teknologi yang berjalan mendatar. Murni CSS: satu salinan
 * ditandai aria-hidden supaya pembaca layar tidak membacanya dua kali.
 */
export function Marquee({ items }: { items: string[] }) {
  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="ath-marquee flex w-max gap-3">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 gap-3"
          >
            {items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface-raised px-4 py-2 font-mono text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

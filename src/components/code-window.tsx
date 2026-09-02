import type { ReactNode } from "react";

export type CodeLine = {
  text: string;
  tone?: "muted" | "accent" | "ok" | "warn";
};

const toneClass: Record<NonNullable<CodeLine["tone"]>, string> = {
  muted: "text-muted",
  accent: "text-accent",
  ok: "text-[var(--ok)]",
  warn: "text-[var(--warn)]",
};

/**
 * Jendela kode/terminal dekoratif. Isinya nyata (contoh respons dan perintah),
 * tetapi tidak membawa informasi yang hanya ada di sini — jadi aman dilewati
 * pembaca layar lewat ringkasan `caption`.
 */
export function CodeWindow({
  title,
  lines,
  caret = true,
  footer,
  className = "",
}: {
  title: string;
  lines: CodeLine[];
  caret?: boolean;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-border bg-[#06090d] shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
        </span>
        <figcaption className="ml-1 font-mono text-xs text-muted">{title}</figcaption>
      </div>

      <pre className="overflow-x-auto px-4 py-4 font-mono text-[0.78rem] leading-6 sm:text-xs">
        <code>
          {lines.map((line, i) => (
            <span key={i} className={`block ${line.tone ? toneClass[line.tone] : ""}`}>
              {line.text || " "}
              {caret && i === lines.length - 1 ? (
                <span aria-hidden="true" className="ath-caret ml-1 inline-block h-3.5 w-[0.5ch] translate-y-[2px] bg-accent" />
              ) : null}
            </span>
          ))}
        </code>
      </pre>

      {footer ? (
        <div className="border-t border-border px-4 py-3 text-xs text-muted">{footer}</div>
      ) : null}
    </figure>
  );
}

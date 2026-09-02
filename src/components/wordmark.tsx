import { company } from "@/lib/site";

/**
 * Logo: segi enam bergaris ganda dengan simpul yang berdenyut pelan.
 * Denyutnya dimatikan otomatis pada `prefers-reduced-motion`.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        fill="none"
      >
        <defs>
          <linearGradient id="ath-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-3)" />
          </linearGradient>
        </defs>
        <path
          d="M16 2.6 27.6 9.3v13.4L16 29.4 4.4 22.7V9.3z"
          stroke="url(#ath-mark)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M16 8.4 21.8 22h-2.6l-1.2-3h-4l-1.2 3h-2.6z"
          fill="url(#ath-mark)"
        />
        <circle className="ath-pulse" cx="16" cy="2.6" r="1.8" fill="var(--accent)" />
      </svg>
      <span className="text-base font-semibold tracking-tight">
        {company.shortName}
      </span>
    </span>
  );
}

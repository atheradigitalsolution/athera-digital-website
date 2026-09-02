import { company } from "@/lib/site";

/**
 * Logo teks sementara. Ganti dengan berkas SVG logo asli bila sudah tersedia.
 */
export function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-lg bg-accent text-sm font-bold text-accent-contrast"
      >
        A
      </span>
      <span className="text-base font-semibold tracking-tight">
        {company.shortName}
      </span>
    </span>
  );
}

/**
 * Lapisan latar dekoratif: kisi yang bergeser pelan, dua noda cahaya, dan satu
 * garis pindai. Sepenuhnya di luar alur baca (aria-hidden, pointer-events-none)
 * dan seluruh gerakannya berhenti pada prefers-reduced-motion.
 */
export function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="ath-grid absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(75%_60%_at_50%_0%,#000_20%,transparent_100%)]" />
      <div className="ath-aurora absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/12 blur-[110px]" />
      <div
        className="ath-aurora absolute -right-32 top-24 h-[26rem] w-[26rem] rounded-full bg-accent-3/12 blur-[110px]"
        style={{ animationDelay: "-8s" }}
      />
      <div className="ath-scan absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent" />
    </div>
  );
}

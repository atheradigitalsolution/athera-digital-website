"use client";

import { useEffect, useRef } from "react";

function format(value: number, decimals: number) {
  return value.toLocaleString("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Angka yang menghitung naik saat masuk layar.
 *
 * Render pertama (di server dan tanpa JavaScript) sudah memuat nilai akhirnya,
 * sehingga halaman tetap terbaca kalau skrip gagal dimuat. Animasi menulis
 * langsung ke DOM lewat ref — bukan lewat state — supaya tidak memicu render
 * berantai, dan selalu berakhir pada nilai yang sama dengan hasil render React.
 */
export function CountUp({
  value,
  decimals = 0,
  suffix = "",
  duration = 1200,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const final = `${format(value, decimals)}${suffix}`;
    let frame = 0;
    let start = 0;

    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo: cepat di awal, melambat mendekati angka akhirnya.
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      node.textContent =
        t === 1 ? final : `${format(value * eased, decimals)}${suffix}`;
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    node.textContent = `${format(0, decimals)}${suffix}`;
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      node.textContent = final;
    };
  }, [value, decimals, suffix, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(value, decimals)}
      {suffix}
    </span>
  );
}

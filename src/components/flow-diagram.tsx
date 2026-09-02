/**
 * Diagram alir data di hero.
 *
 * Seluruhnya SVG statis yang digerakkan CSS — tanpa JavaScript, tanpa
 * pustaka animasi, dan ikut berhenti pada prefers-reduced-motion. Bentuknya
 * bukan hiasan acak: kiri adalah sumber data, tengah adalah platform, kanan
 * adalah yang dilihat pengguna. Itu persis urutan yang dijelaskan halaman
 * produk.
 */

const sources = [
  { label: "Odoo ERP", y: 90 },
  { label: "Aplikasi lini bisnis", y: 210 },
  { label: "Sumber lain", y: 330 },
];

const outputs = [
  { label: "Dasbor Insight", y: 90 },
  { label: "ATHERA Agent", y: 210 },
  { label: "Laporan terjadwal", y: 330 },
];

const inPath = (y: number) => `M132,${y} C214,${y} 224,210 296,210`;
const outPath = (y: number) => `M424,210 C496,210 506,${y} 588,${y}`;

const hexagon = [
  [424, 210],
  [392, 265],
  [328, 265],
  [296, 210],
  [328, 155],
  [392, 155],
]
  .map(([x, y]) => `${x},${y}`)
  .join(" ");

export function FlowDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 420"
      role="img"
      aria-label="Diagram alur: data dari Odoo ERP, aplikasi lini bisnis, dan sumber lain mengalir ke platform ATHERA, lalu keluar sebagai dasbor Insight, ATHERA Agent, dan laporan terjadwal."
      className={`h-auto w-full ${className}`}
    >
      <defs>
        <linearGradient id="ath-edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-2)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--accent-3)" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="ath-core" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent-3)" stopOpacity="0.12" />
        </linearGradient>
        <filter id="ath-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Garis penghubung */}
      <g fill="none" strokeWidth="1.5" stroke="url(#ath-edge)">
        {sources.map((node, i) => (
          <g key={`in-${node.label}`}>
            <path d={inPath(node.y)} opacity="0.5" />
            <path
              d={inPath(node.y)}
              className="ath-flow"
              stroke="var(--accent)"
              opacity="0.9"
              style={{ animationDelay: `${i * -1.6}s` }}
            />
          </g>
        ))}
        {outputs.map((node, i) => (
          <g key={`out-${node.label}`}>
            <path d={outPath(node.y)} opacity="0.5" />
            <path
              d={outPath(node.y)}
              className="ath-flow"
              stroke="var(--accent-2)"
              opacity="0.9"
              style={{ animationDelay: `${i * -1.1 - 0.4}s` }}
            />
          </g>
        ))}
      </g>

      {/* Paket data yang berjalan di sepanjang garis */}
      <g>
        {sources.map((node, i) => (
          <circle
            key={`p-in-${node.label}`}
            r="3.5"
            fill="var(--accent)"
            className="ath-packet"
            filter="url(#ath-glow)"
            style={{
              offsetPath: `path("${inPath(node.y)}")`,
              animationDelay: `${i * 1.1}s`,
            }}
          />
        ))}
        {outputs.map((node, i) => (
          <circle
            key={`p-out-${node.label}`}
            r="3.5"
            fill="var(--accent-2)"
            className="ath-packet"
            filter="url(#ath-glow)"
            style={{
              offsetPath: `path("${outPath(node.y)}")`,
              animationDelay: `${i * 1.1 + 2.1}s`,
            }}
          />
        ))}
      </g>

      {/* Inti platform */}
      <g>
        <circle
          cx="360"
          cy="210"
          r="94"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.28"
          strokeDasharray="3 9"
          className="ath-spin"
        />
        <circle cx="360" cy="210" r="72" fill="var(--accent)" opacity="0.07" />
        <polygon
          points={hexagon}
          fill="url(#ath-core)"
          stroke="var(--accent)"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
        <text
          x="360"
          y="205"
          textAnchor="middle"
          className="fill-foreground font-sans"
          fontSize="17"
          fontWeight="600"
          letterSpacing="0.12em"
        >
          ATHERA
        </text>
        <text
          x="360"
          y="226"
          textAnchor="middle"
          className="fill-muted font-mono"
          fontSize="10.5"
          letterSpacing="0.08em"
        >
          platform
        </text>
      </g>

      {/* Simpul kiri dan kanan */}
      {[
        ...sources.map((node) => ({ ...node, x: 12, anchor: "start" as const })),
        ...outputs.map((node) => ({ ...node, x: 588, anchor: "start" as const })),
      ].map((node) => (
        <g key={`${node.label}-${node.x}`}>
          <rect
            x={node.x}
            y={node.y - 21}
            width="120"
            height="42"
            rx="11"
            fill="var(--surface-raised)"
            stroke="var(--border-strong)"
          />
          <circle
            cx={node.x + 16}
            cy={node.y}
            r="4"
            fill="var(--accent)"
            className="ath-pulse"
            style={{ animationDelay: `${(node.y % 7) * -0.4}s` }}
          />
          <text
            x={node.x + 28}
            y={node.y + 4}
            className="fill-muted font-sans"
            fontSize="12"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

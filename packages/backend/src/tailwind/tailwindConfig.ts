const layoutSize = {
  // '0: 0',
  1: "px",
  2: "0.5",
  4: "1",
  6: "1.5",
  8: "2",
  10: "2.5",
  12: "3",
  14: "3.5",
  16: "4",
  20: "5",
  24: "6",
  28: "7",
  32: "8",
  36: "9",
  40: "10",
  44: "11",
  48: "12",
  56: "14",
  64: "16",
  80: "20",
  96: "24",
  112: "28",
  128: "32",
  144: "36",
  160: "40",
  176: "44",
  192: "48",
  208: "52",
  224: "56",
  240: "60",
  256: "64",
  288: "72",
  320: "80",
  384: "96"
};

const borderRadius = {
  // 0: "none",
  0.125: "sm",
  0.25: "",
  0.375: "md",
  0.5: "lg",
  0.75: "xl",
  1.0: "2xl",
  1.5: "3xl",
  10: "full"
};

const fontSize = {
  0.75: "xs",
  0.875: "sm",
  1: "base",
  1.125: "lg",
  1.25: "xl",
  1.5: "2xl",
  1.875: "3xl",
  2.25: "4xl",
  3: "5xl",
  3.75: "6xl",
  4.5: "7xl",
  6: "8xl",
  8: "9xl"
};

const lineHeight = {
  0.75: "3",
  1: "none",
  1.25: "tight",
  1.375: "snug",
  1.5: "normal",
  1.625: "relaxed",
  2: "loose",
  1.75: "7",
  2.25: "9",
  2.5: "10"
};

const letterSpacing = {
  "-0.05": "tighter",
  "-0.025": "tight",
  // 0: "normal",
  0.025: "wide",
  0.05: "wider",
  0.1: "widest"
};

// This uses pixels.
const blur = {
  0: "none",
  4: "sm",
  8: "",
  12: "md",
  16: "lg",
  24: "xl",
  40: "2xl",
  64: "3xl"
};

const opacity = [
  0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95,
];

// AutoGenerated for Tailwind 2 via [convert_tailwind_colors.js]
const color: Record<string, string> = {
  "#000000": "black",
  "#ffffff": "white",
  "#f8fafc": "slate-50",
  "#f1f5f9": "slate-100",
  "#e2e8f0": "slate-200",
  "#cbd5e1": "slate-300",
  "#94a3b8": "slate-400",
  "#64748b": "slate-500",
  "#475569": "slate-600",
  "#334155": "slate-700",
  "#1e293b": "slate-800",
  "#0f172a": "slate-900",
  "#020617": "slate-950",
  "#f9fafb": "gray-50",
  "#f3f4f6": "gray-100",
  "#e5e7eb": "gray-200",
  "#d1d5db": "gray-300",
  "#9ca3af": "gray-400",
  "#6b7280": "gray-500",
  "#4b5563": "gray-600",
  "#374151": "gray-700",
  "#1f2937": "gray-800",
  "#111827": "gray-900",
  "#030712": "gray-950",
  "#f4f4f5": "zinc-100",
  "#e4e4e7": "zinc-200",
  "#d4d4d8": "zinc-300",
  "#a1a1aa": "zinc-400",
  "#71717a": "zinc-500",
  "#52525b": "zinc-600",
  "#3f3f46": "zinc-700",
  "#27272a": "zinc-800",
  "#18181b": "zinc-900",
  "#09090b": "zinc-950",
  "#fafafa": "neutral-50",
  "#f5f5f5": "neutral-100",
  "#e5e5e5": "neutral-200",
  "#d4d4d4": "neutral-300",
  "#a3a3a3": "neutral-400",
  "#737373": "neutral-500",
  "#525252": "neutral-600",
  "#404040": "neutral-700",
  "#262626": "neutral-800",
  "#171717": "neutral-900",
  "#0a0a0a": "neutral-950",
  "#fafaf9": "stone-50",
  "#f5f5f4": "stone-100",
  "#e7e5e4": "stone-200",
  "#d6d3d1": "stone-300",
  "#a8a29e": "stone-400",
  "#78716c": "stone-500",
  "#57534e": "stone-600",
  "#44403c": "stone-700",
  "#292524": "stone-800",
  "#1c1917": "stone-900",
  "#0c0a09": "stone-950",
  "#fef2f2": "red-50",
  "#fee2e2": "red-100",
  "#fecaca": "red-200",
  "#fca5a5": "red-300",
  "#f87171": "red-400",
  "#ef4444": "red-500",
  "#dc2626": "red-600",
  "#b91c1c": "red-700",
  "#991b1b": "red-800",
  "#7f1d1d": "red-900",
  "#450a0a": "red-950",
  "#fff7ed": "orange-50",
  "#ffedd5": "orange-100",
  "#fed7aa": "orange-200",
  "#fdba74": "orange-300",
  "#fb923c": "orange-400",
  "#f97316": "orange-500",
  "#ea580c": "orange-600",
  "#c2410c": "orange-700",
  "#9a3412": "orange-800",
  "#7c2d12": "orange-900",
  "#431407": "orange-950",
  "#fffbeb": "amber-50",
  "#fef3c7": "amber-100",
  "#fde68a": "amber-200",
  "#fcd34d": "amber-300",
  "#fbbf24": "amber-400",
  "#f59e0b": "amber-500",
  "#d97706": "amber-600",
  "#b45309": "amber-700",
  "#92400e": "amber-800",
  "#78350f": "amber-900",
  "#451a03": "amber-950",
  "#fefce8": "yellow-50",
  "#fef9c3": "yellow-100",
  "#fef08a": "yellow-200",
  "#fde047": "yellow-300",
  "#facc15": "yellow-400",
  "#eab308": "yellow-500",
  "#ca8a04": "yellow-600",
  "#a16207": "yellow-700",
  "#854d0e": "yellow-800",
  "#713f12": "yellow-900",
  "#422006": "yellow-950",
  "#f7fee7": "lime-50",
  "#ecfccb": "lime-100",
  "#d9f99d": "lime-200",
  "#bef264": "lime-300",
  "#a3e635": "lime-400",
  "#84cc16": "lime-500",
  "#65a30d": "lime-600",
  "#4d7c0f": "lime-700",
  "#3f6212": "lime-800",
  "#365314": "lime-900",
  "#1a2e05": "lime-950",
  "#f0fdf4": "green-50",
  "#dcfce7": "green-100",
  "#bbf7d0": "green-200",
  "#86efac": "green-300",
  "#4ade80": "green-400",
  "#22c55e": "green-500",
  "#16a34a": "green-600",
  "#15803d": "green-700",
  "#166534": "green-800",
  "#14532d": "green-900",
  "#052e16": "green-950",
  "#ecfdf5": "emerald-50",
  "#d1fae5": "emerald-100",
  "#a7f3d0": "emerald-200",
  "#6ee7b7": "emerald-300",
  "#34d399": "emerald-400",
  "#10b981": "emerald-500",
  "#059669": "emerald-600",
  "#047857": "emerald-700",
  "#065f46": "emerald-800",
  "#064e3b": "emerald-900",
  "#022c22": "emerald-950",
  "#f0fdfa": "teal-50",
  "#ccfbf1": "teal-100",
  "#99f6e4": "teal-200",
  "#5eead4": "teal-300",
  "#2dd4bf": "teal-400",
  "#14b8a6": "teal-500",
  "#0d9488": "teal-600",
  "#0f766e": "teal-700",
  "#115e59": "teal-800",
  "#134e4a": "teal-900",
  "#042f2e": "teal-950",
  "#ecfeff": "cyan-50",
  "#cffafe": "cyan-100",
  "#a5f3fc": "cyan-200",
  "#67e8f9": "cyan-300",
  "#22d3ee": "cyan-400",
  "#06b6d4": "cyan-500",
  "#0891b2": "cyan-600",
  "#0e7490": "cyan-700",
  "#155e75": "cyan-800",
  "#164e63": "cyan-900",
  "#083344": "cyan-950",
  "#f0f9ff": "sky-50",
  "#e0f2fe": "sky-100",
  "#bae6fd": "sky-200",
  "#7dd3fc": "sky-300",
  "#38bdf8": "sky-400",
  "#0ea5e9": "sky-500",
  "#0284c7": "sky-600",
  "#0369a1": "sky-700",
  "#075985": "sky-800",
  "#0c4a6e": "sky-900",
  "#082f49": "sky-950",
  "#eff6ff": "blue-50",
  "#dbeafe": "blue-100",
  "#bfdbfe": "blue-200",
  "#93c5fd": "blue-300",
  "#60a5fa": "blue-400",
  "#3b82f6": "blue-500",
  "#2563eb": "blue-600",
  "#1d4ed8": "blue-700",
  "#1e40af": "blue-800",
  "#1e3a8a": "blue-900",
  "#172554": "blue-950",
  "#eef2ff": "indigo-50",
  "#e0e7ff": "indigo-100",
  "#c7d2fe": "indigo-200",
  "#a5b4fc": "indigo-300",
  "#818cf8": "indigo-400",
  "#6366f1": "indigo-500",
  "#4f46e5": "indigo-600",
  "#4338ca": "indigo-700",
  "#3730a3": "indigo-800",
  "#312e81": "indigo-900",
  "#1e1b4b": "indigo-950",
  "#f5f3ff": "violet-50",
  "#ede9fe": "violet-100",
  "#ddd6fe": "violet-200",
  "#c4b5fd": "violet-300",
  "#a78bfa": "violet-400",
  "#8b5cf6": "violet-500",
  "#7c3aed": "violet-600",
  "#6d28d9": "violet-700",
  "#5b21b6": "violet-800",
  "#4c1d95": "violet-900",
  "#2e1065": "violet-950",
  "#faf5ff": "purple-50",
  "#f3e8ff": "purple-100",
  "#e9d5ff": "purple-200",
  "#d8b4fe": "purple-300",
  "#c084fc": "purple-400",
  "#a855f7": "purple-500",
  "#9333ea": "purple-600",
  "#7e22ce": "purple-700",
  "#6b21a8": "purple-800",
  "#581c87": "purple-900",
  "#3b0764": "purple-950",
  "#fdf4ff": "fuchsia-50",
  "#fae8ff": "fuchsia-100",
  "#f5d0fe": "fuchsia-200",
  "#f0abfc": "fuchsia-300",
  "#e879f9": "fuchsia-400",
  "#d946ef": "fuchsia-500",
  "#c026d3": "fuchsia-600",
  "#a21caf": "fuchsia-700",
  "#86198f": "fuchsia-800",
  "#701a75": "fuchsia-900",
  "#4a044e": "fuchsia-950",
  "#fdf2f8": "pink-50",
  "#fce7f3": "pink-100",
  "#fbcfe8": "pink-200",
  "#f9a8d4": "pink-300",
  "#f472b6": "pink-400",
  "#ec4899": "pink-500",
  "#db2777": "pink-600",
  "#be185d": "pink-700",
  "#9d174d": "pink-800",
  "#831843": "pink-900",
  "#500724": "pink-950",
  "#fff1f2": "rose-50",
  "#ffe4e6": "rose-100",
  "#fecdd3": "rose-200",
  "#fda4af": "rose-300",
  "#fb7185": "rose-400",
  "#f43f5e": "rose-500",
  "#e11d48": "rose-600",
  "#be123c": "rose-700",
  "#9f1239": "rose-800",
  "#881337": "rose-900",
  "#4c0519": "rose-950"
};

export const config = {
  layoutSize,
  borderRadius,
  fontSize,
  lineHeight,
  letterSpacing,
  blur,
  opacity,
  color,
};

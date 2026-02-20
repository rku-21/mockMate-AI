export const themes = {
  nexus: {
    name: "Nexus",
    description: "Dark violet & pink — the default",
    preview: ["#7c6ef5", "#f06292", "#0a0a0f"],
    vars: {
      "--bg":           "#0a0a0f",
      "--card":         "#111118",
      "--border":       "rgba(255,255,255,0.07)",
      "--accent":       "#7c6ef5",
      "--accent2":      "#f06292",
      "--accent-hover": "#9c89ff",
      "--text":         "#f0f0f8",
      "--muted":        "#7070a0",
      "--input-bg":     "rgba(255,255,255,0.04)",
      "--glow":         "rgba(124,110,245,0.2)",
      "--btn-text":     "#ffffff",
    },
  },

  midnight: {
    name: "Midnight",
    description: "Deep blue & cyan — ocean depths",
    preview: ["#3b82f6", "#06b6d4", "#050a18"],
    vars: {
      "--bg":           "#050a18",
      "--card":         "#0a1128",
      "--border":       "rgba(59,130,246,0.15)",
      "--accent":       "#3b82f6",
      "--accent2":      "#06b6d4",
      "--accent-hover": "#60a5fa",
      "--text":         "#e0f0ff",
      "--muted":        "#5580aa",
      "--input-bg":     "rgba(59,130,246,0.06)",
      "--glow":         "rgba(59,130,246,0.18)",
      "--btn-text":     "#ffffff",
    },
  },

  forest: {
    name: "Forest",
    description: "Emerald & lime — lush and alive",
    preview: ["#10b981", "#84cc16", "#030f0a"],
    vars: {
      "--bg":           "#030f0a",
      "--card":         "#061a0e",
      "--border":       "rgba(16,185,129,0.15)",
      "--accent":       "#10b981",
      "--accent2":      "#84cc16",
      "--accent-hover": "#34d399",
      "--text":         "#d1fae5",
      "--muted":        "#4a7a60",
      "--input-bg":     "rgba(16,185,129,0.06)",
      "--glow":         "rgba(16,185,129,0.18)",
      "--btn-text":     "#ffffff",
    },
  },

  inferno: {
    name: "Inferno",
    description: "Crimson & amber — blazing hot",
    preview: ["#ef4444", "#f59e0b", "#0f0500"],
    vars: {
      "--bg":           "#0f0500",
      "--card":         "#1a0a00",
      "--border":       "rgba(239,68,68,0.15)",
      "--accent":       "#ef4444",
      "--accent2":      "#f59e0b",
      "--accent-hover": "#f87171",
      "--text":         "#fff0e0",
      "--muted":        "#8a5a40",
      "--input-bg":     "rgba(239,68,68,0.06)",
      "--glow":         "rgba(239,68,68,0.18)",
      "--btn-text":     "#ffffff",
    },
  },

  aurora: {
    name: "Aurora",
    description: "Teal & purple — northern lights",
    preview: ["#8b5cf6", "#2dd4bf", "#04080f"],
    vars: {
      "--bg":           "#04080f",
      "--card":         "#080f1e",
      "--border":       "rgba(139,92,246,0.15)",
      "--accent":       "#8b5cf6",
      "--accent2":      "#2dd4bf",
      "--accent-hover": "#a78bfa",
      "--text":         "#f0f0ff",
      "--muted":        "#6060a0",
      "--input-bg":     "rgba(139,92,246,0.06)",
      "--glow":         "rgba(139,92,246,0.2)",
      "--btn-text":     "#ffffff",
    },
  },

  rose: {
    name: "Rose Gold",
    description: "Pink & gold — elegant luxury",
    preview: ["#fb7185", "#fbbf24", "#0f0508"],
    vars: {
      "--bg":           "#0f0508",
      "--card":         "#1a0a10",
      "--border":       "rgba(251,113,133,0.15)",
      "--accent":       "#fb7185",
      "--accent2":      "#fbbf24",
      "--accent-hover": "#fda4af",
      "--text":         "#fff0f4",
      "--muted":        "#8a5060",
      "--input-bg":     "rgba(251,113,133,0.06)",
      "--glow":         "rgba(251,113,133,0.18)",
      "--btn-text":     "#ffffff",
    },
  },

  slate: {
    name: "Slate",
    description: "Monochrome & sharp — minimal",
    preview: ["#94a3b8", "#cbd5e1", "#09090b"],
    vars: {
      "--bg":           "#09090b",
      "--card":         "#0f0f12",
      "--border":       "rgba(148,163,184,0.12)",
      "--accent":       "#94a3b8",
      "--accent2":      "#cbd5e1",
      "--accent-hover": "#cbd5e1",
      "--text":         "#f8fafc",
      "--muted":        "#64748b",
      "--input-bg":     "rgba(148,163,184,0.05)",
      "--glow":         "rgba(148,163,184,0.1)",
      "--btn-text":     "#09090b",
    },
  },

  cyberpunk: {
    name: "Cyberpunk",
    description: "Yellow & magenta — neon streets",
    preview: ["#facc15", "#e879f9", "#05000a"],
    vars: {
      "--bg":           "#05000a",
      "--card":         "#0d0015",
      "--border":       "rgba(250,204,21,0.2)",
      "--accent":       "#facc15",
      "--accent2":      "#e879f9",
      "--accent-hover": "#fde047",
      "--text":         "#fffde0",
      "--muted":        "#806040",
      "--input-bg":     "rgba(250,204,21,0.06)",
      "--glow":         "rgba(250,204,21,0.2)",
      "--btn-text":     "#05000a",
    },
  },
};


import { create } from "zustand";
import {persist} from "zustand/middleware";

export const useThemeStore=create(
    persist(
        (set)=>({
            activeTheme:"nexus",
            setTheme:(themekey)=> set({activeTheme:themekey})
        }),
        {name:"mockmate-theme"}

    )
);
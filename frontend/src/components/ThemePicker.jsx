import { useState } from "react";
import {themes,useThemeStore} from "../store/usethemeStore.js"

export const ThemePicker=()=>{
    const {activeTheme, setTheme}=useThemeStore();
    const [open,setOpen]=useState(false);

    return (
    <>
  
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          color: "var(--text)",
          boxShadow: "0 4px 20px var(--glow)",
          fontFamily: "'Syne', sans-serif",
        }}
      >
        <span>🎨</span>
        Theme
     
        <span
          className="w-3 h-3 rounded-full"
          style={{ background: themes[activeTheme].vars["--accent"] }}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-[560px] rounded-3xl p-8 border relative"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 60px var(--glow)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
          
            <div
              className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
              style={{
                background: "linear-gradient(90deg, transparent, var(--accent), var(--accent2), transparent)",
              }}
            />

          
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2
                  className="text-2xl font-extrabold tracking-tight"
                  style={{ color: "var(--text)", fontFamily: "'Syne', sans-serif" }}
                >
                  Choose Theme
                </h2>
                <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                  Pick a vibe for your workspace
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-colors"
                style={{
                  background: "var(--input-bg)",
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                }}
              >
                ×
              </button>
            </div>

         
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(themes).map(([key, theme]) => {
                const isActive = activeTheme === key;
                return (
                  <button
                    key={key}
                    onClick={() => { setTheme(key); setOpen(false); }}
                    className="relative text-left rounded-2xl p-4 border transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: isActive ? `${theme.vars["--accent"]}18` : theme.vars["--card"],
                      border: isActive
                        ? `1.5px solid ${theme.vars["--accent"]}`
                        : `1px solid ${theme.vars["--border"]}`,
                      boxShadow: isActive ? `0 0 20px ${theme.vars["--glow"]}` : "none",
                    }}
                  >
                
                    {isActive && (
                      <span
                        className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: theme.vars["--accent"],
                          color: theme.vars["--btn-text"],
                          fontFamily: "'Syne', sans-serif",
                        }}
                      >
                        ACTIVE
                      </span>
                    )}

              
                    <div className="flex gap-1.5 mb-3">
                      {theme.preview.map((color, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-lg"
                          style={{ background: color }}
                        />
                      ))}
                    </div>

                  
                    <p
                      className="font-bold text-sm mb-0.5"
                      style={{ color: "var(--text)", fontFamily: "'Syne', sans-serif" }}
                    >
                      {theme.name}
                    </p>
                    <p className="text-[12px] leading-snug" style={{ color: "var(--muted)" }}>
                      {theme.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
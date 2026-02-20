import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoginingup } = useAuthStore();

  const validForm = () => {
    if (!formData.email.trim()) { toast.error("Email or Username required"); return false; }
    if (!formData.password) { toast.error("Password required"); return false; }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validForm()) login(formData);
  };

  const inputClass = "w-full rounded-xl pl-11 py-[14px] text-[15px] outline-none transition-all duration-200";

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen flex items-center justify-center px-4 py-10 relative overflow-x-hidden"
        style={{ background: "var(--bg)" }}
      >
    
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

       
        <div
          className="w-full max-w-[520px] rounded-3xl p-10 relative overflow-hidden z-10"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.5), 0 0 60px var(--glow)",
          }}
        >
         
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, var(--accent), var(--accent2), transparent)",
            }}
          />

        
          <div className="flex items-center gap-3 mb-9">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-lg"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))", color: "var(--btn-text)" }}
            >
              M
            </div>
            <span
              className="text-xl font-extrabold tracking-tight"
              style={{ color: "var(--text)", fontFamily: "'Syne', sans-serif" }}
            >
              MockMate
            </span>
          </div>

        
          <h1
            className="text-[30px] font-extrabold leading-[1.1] tracking-tight mb-2"
            style={{ color: "var(--text)", fontFamily: "'Syne', sans-serif" }}
          >
            Welcome<br />back.
          </h1>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--muted)" }}>
            Sign in to continue your journey
          </p>

          <form onSubmit={handleSubmit} noValidate>

           
            <div className="mb-[18px]">
              <label
                htmlFor="email"
                className="block text-[11px] font-medium uppercase tracking-[0.8px] mb-2"
                style={{ color: "var(--muted)" }}
              >
                Email or Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm pointer-events-none select-none" style={{ color: "var(--muted)" }}>
                  ✉
                </span>
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email or username"
                  className={`${inputClass} pr-4`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: "var(--input-bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.boxShadow = "0 0 0 3px var(--glow)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

          
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-[11px] font-medium uppercase tracking-[0.8px] mb-2"
                style={{ color: "var(--muted)" }}
              >
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm pointer-events-none select-none" style={{ color: "var(--muted)" }}>
                  🔒
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className={`${inputClass} pr-12`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: "var(--input-bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.boxShadow = "0 0 0 3px var(--glow)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors text-base leading-none bg-transparent border-none cursor-pointer"
                  style={{ color: "var(--muted)" }}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

         
            <div className="flex justify-end mb-6">
              <button
                type="button"
                className="text-[13px] font-medium hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer"
                style={{ color: "var(--accent)" }}
              >
                Forgot password?
              </button>
            </div>

         
            <button
              type="submit"
              disabled={isLoginingup}
              className="w-full py-[15px] rounded-xl font-bold text-[15px] tracking-[0.3px] border-none cursor-pointer transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 mb-5"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                color: "var(--btn-text)",
                boxShadow: "0 4px 20px var(--glow)",
              }}
            >
              {isLoginingup ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In →"
              )}
            </button>

         
            <div className="flex items-center gap-3 mb-5 text-[12px] tracking-[0.5px]" style={{ color: "var(--muted)" }}>
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
              or continue with
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            </div>

         
            <div className="grid grid-cols-2 gap-3 mb-7">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm cursor-pointer transition-all duration-200 hover:-translate-y-[1px]"
                style={{
                  background: "var(--input-bg)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm cursor-pointer transition-all duration-200 hover:-translate-y-[1px]"
                style={{
                  background: "var(--input-bg)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </button>
            </div>

          
            <p className="text-center text-sm" style={{ color: "var(--muted)" }}>
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold hover:opacity-75 transition-opacity"
                style={{ color: "var(--accent)" }}
              >
                Create account
              </a>
            </p>

          </form>
        </div>
      </div>
    </>
  );
}
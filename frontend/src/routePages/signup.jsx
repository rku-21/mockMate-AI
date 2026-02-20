import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import toast from "react-hot-toast";

export default function Signup() {
  const { isSigningup, signup } = useAuthStore();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const getStrength = (val) => {
    let score = 0;
    if (val.length >= 6) score++;
    if (val.length >= 10) score++;
    if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    return score;
  };

  const strengthColors = ["#f06292", "#ffb74d", "#fff176", "#66bb6a"];
  const strengthScore = getStrength(formData.password);

  const validFrom = () => {
    if (!formData.username) { toast.error("Username is required"); return false; }
    if (!formData.email.trim()) { toast.error("Email is required"); return false; }
    if (!formData.password) { toast.error("Password is required"); return false; }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validFrom()) signup(formData);
  };

  const inputClass = "w-full rounded-xl pl-11 pr-4 py-[14px] text-[15px] outline-none transition-all duration-200";

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
            Join<br />MockMate.
          </h1>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--muted)" }}>
            Create your account in seconds
          </p>

          <form onSubmit={handleSubmit} noValidate>

           
            <div className="mb-[18px]">
              <label
                htmlFor="username"
                className="block text-[11px] font-medium uppercase tracking-[0.8px] mb-2"
                style={{ color: "var(--muted)" }}
              >
                Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm pointer-events-none select-none" style={{ color: "var(--muted)" }}>
                  👤
                </span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  placeholder="Enter username"
                  className={inputClass}
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

          
            <div className="mb-[18px]">
              <label
                htmlFor="email"
                className="block text-[11px] font-medium uppercase tracking-[0.8px] mb-2"
                style={{ color: "var(--muted)" }}
              >
                Email
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm pointer-events-none select-none" style={{ color: "var(--muted)" }}>
                  ✉
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="hello@example.com"
                  className={inputClass}
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

          
            <div className="mb-[18px]">
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

           
              {formData.password.length > 0 && (
                <div className="flex gap-1 mt-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex-1 h-[3px] rounded-sm transition-all duration-300"
                      style={{
                        background: i < strengthScore ? strengthColors[strengthScore - 1] : "rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

         
            <button
              type="submit"
              disabled={isSigningup}
              className="w-full py-[15px] rounded-xl font-bold text-[15px] tracking-[0.3px] border-none cursor-pointer transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 mb-5 mt-2"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                color: "var(--btn-text)",
                boxShadow: "0 4px 20px var(--glow)",
              }}
            >
              {isSigningup ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                "Create Account →"
              )}
            </button>

          
            <p className="text-center text-[12px] leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              By signing up, you agree to our{" "}
              <a href="#" className="hover:opacity-75 transition-opacity" style={{ color: "var(--accent)" }}>Terms</a>
              {" "}and{" "}
              <a href="#" className="hover:opacity-75 transition-opacity" style={{ color: "var(--accent)" }}>Privacy Policy</a>
            </p>

          
            <p className="text-center text-sm" style={{ color: "var(--muted)" }}>
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold hover:opacity-75 transition-opacity"
                style={{ color: "var(--accent)" }}
              >
                Sign in
              </Link>
            </p>

          </form>
        </div>
      </div>
    </>
  );
}
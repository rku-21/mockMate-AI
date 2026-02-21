import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { useState } from "react"; 
import { encoded } from "../staticData/homeData.js";
const stats = [
  { value: "50K+", label: "Interviews Conducted" },
  { value: "94%", label: "User Satisfaction" },
  { value: "200+", label: "Question Topics" },
  { value: "3x", label: "Faster Prep Time" },
];

export default function Home() {
    const {features,steps}=JSON.parse(decodeURIComponent(escape(atob(encoded))));
    const {authUser,logout}=useAuthStore();
    const [open,setopen]=useState(false);
    const handleLogout=()=>{
        logout();

    }
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen relative"
        style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "'DM Sans', sans-serif" }}
      >
      
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

       
        <nav
          className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 border-b backdrop-blur-md"
          style={{
            background: "rgba(0,0,0,0.4)",
            borderColor: "var(--border)",
          }}
        >
        
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-base"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))", color: "var(--btn-text)" }}
            >
              M
            </div>
            <span className="text-lg font-extrabold tracking-tight" style={{ fontFamily: "'Syne', sans-serif", color: "var(--text)" }}>
              MockMate <span style={{ color: "var(--accent)" }}>AI</span>
            </span>
          </div>

        
          <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "var(--muted)" }}>
            {["Features", "How it Works", "Pricing", "Blog"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:opacity-100 transition-opacity"
                style={{ opacity: 0.7 }}
              >
                {item}
              </a>
            ))}
          </div>

        
          <div className="flex items-center gap-3" onClick={()=>{
            setopen(!open)
          }}>
            {authUser ? (
              <div className="flex items-center gap-2">
                {authUser.user.profilePicture ? (
                  <img
                    src={authUser.user.profilePicture}
                    alt={authUser.user.username}
                    className="w-9 h-9 rounded-full object-cover border-2"
                    style={{ borderColor: "var(--accent)" }}
                  />
                ) : (
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border-2"
                    style={{
                      background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                      color: "var(--btn-text)",
                      borderColor: "var(--accent)",
                    }}
                  >
                    {authUser.user.username?.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="text-sm font-semibold hidden md:block" style={{ color: "var(--text)" }}>
                  {authUser.user.username}
                </span>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-semibold px-4 py-2 rounded-xl transition-all"
                  style={{ color: "var(--muted)" }}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                    color: "var(--btn-text)",
                    boxShadow: "0 4px 15px var(--glow)",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  Get Started Free
                </Link>
              </>
            )}
          </div>
                { authUser && open && (
            <div className="absolute top-full right-0 mr-1 mt-2 w-36 rounded-xl border z-50"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
            <p className="text-xl flex items-center gap-4 px-4 py-2.5 cursor-pointer hover:opacity-70"><i className="fa-solid fa-user"></i>Profile</p>
            <p className=" text-xl flex items-center gap-4 px-4 py-3 cursor-pointer hover:opacity-70" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket" style={{transform:"rotate(180deg)"}}></i>Logout</p>
            </div>
        )}
        </nav>

       
        <section className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-24">

        
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border"
            style={{
              background: "var(--input-bg)",
              border: "1px solid var(--border)",
              color: "var(--accent)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            AI Mock Interview Platform — Now in Beta
          </div>

        
          <h1
            className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 max-w-4xl"
            style={{ fontFamily: "'Syne', sans-serif", color: "var(--text)" }}
          >
            Ace Your Next
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Interview
            </span>{" "}
            with AI.
          </h1>

          <p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: "var(--muted)" }}>
            Practice with a real-time AI interviewer that adapts to your answers,
            gives instant feedback, and helps you land the job you deserve.
          </p>

         
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            {authUser ? (
              <Link
                to="/interview"
                className="px-8 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-1"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  background: "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                  color: "var(--btn-text)",
                  boxShadow: "0 6px 25px var(--glow)",
                }}
              >
                Start Mock Interview →
              </Link>
            ) : (
              <Link
                to="/signup"
                className="px-8 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-1"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  background: "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                  color: "var(--btn-text)",
                  boxShadow: "0 6px 25px var(--glow)",
                }}
              >
                Start Mock Interview →
              </Link>
            )}
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5 border"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "var(--input-bg)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              See How It Works
            </a>
          </div>

        
          <div
            className="w-full max-w-2xl rounded-2xl border overflow-hidden text-left"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 60px var(--glow)",
            }}
          >
          
            <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: "var(--border)" }}>
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs" style={{ color: "var(--muted)" }}>MockMate AI — Live Session</span>
            </div>

            <div className="p-6 space-y-4">
            
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 font-bold"
                  style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))", color: "var(--btn-text)" }}
                >
                  AI
                </div>
                <div
                  className="rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed max-w-sm"
                  style={{ background: "var(--input-bg)", color: "var(--text)" }}
                >
                  Tell me about a challenging technical problem you solved and how you approached it.
                </div>
              </div>

            
              <div className="flex items-start gap-3 flex-row-reverse">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 font-bold"
                  style={{ background: "var(--border)", color: "var(--muted)" }}
                >
                  You
                </div>
                <div
                  className="rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed max-w-sm"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                    color: "var(--btn-text)",
                    opacity: 0.9,
                  }}
                >
                  I once had to optimize a query that was taking 40 seconds...
                </div>
              </div>

            
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 font-bold"
                  style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))", color: "var(--btn-text)" }}
                >
                  AI
                </div>
                <div
                  className="rounded-2xl rounded-tl-sm px-5 py-3 flex items-center gap-1.5"
                  style={{ background: "var(--input-bg)" }}
                >
                  {[0, 0.2, 0.4].map((d, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: "var(--accent)",
                        animation: `bounce 1.2s ease-in-out ${d}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>

             
              <div
                className="mt-2 rounded-xl p-4 border flex items-center justify-between"
                style={{ background: "var(--input-bg)", border: "1px solid var(--border)" }}
              >
                <div className="text-xs" style={{ color: "var(--muted)" }}>Live Score</div>
                <div className="flex gap-4 text-xs font-semibold">
                  {[["Clarity", "8.2"], ["Depth", "7.8"], ["Relevance", "9.0"]].map(([label, val]) => (
                    <div key={label} className="flex flex-col items-center gap-0.5">
                      <span style={{ color: "var(--accent)" }}>{val}</span>
                      <span style={{ color: "var(--muted)" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

       
        <section className="relative z-10 px-6 py-16 border-y" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-4xl font-extrabold mb-1"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {value}
                </div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

      
        <section id="features" className="relative z-10 px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--accent)", fontFamily: "'Syne', sans-serif" }}>
                Features
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight" style={{ fontFamily: "'Syne', sans-serif", color: "var(--text)" }}>
                Everything you need to prepare
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 30px var(--glow)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                    style={{ background: "var(--input-bg)", border: "1px solid var(--border)" }}
                  >
                    {icon}
                  </div>
                  <h3 className="font-bold mb-2 text-base" style={{ fontFamily: "'Syne', sans-serif", color: "var(--text)" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

     
        <section id="how-it-works" className="relative z-10 px-6 py-24 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--accent)", fontFamily: "'Syne', sans-serif" }}>
                How it Works
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight" style={{ fontFamily: "'Syne', sans-serif", color: "var(--text)" }}>
                Four steps to interview-ready
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {steps.map(({ num, title, desc }) => (
                <div
                  key={num}
                  className="rounded-2xl p-7 border flex gap-5 items-start"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="text-3xl font-extrabold flex-shrink-0 leading-none"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {num}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1.5" style={{ fontFamily: "'Syne', sans-serif", color: "var(--text)" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      
        <section className="relative z-10 px-6 py-24">
          <div
            className="max-w-3xl mx-auto rounded-3xl p-12 text-center border relative overflow-hidden"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: "0 0 80px var(--glow)",
            }}
          >
           
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, var(--accent), var(--accent2), transparent)",
              }}
            />

            <div
              className="inline-block text-4xl mb-6 p-4 rounded-2xl"
              style={{ background: "var(--input-bg)", border: "1px solid var(--border)" }}
            >
              🎯
            </div>

            <h2
              className="text-4xl font-extrabold tracking-tight mb-4"
              style={{ fontFamily: "'Syne', sans-serif", color: "var(--text)" }}
            >
              Ready to land your dream job?
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
              Join thousands of candidates who've cracked their interviews using MockMate AI. Start free, no credit card needed.
            </p>
            <Link
              to="/signup"
              className="inline-block px-10 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-1"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                color: "var(--btn-text)",
                boxShadow: "0 6px 30px var(--glow)",
              }}
            >
              Start Practicing for Free →
            </Link>
          </div>
        </section>

       
        <footer className="relative z-10 px-8 py-8 border-t flex items-center justify-between text-sm" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
          <div className="flex items-center gap-2 font-bold" style={{ fontFamily: "'Syne', sans-serif", color: "var(--text)" }}>
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))", color: "var(--btn-text)" }}
            >
              M
            </div>
            MockMate AI
          </div>
          <p>© 2026 MockMate. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a key={item} href="#" className="hover:opacity-100 transition-opacity" style={{ opacity: 0.6 }}>{item}</a>
            ))}
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
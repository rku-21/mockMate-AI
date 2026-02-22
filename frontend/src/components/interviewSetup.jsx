import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaServer, FaDatabase, FaRobot, FaDocker } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { MdDesignServices, MdManageAccounts } from "react-icons/md";
import { encodedInterviewSetup } from "../staticData/interviewSetup";


const icons = {
  frontend:  <FaReact />,
  backend:   <FaServer />,
  fullstack: <FaDatabase />,
  ml:        <SiTensorflow />,
  devops:    <FaDocker />,
  product:   <MdManageAccounts />,
  design:    <MdDesignServices />,
  data:      <FaRobot />,
};

const data = JSON.parse(decodeURIComponent(atob(encodedInterviewSetup)));
const roles = data.roles.map(r => ({ ...r, icon: icons[r.id] }));
const levels = data.levels;
const types = data.types;
const durations = data.durations;

const STEPS = ["Role", "Level", "Type", "Duration"];

export default function InterviewSetup({ onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState({
    role: null,
    level: null,
    type: null,
    duration: null,
  });

  const keys = ["role", "level", "type", "duration"];
  const currentKey = keys[step];
  const isLastStep = step === STEPS.length - 1;
  const canProceed = config[currentKey] !== null;

  const handleSelect = (value) => {
    setConfig({ ...config, [currentKey]: value });
  };

  const handleNext = () => {
    if (!canProceed) return;
    if (isLastStep) {
      navigate("/interview/session", { state: { config } });
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step === 0) onClose();
    else setStep(step - 1);
  };

  const options = [roles, levels, types, durations][step];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

    
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
        onClick={onClose}
      >
       
        <div
          className="w-full max-w-[580px] rounded-3xl relative overflow-hidden"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 60px var(--glow)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
         
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, var(--accent), var(--accent2), transparent)",
            }}
          />

         
          <div className="flex items-center justify-between px-8 pt-8 pb-4">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: "var(--accent)", fontFamily: "'Syne', sans-serif" }}
              >
                Step {step + 1} of {STEPS.length}
              </p>
              <h2
                className="text-2xl font-extrabold tracking-tight"
                style={{ color: "var(--text)", fontFamily: "'Syne', sans-serif" }}
              >
                {["Choose Your Role", "Your Experience Level", "Interview Type", "Session Duration"][step]}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-opacity hover:opacity-70"
              style={{ background: "var(--input-bg)", border: "1px solid var(--border)", color: "var(--muted)" }}
            >
              ×
            </button>
          </div>

        
          <div className="px-8 mb-6">
            <div className="flex gap-1.5">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1 rounded-full transition-all duration-300"
                  style={{
                    background: i <= step ? "var(--accent)" : "var(--border)",
                    opacity: i <= step ? 1 : 0.4,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {STEPS.map((label, i) => (
                <span
                  key={i}
                  className="text-[10px] font-medium"
                  style={{
                    color: i <= step ? "var(--accent)" : "var(--muted)",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

        
          <div className="px-8 pb-6">
            <div className={`grid gap-3 ${step === 0 ? "grid-cols-2" : step === 3 ? "grid-cols-4" : "grid-cols-2"}`}>
              {options.map((option) => {
                const isSelected = config[currentKey] === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className="text-left rounded-2xl p-4 border transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: isSelected ? `color-mix(in srgb, var(--accent) 12%, transparent)` : "var(--input-bg)",
                      border: isSelected ? "1.5px solid var(--accent)" : "1px solid var(--border)",
                      boxShadow: isSelected ? "0 0 20px var(--glow)" : "none",
                    }}
                  >
                    {option.icon && (
                      <div className="text-2xl mb-2">{option.icon}</div>
                    )}
                    <p
                      className="font-bold text-sm"
                      style={{
                        color: isSelected ? "var(--accent)" : "var(--text)",
                        fontFamily: "'Syne', sans-serif",
                      }}
                    >
                      {option.label}
                    </p>
                    {option.desc && (
                      <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                        {option.desc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        
          {isLastStep && config.role && config.level && config.type && (
            <div
              className="mx-8 mb-6 rounded-2xl p-4 border"
              style={{ background: "var(--input-bg)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--muted)", fontFamily: "'Syne', sans-serif" }}>
                Your Session
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  roles.find(r => r.id === config.role),
                  levels.find(l => l.id === config.level),
                  types.find(t => t.id === config.type),
                ].map((item) => item && (
                  <span
                    key={item.id}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: `color-mix(in srgb, var(--accent) 15%, transparent)`,
                      color: "var(--accent)",
                      border: "1px solid var(--border)",
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    {item.icon} {item.label}
                  </span>
                ))}
              </div>
            </div>
          )}

         
          <div
            className="flex items-center justify-between px-8 py-5 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-70"
              style={{
                background: "var(--input-bg)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              ← {step === 0 ? "Cancel" : "Back"}
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                color: "var(--btn-text)",
                boxShadow: canProceed ? "0 4px 15px var(--glow)" : "none",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {isLastStep ? " Start Interview" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
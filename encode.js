// encode.js
const data = {
  roles: [
    { id: "frontend",  label: "Frontend Developer" },
    { id: "backend",   label: "Backend Developer" },
    { id: "fullstack", label: "Full Stack Developer" },
    { id: "ml",        label: "ML / AI Engineer" },
    { id: "devops",    label: "DevOps Engineer" },
    { id: "product",   label: "Product Manager" },
    { id: "design",    label: "UI/UX Designer" },
    { id: "data",      label: "Data Scientist" },
  ],
  levels: [
    { id: "beginner",     label: "Beginner",        desc: "0–1 years" },
    { id: "intermediate", label: "Intermediate",    desc: "1–3 years" },
    { id: "senior",       label: "Senior",          desc: "3–6 years" },
    { id: "lead",         label: "Lead / Architect",desc: "6+ years" },
  ],
  types: [
    { id: "technical",  label: "Technical",  desc: "DSA, System Design, Code" },
    { id: "behavioral", label: "Behavioral", desc: "Soft skills, Scenarios" },
    { id: "mixed",      label: "Mixed",      desc: "Both technical & behavioral" },
  ],
  durations: [
    { id: "10", label: "10 min", desc: "Quick warmup" },
    { id: "20", label: "20 min", desc: "Standard" },
    { id: "40", label: "40 min", desc: "Full interview" },
    { id: "60", label: "60 min", desc: "Deep dive" },
  ],
};

const encodedInterviewSetup = Buffer.from(JSON.stringify(data)).toString("base64");
console.log(encodedInterviewSetup);
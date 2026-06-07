import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaAward, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "Veena Infotech",
      role: "Web Developer Intern & UI Designer",
      duration: "Feb 2025 - Aug 2025",
      details: [
        "Selected as a Core Team member, contributing to critical software development life cycles.",
        "Led UI Design & Development initiatives, focusing on creating premium, responsive digital experiences.",
        "Recognized with multiple Appreciation Letters for outstanding performance and UI/UX contributions.",
        "Successfully completed a 6-month paid internship with high-impact project delivery.",
      ],
      docs: [
        { name: "Completion Certificate", url: "/experience/main completion certificate.pdf" },
        { name: "UI Design Appreciation", url: "/experience/Appreciation for UI Design & Development Contributions - Neav Panjwani.pdf" },
        { name: "Core Team Participation", url: "/experience/Appreciation for Internship Contribution & Core Team Participation - Neav Panjwani.pdf" },
      ],
    },
  ];

  return (
    <section id="experience" className="relative min-h-screen w-full text-white overflow-x-auto overflow-y-hidden flex flex-col items-center justify-center px-10 py-20 via-gray-800 to-gray-900">
      {/* Sign */}
      <h2 className="absolute top-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500 drop-shadow-md z-20">
        My Journey
      </h2>

      {/* Track */}
      <div className="absolute bottom-20 left-0 right-0 h-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 shadow-[0_0_20px_rgba(0,0,0,0.6)]" />
      <div className="absolute bottom-[60px] left-0 right-0 h-2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700" />
      <div className="absolute bottom-[72px] left-0 right-0 grid grid-cols-12 gap-6 px-6">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-12 bg-gray-800 rounded-sm shadow-inner" />
        ))}
      </div>

      {/* Train Container */}
      <motion.div
        className="relative z-10 flex gap-6 items-end mt-16 pb-2"
        initial={{ x: -800, y: 0 }}
        whileInView={{ x: 0, y: [0, 2, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <ExperienceTrainEngine />
        {experiences.map((exp, i) => (
          <ExperienceTrainCoach key={i} exp={exp} />
        ))}
      </motion.div>
    </section>
  );
}

/* ---------------- Engine ---------------- */
function ExperienceTrainEngine() {
  return (
    <motion.div className="relative shrink-0">
      <div className="relative w-[380px] h-[250px] rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between p-6">
        {/* Engine Stripe */}
        <div className="absolute top-10 left-0 right-0 h-3 rounded-md mx-6 bg-gradient-to-r from-yellow-400 to-amber-600" />

        {/* Cabin */}
        <div className="absolute top-[-40px] left-7 w-[150px] h-[120px] rounded-xl bg-gradient-to-b from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center text-sm font-semibold text-white/80">
          Career
        </div>

        {/* Smokestack & Smoke */}
        <div className="absolute -top-8 left-[180px] w-7 h-16 bg-gray-700 rounded-b-md border border-white/10" />
        <Smoke />

        {/* Headlight */}
        <div className="absolute top-[80px] -right-3 w-6 h-6 rounded-full bg-yellow-200 shadow-[0_0_30px_rgba(255,255,170,0.9)]" />

        <div className="mt-16 text-sm font-semibold tracking-wide text-yellow-300">
          Experience Express
        </div>
      </div>

      {/* Wheels */}
      <div className="mt-2 flex gap-8 justify-center">
        <Wheel size={64} />
        <Wheel size={64} />
        <Wheel size={64} />
      </div>
    </motion.div>
  );
}

/* ---------------- Coach with Experience Info ---------------- */
function ExperienceTrainCoach({ exp }) {
  return (
    <motion.div className="relative shrink-0">
      <div className="relative w-[450px] min-h-[350px] rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.55)] flex flex-col p-6 overflow-hidden">
        <div className="flex justify-between items-start mb-4 border-b border-yellow-500/30 pb-3 gap-2">
          <div>
            <h3 className="text-2xl font-logo font-bold text-yellow-400 mb-1 flex items-center gap-2">
              <FaBuilding className="text-white/80 shrink-0" /> <span className="line-clamp-1">{exp.company}</span>
            </h3>
            <p className="text-base text-yellow-200 font-semibold leading-tight">{exp.role}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-yellow-400/30 text-white/90 text-xs font-bold shadow-inner">
            <FaCalendarAlt className="text-yellow-400 shrink-0" /> <span className="whitespace-nowrap">{exp.duration.replace("Feb 2025 - Aug 2025", "Feb - Aug '25")}</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 h-full">
          {/* Details List */}
          <ul className="space-y-3">
            {exp.details.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                <FaCheckCircle className="text-yellow-400 mt-1 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Docs/Verifications */}
          <div className="space-y-4">
            <h4 className="text-base font-logo font-bold text-white flex items-center gap-2 tracking-widest bg-yellow-400/10 p-2 rounded-lg border border-yellow-400/20">
              <FaAward className="text-yellow-400" /> Verifications
            </h4>
            <div className="flex flex-col gap-3">
              {exp.docs.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-lg bg-[#1e293b]/50 border border-white/10 hover:bg-yellow-400/10 hover:border-yellow-400/50 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all"
                >
                  <span className="text-white/90 text-xs font-semibold group-hover:text-yellow-400 transition-colors line-clamp-1">
                    {doc.name}
                  </span>
                  <FaExternalLinkAlt className="text-white/40 group-hover:text-yellow-400 shrink-0 text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wheels */}
      <div className="mt-2 flex gap-8 justify-center">
        <Wheel size={56} />
        <Wheel size={56} />
      </div>

      {/* Coupler linking to Engine */}
      <div className="absolute -left-6 bottom-10 w-6 h-2 bg-gray-500 rounded" />
    </motion.div>
  );
}

/* ---------------- Wheel ---------------- */
function Wheel({ size = 60 }) {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      style={{ width: size, height: size }}
      className="rounded-full bg-gradient-to-b from-gray-700 to-gray-900 border-4 border-gray-600 relative shrink-0"
    >
      <div className="absolute inset-2 rounded-full border-2 border-gray-500" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gray-500" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-0.5 w-full bg-gray-500" />
      <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-gray-300" />
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[150%] h-2 rounded-full blur-xl bg-blue-500/30" />
    </motion.div>
  );
}

/* ---------------- Smoke ---------------- */
function Smoke() {
  const puff = {
    initial: { opacity: 0.0, y: 10, scale: 0.6 },
    animate: {
      opacity: [0.2, 0.6, 0],
      y: [-10, -40, -70],
      scale: [0.6, 1, 1.3],
    },
    transition: { duration: 2.4, repeat: Infinity, ease: "easeOut" },
  };
  return (
    <div className="absolute -top-10 left-[184px] flex gap-2">
      <motion.div {...puff} className="w-6 h-6 rounded-full bg-gray-300/50 blur-[2px]" />
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.6 }}
        animate={{
          opacity: [0.2, 0.6, 0],
          y: [-10, -50, -85],
          scale: [0.6, 1, 1.4],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
        className="w-7 h-7 rounded-full bg-gray-300/50 blur-[2px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.6 }}
        animate={{
          opacity: [0.2, 0.6, 0],
          y: [-10, -60, -95],
          scale: [0.6, 1, 1.5],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
        className="w-8 h-8 rounded-full bg-gray-300/50 blur-[2px]"
      />
    </div>
  );
}

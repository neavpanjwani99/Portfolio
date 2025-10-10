import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Skills Train
 * Engine = Frontend (bigger loco)
 * Coach 1 = Backend
 * Coach 2 = UI/UX
 */

export default function SkillsTrain() {
  const [hoverSkill, setHoverSkill] = useState(null);

  const frontend = [
    { name: "HTML", desc: "Semantic structure", badge: "bg-red-500" },
    { name: "CSS", desc: "Layouts & effects", badge: "bg-blue-500" },
    { name: "JavaScript", desc: "Logic & DOM (Learning)", badge: "bg-yellow-400" },
    { name: "React", desc: "SPA & components", badge: "bg-sky-500" },
    { name: "Tailwind", desc: "Utility CSS", badge: "bg-purple-500" },
    { name: "Bootstrap", desc: "UI kit", badge: "bg-pink-500" },
  ];

  const backend = [
    { name: "Node.js", desc: "Runtime (Learning)", badge: "bg-green-500" },
    { name: "Express", desc: "HTTP framework (Learning)", badge: "bg-gray-400" },
    { name: "MongoDB", desc: "NoSQL DB (Learning)", badge: "bg-emerald-500" },
    { name: "SQL", desc: "Relational queries (Learning)", badge: "bg-cyan-400" },
    { name: "PHP", desc: "Scripting (Learning)", badge: "bg-indigo-500" },
    { name: "DSA", desc: "Algorithms (Learning)", badge: "bg-lime-500" },
  ];

  const uiux = [
    { name: "Figma", desc: "Design & protos", badge: "bg-pink-500" },
    { name: "Unity", desc: "Game Engine (Learning)", badge: "bg-gray-500" },
    { name: "C#", desc: "Game Logic (Learning)", badge: "bg-purple-500" },
    { name: "Python", desc: "Scripting", badge: "bg-yellow-400" },
    { name: "Flask", desc: "Python web", badge: "bg-gray-400" },
    { name: "Jinja2", desc: "Templating", badge: "bg-amber-500" },
  ];

  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden flex items-center justify-center px-6">
      {/* Sign */}
      <h2 className="absolute top-8 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500 drop-shadow-md">
        My Skills Train
      </h2>

      {/* Track */}
      <div className="absolute bottom-20 left-0 right-0 h-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 shadow-[0_0_20px_rgba(0,0,0,0.6)]" />
      <div className="absolute bottom-[60px] left-0 right-0 h-2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700" />
      <div className="absolute bottom-[72px] left-0 right-0 grid grid-cols-12 gap-6 px-6">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-12 bg-gray-800 rounded-sm shadow-inner" />
        ))}
      </div>

      {/* Whole Train */}
      <motion.div
        initial={{ x: -30 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-6xl"
      >
        <div className="flex items-end gap-6 justify-center">
          {/* ======= LOCOMOTIVE (FRONTEND) ======= */}
          <TrainEngine
            title="Frontend Engine"
            accent="from-sky-400 to-blue-600"
            headGlow="shadow-[0_0_30px_rgba(255,255,170,0.9)]"
            windows={frontend}
            setHoverSkill={setHoverSkill}
          />

          {/* ======= BACKEND COACH ======= */}
          <TrainCoach
            title="Backend Coach (Beginner)"
            accent="from-emerald-500 to-green-700"
            windows={backend}
            setHoverSkill={setHoverSkill}
          />

          {/* ======= UI/UX COACH ======= */}
          <TrainCoach
            title="UI/UX Coach"
            accent="from-fuchsia-500 to-purple-700"
            windows={uiux}
            setHoverSkill={setHoverSkill}
          />
        </div>
      </motion.div>

      {/* Hologram Card */}
      {hoverSkill && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseLeave={() => setHoverSkill(null)}
          className="absolute top-28 z-20 px-6 py-4 rounded-xl backdrop-blur-md bg-black/70 border border-yellow-400/60 shadow-[0_0_25px_rgba(255,215,0,0.8)] text-center"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-1">
            {hoverSkill.name}
          </h3>
          <p className="text-sm text-gray-200">{hoverSkill.desc}</p>
        </motion.div>
      )}
    </section>
  );
}

/* ---------------- Components ---------------- */

function TrainEngine({ title, accent, windows, setHoverSkill, headGlow }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="relative">
      {/* Body */}
      <div className="relative w-[420px] h-[230px] rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between p-4">
        
        {/* Stripe */}
        <div
          className={`absolute top-10 left-0 right-0 h-3 rounded-md mx-6 bg-gradient-to-r ${accent}`}
        />

        {/* Cabin */}
        <div className="absolute top-[-40px] left-7 w-[170px] h-[120px] rounded-xl bg-gradient-to-b from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center text-sm font-semibold text-white/80">
          Driver
        </div>

        {/* Smokestack */}
        <div className="absolute -top-8 left-[210px] w-7 h-16 bg-gray-700 rounded-b-md border border-white/10" />

        {/* Smoke */}
        <Smoke />

        {/* Headlight */}
        <div
          className={`absolute top-[80px] -right-3 w-6 h-6 rounded-full bg-yellow-200 ${headGlow}`}
        />

        {/* Title (shifted down, no overlap) */}
        <div className="mt-16 text-sm font-semibold tracking-wide text-yellow-300">
          {title}
        </div>

        {/* Windows with skills */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {windows.slice(0, 6).map((s, i) => (
            <SkillWindow key={i} s={s} setHoverSkill={setHoverSkill} />
          ))}
        </div>
      </div>

      {/* Wheels */}
      <div className="mt-2 flex gap-6 justify-center">
        <Wheel size={64} />
        <Wheel size={64} />
        <Wheel size={64} />
      </div>
    </motion.div>
  );
}


function TrainCoach({ title, accent, windows, setHoverSkill }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="relative">
      <div className="relative w-[360px] h-[170px] rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.55)] flex flex-col justify-between p-4">
        {/* Stripe */}
        <div
          className={`absolute top-10 left-0 right-0 h-3 rounded-md mx-6 bg-gradient-to-r ${accent}`}
        />

        {/* Title */}
        <div className="text-sm font-semibold tracking-wide text-yellow-300">
          {title}
        </div>

        {/* Windows */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {windows.slice(0, 6).map((s, i) => (
            <SkillWindow key={i} s={s} setHoverSkill={setHoverSkill} />
          ))}
        </div>
      </div>

      {/* Wheels */}
      <div className="mt-2 flex gap-8 justify-center">
        <Wheel size={56} />
        <Wheel size={56} />
      </div>

      {/* Coupler */}
      <div className="absolute -left-3 bottom-10 w-6 h-1 bg-gray-500 rounded" />
    </motion.div>
  );
}

function SkillWindow({ s, setHoverSkill }) {
  return (
    <motion.div
      onMouseEnter={() => setHoverSkill(s)}
      onMouseLeave={() => setHoverSkill(null)}
      whileHover={{ scale: 1.04 }}
      className="w-24 h-10 rounded-md bg-gradient-to-b from-slate-200/25 to-slate-50/10 backdrop-blur-[2px] border border-white/15 relative"
    >
      <div
        className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] rounded-full ${s.badge} text-black font-bold shadow`}
      >
        {s.name}
      </div>
    </motion.div>
  );
}

function Wheel({ size = 60 }) {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      style={{ width: size, height: size }}
      className="rounded-full bg-gradient-to-b from-gray-700 to-gray-900 border-4 border-gray-600 relative"
    >
      <div className="absolute inset-2 rounded-full border-2 border-gray-500" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gray-500" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-0.5 w-full bg-gray-500" />
      <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-gray-300" />
      {/* Underglow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-2 rounded-full blur-xl bg-blue-500/30" />
    </motion.div>
  );
}

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
    <div className="absolute -top-10 left-[214px] flex gap-2">
      <motion.div
        {...puff}
        className="w-6 h-6 rounded-full bg-gray-300/50 blur-[2px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.6 }}
        animate={{
          opacity: [0.2, 0.6, 0],
          y: [-10, -50, -85],
          scale: [0.6, 1, 1.4],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.4,
        }}
        className="w-7 h-7 rounded-full bg-gray-300/50 blur-[2px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.6 }}
        animate={{
          opacity: [0.2, 0.6, 0],
          y: [-10, -60, -95],
          scale: [0.6, 1, 1.5],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.8,
        }}
        className="w-8 h-8 rounded-full bg-gray-300/50 blur-[2px]"
      />
    </div>
  );
}

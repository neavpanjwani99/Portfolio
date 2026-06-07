import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactTrain() {
  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden flex flex-col items-center justify-center px-6 via-gray-800 to-gray-900">
      {/* Sign */}
      <h2 className="absolute top-8 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500 drop-shadow-md">
        Let’s Connect
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
        className="relative z-10 flex gap-6 items-end"
        initial={{ x: -500, y: 0 }}
        animate={{ x: 0, y: [0, 2, 0] }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <ContactTrainEngine />
        <ContactTrainCoach />
      </motion.div>
    </section>
  );
}

/* ---------------- Engine ---------------- */
function ContactTrainEngine() {
  return (
    <motion.div className="relative">
      <div className="relative w-[420px] h-[250px] rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between p-6">
        {/* Engine Stripe */}
        <div className="absolute top-10 left-0 right-0 h-3 rounded-md mx-6 bg-gradient-to-r from-sky-400 to-blue-600" />

        {/* Cabin */}
        <div className="absolute top-[-40px] left-7 w-[170px] h-[120px] rounded-xl bg-gradient-to-b from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center text-sm font-semibold text-white/80">
          Driver
        </div>

        {/* Smokestack & Smoke */}
        <div className="absolute -top-8 left-[210px] w-7 h-16 bg-gray-700 rounded-b-md border border-white/10" />
        <Smoke />

        {/* Headlight */}
        <div className="absolute top-[80px] -right-3 w-6 h-6 rounded-full bg-yellow-200 shadow-[0_0_30px_rgba(255,255,170,0.9)]" />

        <div className="mt-16 text-sm font-semibold tracking-wide text-yellow-300">
          Contact Engine
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

/* ---------------- Coach with Contact Form ---------------- */
function ContactTrainCoach() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    // 🔴 IMPORTANT: Go to https://web3forms.com/ and get a free access key for your email, then paste it here
    formData.append("access_key", "983e4c02-2bfa-497e-8f82-70543bd020c3");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();

      if (data.success) {
        e.target.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Form Error: Please replace 'YOUR_WEB3FORMS_ACCESS_KEY' with your actual key in Contact.jsx.");
      }
    } catch (err) {
      alert("Network Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div className="relative">
      <div className="relative w-[360px] h-[350px] rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.55)] flex flex-col justify-center p-6 overflow-hidden">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-[#1e293b]/80 border border-yellow-500/50 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all backdrop-blur-sm shadow-inner"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md bg-[#1e293b]/80 border border-yellow-500/50 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all backdrop-blur-sm shadow-inner"
          />
          <textarea
            rows={4}
            name="message"
            placeholder="Your Message..."
            required
            className="p-3 rounded-md bg-[#1e293b]/80 border border-yellow-500/50 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all backdrop-blur-sm shadow-inner resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="p-3 rounded-md border-2 border-yellow-400 text-yellow-400 bg-transparent font-bold tracking-widest mt-2 hover:bg-yellow-400 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] transition-all uppercase text-sm"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Popup Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-2xl"
          >
            <p className="text-xl font-bold text-amber-400 drop-shadow-md">
              Submitted!
            </p>
          </motion.div>
        )}
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

/* ---------------- Wheel ---------------- */
function Wheel({ size = 60 }) {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      style={{ width: size, height: size }}
      className="rounded-full bg-gradient-to-b from-gray-700 to-gray-900 border-4 border-gray-600 relative"
    >
      <div className="absolute inset-2 rounded-full border-2 border-gray-500" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gray-500" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-0.5 w-full bg-gray-500" />
      <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-gray-300" />
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-2 rounded-full blur-xl bg-blue-500/30" />
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
    <div className="absolute -top-10 left-[214px] flex gap-2">
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

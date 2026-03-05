import { motion, animate } from "framer-motion";
import { useState, useEffect } from "react";

export default function CertificatesTrain() {
  const certificates = [
    { title: "System Development - 3rd Rank (Python)", pdf: "/certificate/competion.pdf" },
    { title: "C Programming", pdf: "/certificate/c.pdf" },
    { title: "C++ Programming", pdf: "/certificate/c++.pdf" },
    { title: "Python Beginner", pdf: "/certificate/python-beginner.pdf" },
  ];



    const engineWidth = 420;
    const coachWidth = 380; // slightly wider for better spacing
    const trainWidth = engineWidth + certificates.length * coachWidth;

    const [trainX, setTrainX] = useState(50);

    // Animate engine in on page load
    //   useEffect(() => {
    //     const controls = animate(trainX, 50, { // small left offset
    //       duration: 1,
    //       onUpdate(value) {
    //         setTrainX(value);
    //       },
    //     });
    //     return () => controls.stop();
    //   }, []);

    const moveTrain = (direction) => {
        setTrainX(prev => {
            if (direction === "left") {
                const next = prev + coachWidth;
                return next > 50 ? 50 : next;
            } else {
                const next = prev - coachWidth;
                const maxNegative = -(trainWidth - 800); // 800 as a safe visible area
                if (next < maxNegative) return 50; // loop back
                return next;
            }
        });
    };



    return (
        <section className="relative min-h-screen w-full text-white overflow-hidden flex flex-col items-center justify-center px-6">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500 drop-shadow-md mb-12 mt-6">
                My Certificates
            </h2>

            {/* Buttons */}
            <div className="flex gap-4 mb-12 z-20 relative">
                <button
                    onClick={() => moveTrain("left")}
                    className="px-4 py-2 rounded-md bg-yellow-400 text-black font-semibold"
                >
                    ←
                </button>
                <button
                    onClick={() => moveTrain("right")}
                    className="px-4 py-2 rounded-md bg-yellow-400 text-black font-semibold"
                >
                    →
                </button>
            </div>

            {/* Track */}
            <div className="absolute bottom-24 left-0 right-0 h-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 shadow-[0_0_20px_rgba(0,0,0,0.6)]" />
            <div className="absolute bottom-[64px] left-0 right-0 h-2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700" />
            <div className="absolute bottom-[76px] left-0 right-0 grid grid-cols-12 gap-6 px-6">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="h-12 bg-gray-800 rounded-sm shadow-inner" />
                ))}
            </div>

            {/* Train Container */}
            <motion.div
                initial={{ x: 1200 }}
                animate={{ x: trainX }}
                transition={{ type: "spring", stiffness: 40, damping: 20, duration: 1.5 }}
                className="relative z-10 flex gap-6 items-end"
            >
                <CertificateEngine />
                {certificates.map((cert, index) => (
                    <CertificateCoach key={index} cert={cert} />
                ))}
            </motion.div>
        </section>
    );
}

/* ---------------- Engine ---------------- */
function CertificateEngine() {
    return (
        <div className="relative">
            <div className="relative w-[420px] h-[250px] rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between p-6">
                <div className="absolute top-10 left-0 right-0 h-3 rounded-md mx-6 bg-gradient-to-r from-sky-400 to-blue-600" />
                <div className="absolute top-[-40px] left-7 w-[170px] h-[120px] rounded-xl bg-gradient-to-b from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center text-sm font-semibold text-white/80">
                    Engine
                </div>
                <div className="absolute -top-8 left-[210px] w-7 h-16 bg-gray-700 rounded-b-md border border-white/10" />
                <Smoke />
                <div className="absolute top-[80px] -right-3 w-6 h-6 rounded-full bg-yellow-200 shadow-[0_0_30px_rgba(255,255,170,0.9)]" />
                <div className="mt-16 text-sm font-semibold tracking-wide text-yellow-300">
                    Certificates Engine
                </div>
            </div>

            <div className="mt-0 flex gap-6 justify-center">
                <Wheel size={64} />
                <Wheel size={64} />
                <Wheel size={64} />
            </div>
        </div>
    );
}

/* ---------------- Coach ---------------- */
function CertificateCoach({ cert }) {
    return (
        <motion.div whileHover={{ y: -12 }} className="relative">
            {/* Main Coach Body */}
            <div className="relative w-[360px] h-[240px] rounded-3xl 
                bg-gradient-to-br from-[#1A1A2E]/90 to-[#0B0B0D]/95 
                border border-yellow-500/30 shadow-xl 
                flex flex-col items-center justify-between p-7 overflow-hidden group"
            >
                {/* Premium Accent Stripe */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 shadow-sm" />
                
                {/* Window / Display Area */}
                <div className="relative mt-4 w-full h-28 rounded-2xl bg-black/40 border border-yellow-400/20 flex flex-col items-center justify-center p-5 text-center shadow-inner group-hover:border-yellow-400/50 transition-colors">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-yellow-400 text-[10px] text-black font-bold uppercase tracking-wider">
                        Official Credential
                    </div>
                    <span className="text-base font-bold text-white/95 leading-tight drop-shadow-sm">
                        {cert.title}
                    </span>
                </div>

                {/* View Button */}
                <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-full py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-extrabold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-center"
                >
                    VIEW CREDENTIAL
                </a>

                {/* Glass Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none" />
            </div>

            {/* Wheels */}
            <div className="mt-2 flex gap-12 justify-center">
                <Wheel size={62} />
                <Wheel size={62} />
            </div>

            {/* Coach Connector */}
            <div className="absolute -left-5 bottom-14 w-10 h-2 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full shadow-lg" />
        </motion.div>
    );
}

/* ---------------- Common ---------------- */
function Wheel({ size = 60 }) {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
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

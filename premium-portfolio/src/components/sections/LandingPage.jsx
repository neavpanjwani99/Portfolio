import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function LandingPage({ goto }) {
    return (
        <section
            id="home"
            className="relative min-h-screen -mt-12 flex flex-col items-center justify-center overflow-hidden text-white"
        >
            {/* Animated Aurora Background */}
            <div className="absolute inset-0 -z-20">
                <motion.div
                    className="absolute w-[120%] h-[120%] bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 opacity-30 blur-3xl"
                    animate={{ x: ["-20%", "20%", "-20%"], y: ["-10%", "10%", "-10%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Floating Gold Particles */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                {[...Array(35)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-yellow-400/70 shadow-glowGold"
                        initial={{ y: "110vh", x: Math.random() * window.innerWidth }}
                        animate={{ y: ["110vh", "-10vh"] }}
                        transition={{
                            duration: 6 + Math.random() * 6,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Glass Card Center */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                className="relative glass gold-border px-10 py-12 rounded-3xl shadow-2xl text-center max-w-2xl bg-black/30 backdrop-blur-md overflow-hidden"
            >
                {/* Neon Glow Border Animation */}
                <motion.div
                    className="absolute inset-0 rounded-3xl border border-yellow-500/50"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <h1 className="text-4xl sm:text-5xl font-extrabold gold-text mb-4 animate-pulse relative z-10 drop-shadow-sm">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">Neav</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/80 mb-4 italic relative z-10">
                    Software Developer | Aspiring Game Developer
                </p>

                {/* Typewriter Roles */}
                <div className="text-xl sm:text-2xl gold-text mb-8 relative z-10">
                    <Typewriter
                        options={{
                            strings: [
                                "Software Developer ",
                                "Aspiring Unity Game Developer ",
                                "Creative UI/UX Designer ",
                                "Innovation Enthusiast "
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                        }}
                    />
                </div>

                {/* Small Bio */}
                <p className="text-white/70 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed relative z-10">
                    I am a <span className="text-amber-400 font-medium">Software Developer</span> and
                    an <span className="text-amber-400 font-medium">Aspiring Game Developer</span>.
                    I specialize in building high-performance applications and immersive gaming experiences,
                    blending solid engineering with creative design.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-6 justify-center relative z-10">
                    <a href="/projects"><button
                        onClick={() => goto("projects")}
                        className="px-6 py-3 rounded-xl bg-royalGold text-black font-semibold shadow-glowGold hover:scale-105 transition"
                    >
                        Explore My Work
                    </button></a>
                    <a href="/contact"><button
                        onClick={() => goto("contact")}
                        className="px-6 py-3 rounded-xl glass gold-border hover:text-royalGold transition hover:scale-105"
                    >
                        Contact Me
                    </button></a>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 justify-center mt-6 text-2xl text-yellow-300 relative z-10">
                    <a href="https://github.com/NeavPanjwani" target="_blank" className="hover:text-white transition"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/neav-panjwani" target="_blank" className="hover:text-white transition"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/neav_panjwani?igsh=NXFkNXp1OGs0a20z" target="_blank" className="hover:text-white transition"><FaInstagram /></a>
                </div>
            </motion.div>

            {/* Train Engine (SVG / Dynamic Look) */}
            <motion.div
                initial={{ x: "100%" }} // Train right side se niklegi
                animate={{ x: 0 }} // Left pe rukegi
                transition={{ duration: 6, ease: "easeOut" }}
                className="absolute bottom-6 left-0 flex items-end space-x-6"
            >
                {/* Engine */}
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className="w-44 h-28 drop-shadow-lg"
                    >
                        <defs>
                            <linearGradient id="trainBody" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#FFD700" />
                                <stop offset="100%" stopColor="#FFC300" />
                            </linearGradient>
                        </defs>

                        {/* Engine Body */}
                        <path
                            d="M480 32H272c-26.5 0-48 21.5-48 48v48h-80V32H80C53.5 32 32 53.5 32 80v304c0 26.5 21.5 48 48 48h32c0 35.3 28.7 64 64 64s64-28.7 64-64h160c0 35.3 28.7 64 64 64s64-28.7 64-64h32c35.3 0 64-28.7 64-64V160c0-70.7-57.3-128-128-128z"
                            fill="url(#trainBody)"
                            className="drop-shadow-md"
                        />
                    </svg>

                    {/* Smoke */}
                    <div className="absolute -top-8 left-[60px] flex gap-2">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`w-${6 + i} h-${6 + i} rounded-full bg-gray-300/50 blur-[2px]`}
                                animate={{
                                    opacity: [0.2, 0.6, 0],
                                    y: [-10, -50 - i * 15, -90 - i * 20],
                                    scale: [0.6, 1, 1.3 + i * 0.2],
                                }}
                                transition={{
                                    duration: 2 + i * 0.4,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                    delay: i * 0.3,
                                }}
                            />
                        ))}
                    </div>

                    {/* Neon Wheels for Engine */}
                    <motion.div
                        className="absolute left-8 bottom-0 w-10 h-10 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(0,153,255,0.5)]"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute right-8 bottom-0 w-10 h-10 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(0,153,255,0.5)]"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                    />
                </div>

                {/*Bogies */}
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="relative flex items-center">
                        {/*  Connector */}
                        <div className="w-6 h-1 bg-blue-400 shadow-sm" />

                        {/* Bogie */}
                        <div
                            className="relative w-40 h-24 rounded-xl 
                   bg-gradient-to-br from-yellow-500 to-amber-500 
                   shadow-md"
                        >
                            {/* Wheels */}
                            <motion.div
                                className="absolute left-6 bottom-0 w-8 h-8 rounded-full 
                     bg-blue-500 shadow-[0_0_8px_rgba(0,153,255,0.4)]"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute right-6 bottom-0 w-8 h-8 rounded-full 
                     bg-blue-500 shadow-[0_0_8px_rgba(0,153,255,0.4)]"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                            />
                        </div>
                    </div>
                ))}
            </motion.div>

        </section>
    );
}

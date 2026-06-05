import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import InteractiveParticleProfile from "./InteractiveParticleProfile";
import { FaSchool, FaUniversity, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function AboutMeBogie() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-16 text-white"
    >
      {/* Train Bogie Frame */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-6xl rounded-t-[3rem] rounded-b-[2rem] 
          bg-gradient-to-br from-[#141428]/95 to-[#0B0B0D]/95 
          border-[3px] border-yellow-500/50 shadow-[0_0_30px_rgba(255,215,0,0.2)] overflow-hidden"
      >
        {/* Roof Strip */}
        <div
          className="absolute -top-4 left-0 w-full h-6 rounded-t-[2rem] 
          bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 
          shadow-[0_0_15px_rgba(255,215,0,0.4)]"
        />

        {/* Windows inside Bogie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-12 py-16 items-center">
          {/* Left Window: Profile */}
          <div className="flex justify-center items-center">
            <InteractiveParticleProfile />
          </div>

          {/* Right Window: About Text */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-logo font-extrabold gold-text mb-3">About Me</h2>
            <div className="text-xl sm:text-2xl font-logo leading-relaxed font-medium tracking-wide">
              <Typewriter
                options={{
                  strings: [
                    " Learning Unity & C#",
                    " Passionate about Software Dev",
                    " Loves Animations & Creativity",
                    " Exploring Game Development",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 60,
                }}
              />
            </div>

            {/* Small paragraph */}
            I have successfully completed my{" "}
            <span className="text-yellow-400 font-semibold">3rd Year</span> of
            BSCIT. I am currently learning{" "}
            <span className="text-yellow-400 font-semibold">Unity</span> and{" "}
            <span className="text-yellow-400 font-semibold">C#</span> to
            expand my horizons into Game Development. I enjoy combining
            technology and design to craft interactive digital experiences.
          </div>
        </div>

        {/* Timeline Strip */}
        <div className="mt-8 px-6 pb-20">
          <div className="relative flex items-center justify-between">
            <div
              className="absolute top-1/2 left-0 w-full h-[4px] 
              bg-gradient-to-r from-yellow-400/60 to-yellow-300/60 rounded-full"
            />

            {[
              {
                label: "School",
                icon: <FaSchool className="text-2xl" />,
                info: "Completed High School in 2020 with focus on Science & Math.",
              },
              {
                label: "College",
                icon: <FaUniversity className="text-2xl" />,
                info: "Pursuing 3rd Year BSCIT with focus on Software Development.",
              },
              {
                label: "Internship",
                icon: <FaLaptopCode className="text-2xl" />,
                info: "Web Development Intern, gaining hands-on industry experience.",
              },
              {
                label: "Future",
                icon: <FaRocket className="text-2xl" />,
                info: "Aiming to master Unity Game Dev & Software Engineering.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: i * 0.3,
                  type: "spring",
                  stiffness: 120,
                }}
                className="relative z-10 flex flex-col items-center group"
              >
                {/* Dot with Real Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center 
                  rounded-full bg-yellow-400 text-black 
                  shadow-[0_0_15px_rgba(255,215,0,0.5)] 
                  border-2 border-amber-600
                  transition-transform group-hover:scale-110"
                >
                  {step.icon}
                </div>
                <p className="mt-2 text-sm font-logo tracking-widest text-white/80">{step.label}</p>

                {/* Hover Info Card */}
                <div
                  className="absolute -top-28 w-56 opacity-0 scale-90 
                  group-hover:opacity-100 group-hover:scale-100 
                  transition-all duration-300"
                >
                  <div
                    className="backdrop-blur-md bg-[#1a1a1a]/70 border border-yellow-400/60 
                    rounded-xl p-3 text-sm text-white shadow-lg"
                  >
                    {step.info}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wheels */}
        <div
          className="absolute -bottom-10 left-24 w-16 h-16 rounded-full 
  bg-gradient-to-tr from-gray-900 to-black border-[6px] border-yellow-500 
  shadow-[0_0_35px_rgba(0,102,255,0.9)] flex items-center justify-center"
        >
          <div className="w-7 h-7 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.6)]" />
        </div>

        <div
          className="absolute -bottom-10 right-24 w-16 h-16 rounded-full 
  bg-gradient-to-tr from-gray-900 to-black border-[6px] border-yellow-500 
  shadow-[0_0_35px_rgba(0,102,255,0.9)] flex items-center justify-center"
        >
          <div className="w-7 h-7 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.6)]" />
        </div>

        {/* Connector Hook */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-5 
          rounded-md bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.6)]"
        />
      </motion.div>
    </section>
  );
}

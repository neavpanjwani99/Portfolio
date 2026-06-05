import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import project1 from "../../assets/project_1.png";
import project2 from "../../assets/project_2.png";
import project3 from "../../assets/project_3.png";
import project4 from "../../assets/project_4.png";
import project5 from "../../assets/project_5.png";
import project6 from "../../assets/project_6.png";
import satrikaImg from "../../assets/Satrika.png";
import strideZeroImg from "../../assets/StrideZero.png";

export default function ProjectsBogie() {
  const projects = [
    {
      name: "Stock Market Dashboard",
      desc: "A real-time stock market dashboard with live charts, trading insights, and premium UI design.",
      img: project1,
      stack: ["React", "Tailwind", "Chart.js", "Node.js"],
      github: null, // Removed as per request
    },
    {
      name: "Satrika - AI Chatbot",
      desc: "Advanced AI chatbot using Gemini APIs with multi-key management and integrated image generation.",
      img: satrikaImg,
      stack: ["React", "Gemini API", "Node.js", "Figma"],
      live: "https://satrika.onrender.com/",
      github: "https://github.com/neavpanjwani99/Satrika.git",
    },
    {
      name: "StrideZero (Unity Game)",
      desc: "Fast-paced 3D game built with Unity. Features smooth mechanics and immersive gameplay.",
      img: strideZeroImg, 
      stack: ["Unity", "C#", "3D Modeling", "Game Design"],
      live: "https://neavpanjwani.itch.io/stridezero",
      github: "https://github.com/neavpanjwani99/StrideZero",
    },
    {
      name: "GiveSync - Donation Platform",
      desc: "Unique donation-matching platform with GSAP, Flask & real-time APIs. Won 3rd rank in competition.",
      img: project6,
      stack: ["Jinja2", "GSAP", "APIs", "Flask", "MySQL"],
      github: "https://github.com/neavpanjwani99/CharityDropDonationMatchingSystem.git",
    },
    {
      name: "Ludo Game (Python)",
      desc: "Multiplayer Ludo game built in Python with real-time dice rolls and interactive gameplay.",
      img: project2,
      stack: ["Python", "Tkinter", "Pygame"],
      github: "https://github.com/neavpanjwani99/ludo-game-.git",
    },
    {
      name: "Veena Groups Website",
      desc: "Corporate website developed during internship. Highlighting professional layout and responsiveness.",
      img: project3,
      stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
      github: null,
    },
    {
      name: "Property Management System",
      desc: "Full-featured web system for property rentals and sales with real-time functionality.",
      img: project4,
      stack: ["HTML", "Tailwind", "Bootstrap", "JavaScript", "PHP", "APIs"],
      github: null,
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-x-auto no-scrollbar flex items-center px-10 pt-16 pb-20 space-x-10"
    >

      <div className="flex space-x-16">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            viewport={{ once: true }}
            className="relative min-w-[400px] max-w-[400px] h-[500px] rounded-3xl 
              bg-gradient-to-br from-[#1A1A2E]/90 to-[#0B0B0D]/95 border-2 border-yellow-500/30 
              shadow-xl overflow-hidden group"
          >
            {/* Project Thumbnail (Window) */}
            <div className="relative w-full h-1/2 flex items-center justify-center">
              <div
                className="relative w-[85%] h-[90%] 
                  rounded-t-[50px] rounded-b-3xl 
                  border-[3px] border-yellow-500/30 
                  shadow-lg 
                  overflow-hidden bg-[#0B0B0D]/70"
              >
                {/* Image inside window */}
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover opacity-95 
                 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Glass reflection */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr 
                    from-white/25 via-transparent to-white/10 
                    opacity-30 pointer-events-none"
                />

                {/* Premium Yellow Dots (half inside-half outside) */}
                <div
                  className={`absolute -bottom-4 left-10 w-10 h-10 
                  rounded-full bg-yellow-400 border-2 border-yellow-500/50 
                  shadow-md 
                  ${hovered === i ? "scale-125 brightness-125" : "scale-100"} 
                  transition-transform duration-300`}
                />
                <div
                  className={`absolute -bottom-4 right-10 w-10 h-10 
                  rounded-full bg-yellow-400 border-2 border-yellow-500/50 
                  shadow-md 
                  ${hovered === i ? "scale-125 brightness-125" : "scale-100"} 
                  transition-transform duration-300`}
                />
              </div>
            </div>

            {/* Bogie Door Animation */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: hovered === i ? "-100%" : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-b from-yellow-600/40 to-yellow-800/40 backdrop-blur-md"
            />

            {/* Project Content */}
            {/* Project Content */}
            <div className="p-6 flex flex-col h-1/2">
              <div className="flex-1">
                <h3 className="text-xl font-logo font-extrabold text-yellow-400 mb-2">
                  {project.name}
                </h3>
                <p className="text-white/80 text-xs mb-3 leading-snug line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-yellow-500/10 text-amber-300 border border-yellow-500/30 shadow-[0_0_5px_rgba(255,215,0,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-center mt-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-1.5 rounded-lg 
                      bg-yellow-400/20 border border-yellow-400/50 text-yellow-300 text-sm 
                      font-semibold hover:bg-yellow-400 hover:text-black transition 
                      shadow-[0_0_12px_rgba(255,215,0,0.8)]"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-1.5 rounded-lg 
                      bg-yellow-400/20 border border-yellow-400/50 text-yellow-300 text-sm 
                      font-semibold hover:bg-yellow-400 hover:text-black transition 
                      shadow-[0_0_12px_rgba(255,215,0,0.8)]"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Wheels */}
            <div className="absolute -bottom-10 left-14 w-14 h-14 rounded-full bg-blue-500 shadow-[0_0_40px_rgba(0,102,255,0.9)]" />
            <div className="absolute -bottom-10 right-14 w-14 h-14 rounded-full bg-blue-500 shadow-[0_0_40px_rgba(0,102,255,0.9)]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

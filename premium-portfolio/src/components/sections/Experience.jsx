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
      accent: "from-blue-600 to-cyan-500",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen pt-20 pb-12 px-6 flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500 mb-16 drop-shadow-md"
      >
        My Journey
      </motion.h2>

      <div className="max-w-5xl w-full space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="relative group"
          >
            {/* Timeline Line (for multiple experiences later) */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400/50 to-transparent -translate-x-1/2 hidden md:block" />

            {/* Experience Card */}
            <div className="relative glass border border-yellow-500/20 rounded-3xl p-8 shadow-xl hover:border-yellow-500/40 transition-all duration-500 overflow-hidden">
              {/* Animated Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${exp.accent} shadow-sm`} />
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-3xl font-logo font-bold text-white mb-2 flex items-center gap-3 tracking-wide">
                    <FaBuilding className="text-yellow-400 text-2xl" /> {exp.company}
                  </h3>
                  <p className="text-xl text-yellow-300 font-semibold">{exp.role}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
                  <FaCalendarAlt className="text-yellow-400" /> {exp.duration}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Points List */}
                <ul className="space-y-4">
                  {exp.details.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-3 text-white/80 leading-relaxed"
                    >
                      <FaCheckCircle className="text-yellow-400 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Verification Documents */}
                <div className="space-y-6">
                  <h4 className="text-lg font-logo font-bold text-white flex items-center gap-2 tracking-widest">
                    <FaAward className="text-yellow-400" /> Verifications
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {exp.docs.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-yellow-400/10 hover:border-yellow-400/50 transition-all"
                      >
                        <span className="text-white/90 group-hover/btn:text-yellow-400 font-medium transition-colors">
                          {doc.name}
                        </span>
                        <FaExternalLinkAlt className="text-white/40 group-hover/btn:text-yellow-400 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Station Symbol (Train Theme) */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-yellow-400/5 rounded-full border-4 border-yellow-400/10 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full border-2 border-yellow-400/20 animate-ping" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rail Track Symbol at bottom */}
      <div className="mt-20 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-12">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="w-1 h-6 bg-gray-700 -rotate-12" />
           ))}
        </div>
      </div>
    </section>
  );
}

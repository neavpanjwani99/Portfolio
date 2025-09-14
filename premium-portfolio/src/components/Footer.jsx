import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative text-white py-14 px-8 mt-0 overflow-hidden rounded-t-2xl backdrop-blur-xl bg-[rgba(15,15,25,0.7)] border-t border-royalGold/20 shadow-[0_-2px_10px_rgba(255,215,0,0.05)]">

      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-royalGold rounded-full opacity-60"
            initial={{
              x: Math.random() * 100 + "vw",
              y: -10,
            }}
            animate={{
              y: ["-5vh", "110vh"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left: Signature with Crown */}
        <motion.div
          className="flex items-center gap-3 gold-text text-xl font-semibold relative"
          whileHover={{ scale: 1.05 }}
        >
          {/* Aura behind crown */}
          <motion.div
            className="absolute -left-10 -top-6 w-20 h-20 rounded-full bg-gradient-to-tr from-royalGold/40 to-royalPurple/30 blur-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          {/* Crown Icon */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Crown className="text-royalGold drop-shadow-sm" size={34} />
          </motion.div>
          <span className="ml-2">
            Made with <span className="text-red-500">Love & Madness </span> by Neav
          </span>
        </motion.div>

        {/* Right: Quick Links */}
        <nav className="flex gap-8 text-sm font-medium">
          {["Home", "About", "Projects", "Skills", "Contact", "Certificates"].map((link) => (
            <Link key={link} to={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
              <motion.div
                className="relative text-gray-300 transition group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-royalGold to-royalPurple transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </Link>
          ))}
        </nav>

      </div>

      {/* Bottom: Elegant Static Text */}
      <div className="mt-10 text-center text-xs text-gray-400">
        <p className="tracking-wide">
          © 2025 Neav | All Rights Reserved Crafted with Royal Vibes
        </p>
      </div>
    </footer>
  );
}

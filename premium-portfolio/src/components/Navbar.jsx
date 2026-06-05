import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" },
  { path: "/certificate", label: "Certificates" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8`}
      >
        <nav
          className={`relative mx-auto max-w-7xl glass gold-border rounded-2xl mt-2 ${
            scrolled ? "py-2" : "py-3"
          } shadow-md border border-[rgba(255,215,0,0.1)] bg-[linear-gradient(135deg,rgba(26,42,108,.30),rgba(92,37,141,.30))]`}
        >
          {/* Particles Background */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-1.5 h-1.5 bg-royalGold rounded-full opacity-70"
                initial={{
                  x: Math.random() * 100 + "vw",
                  y: -10,
                }}
                animate={{
                  y: ["-5vh", "120%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative flex items-center justify-between gap-2 px-3 sm:px-5">
            {/* Left: Brand */}
            <Link
              to="/"
              className="select-none focus:outline-none"
              aria-label="Go to Home"
            >
              <span className="text-2xl font-extrabold font-logo gold-text hover:animate-goldPulse drop-shadow">
                Neav<span className="text-[#FFD700]">.</span>
              </span>
            </Link>

            {/* Center Links (desktop) */}
            <ul className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-sm font-medium transition-colors link-underline focus:outline-none ${
                        isActive ? "text-[#FFD700]" : "text-white/90 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right: Burger (mobile) */}
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="md:hidden group relative size-10 grid place-items-center rounded-xl glass gold-border"
            >
              <div className="w-6">
                <span className="block h-[2px] w-6 bg-[#FFD700] mb-1"></span>
                <span className="block h-[2px] w-6 bg-[#FFD700] mb-1"></span>
                <span className="block h-[2px] w-6 bg-[#FFD700]"></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-[78%] max-w-xs glass gold-border border-l border-[rgba(255,215,0,0.15)] bg-[linear-gradient(180deg,rgba(26,42,108,.35),rgba(92,37,141,.35))] shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          } p-6 flex flex-col gap-6`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold gold-text">Neav.</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="size-9 grid place-items-center rounded-xl glass gold-border"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="#FFD700"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <ul className="mt-2 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `w-full block text-base font-medium transition link-underline ${
                      isActive ? "text-[#FFD700]" : "text-white/90 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}

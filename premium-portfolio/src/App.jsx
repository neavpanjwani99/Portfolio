import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import CrownEasterEgg from "./components/CrownEasterEgg.jsx";
import BackgroundParticles from "./components/BackgroundParticles.jsx";

// Pages / Sections
import LandingPage from "./components/sections/LandingPage.jsx";
import AboutMe from "./components/sections/AboutMe.jsx";
import Projects from "./components/sections/Projects.jsx";
import Skills from "./components/sections/Skills.jsx";
import Contact from "./components/sections/Contact.jsx";
import Certificate from "./components/sections/certificate.jsx";
import Experience from "./components/sections/Experience.jsx";
import AIChatbot from "./components/AIChatbot.jsx";

import "./index.css";

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* Background / Global Effects */}
      <BackgroundParticles />
      <AIChatbot />
      <CustomCursor />
      <CrownEasterEgg />

      {/* Navigation */}
      <Navbar />

      {/* Main Page Routes */}
      <main className="pt-16 text-gray-900 min-h-screen bg-gradient-to-b from-[#1A2A6C] via-[#0B0B0D] to-[#0B0B0D]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

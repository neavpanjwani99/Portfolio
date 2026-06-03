import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/profile_mesh.png";

export default function InteractiveParticleProfile() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const particles = [];
    const PARTICLE_COUNT = 150;
    const MAX_DISTANCE = 95;

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 100,
      hover: false
    };

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        baseX: 0,
        baseY: 0,
        size: Math.random() * 2 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles naturally
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Liquid / Fluid mouse repel
        if (mouse.hover) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const pushX = (dx / distance) * force * 4;
            const pushY = (dy / distance) * force * 4;
            
            p.x -= pushX;
            p.y -= pushY;
          }
        }

        // Keep particles within bounds after push
        if (p.x < 0) p.x = 0;
        if (p.x > width) p.x = width;
        if (p.y < 0) p.y = 0;
        if (p.y > height) p.y = height;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200, 200, 200, 0.8)";
        ctx.fill();

        // Draw connecting lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(180, 180, 180, ${0.8 - (dist / MAX_DISTANCE) * 0.8})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.hover = true;
    };

    const handleMouseLeave = () => {
      mouse.hover = false;
    };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] group cursor-crosshair"
        style={{
          borderRadius: "50%",
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.2)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* The Real Profile Image */}
        <img
          src={profileImg}
          alt="Neav Panjwani"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark overlay to make connecting lines pop out */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Interactive Connecting Lines Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        />
      </motion.div>
    </div>
  );
}

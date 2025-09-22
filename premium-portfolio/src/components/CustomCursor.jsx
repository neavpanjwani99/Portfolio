import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    // Detect hover elements
    const hoverables = document.querySelectorAll("a, button, .hoverable");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => setHover(true));
      el.addEventListener("mouseleave", () => setHover(false));
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-2 border-yellow-400 shadow-[0_0_10px_2px_rgba(255,215,0,0.4)] transition-transform duration-200 ease-out ${
        hover ? "scale-150 bg-yellow-400/20" : "scale-100"
      }`}
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
        width: "24px",
        height: "24px",
      }}
    />
  );
}

import { useEffect, useState } from "react";

export default function CrownEasterEgg() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key.toLowerCase() === "n") {
        setShow(true);
        setTimeout(() => setShow(false), 3000);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return show ? (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 text-6xl animate-bounce z-50">
      👑
    </div>
  ) : null;
}

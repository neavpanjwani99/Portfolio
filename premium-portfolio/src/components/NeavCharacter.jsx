import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function NeavCharacter() {
  const svgRef = useRef(null);
  const location = useLocation();
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [blink, setBlink] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey! I'm Neav's AI. Ask me anything 👋" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [showThought, setShowThought] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setShowThought(true);
    const timer = setTimeout(() => {
      setShowThought(false);
      setIsInitialLoad(false);
    }, 6000); // Only show for 6 seconds
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const getThought = () => {
    let msg = "";
    switch (location.pathname) {
      case "/":
        return "So you actually showed up. Interesting choice.";

      case "/about":
        return "Trying to read me? I'm not that simple.";

      case "/projects":
        return "Built different. Judge if you can.";

      case "/skills":
        return "Skills don't talk. My code does.";

      case "/experience":
        return "6 months. Real work. Real impact.";

      case "/certificates":
        return "Proof? Yeah, I've got receipts.";

      case "/contact":
        return "Got something worth my time? Talk.";

      default:
        msg = "Even I don't know where you are.";
    }
    return isInitialLoad ? `I am CIPHER. ${msg}` : msg;
  };

  // Mouse tracking — direct DOM manipulation for high performance (no React state lag)
  useEffect(() => {
    let animationFrameId;
    const handleMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const svg = svgRef.current;
        if (!svg) return;
        const rect = svg.getBoundingClientRect();
        const scaleX = 130 / rect.width;
        const scaleY = 155 / rect.height;
        const mx = (e.clientX - rect.left) * scaleX;
        const my = (e.clientY - rect.top) * scaleY;

        const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
        const MAX = 3.5;

        const ldx = clamp((mx - 44) / 60 * MAX, -MAX, MAX);
        const ldy = clamp((my - 88) / 60 * MAX, -MAX, MAX);
        const rdx = clamp((mx - 86) / 60 * MAX, -MAX, MAX);
        const rdy = clamp((my - 88) / 60 * MAX, -MAX, MAX);

        if (leftEyeRef.current) leftEyeRef.current.style.transform = `translate(${ldx}px, ${ldy}px)`;
        if (rightEyeRef.current) rightEyeRef.current.style.transform = `translate(${rdx}px, ${rdy}px)`;
      });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Blink loop
  useEffect(() => {
    const loop = () => {
      const d = 2500 + Math.random() * 3000;
      setTimeout(() => {
        setBlink(true);
        setTimeout(() => { setBlink(false); loop(); }, 120);
      }, d);
    };
    loop();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");

    const newMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${backendUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      });
      const data = await res.json();

      if (res.ok) {
        setMessages(m => [...m, { role: "assistant", content: data.reply }]);
      } else {
        setMessages(m => [...m, { role: "assistant", content: `[ERR] ${data.error || 'Connection Failed'}` }]);
      }
    } catch {
      setMessages(m => [...m, { role: "assistant", content: "[CRITICAL ERR] Backend connection refused. Is the server running?" }]);
    }
    setLoading(false);
  }

  // Eye white almond path (half-lid droopy shape)
  // Left: centered at 44,88 | Right: centered at 86,88
  const EYE_W = 22, EYE_H = 11;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        // @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes chatIn { from{opacity:0;transform:translateY(14px) scale(.96)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes scan { 0%{top:0} 100%{top:100%} }
        @keyframes floatThought { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-4px) scale(1.02)} }
        @keyframes hairSway { 
          0%, 100% { transform: rotate(0deg) translateY(0px) scaleY(1); } 
          50% { transform: rotate(3deg) translateY(1px) scaleY(1.03); } 
        }
        .hair-layer { animation: hairSway 2.5s ease-in-out infinite; transform-origin: 65px 64px; }
        .nc { cursor:pointer; }
        .nc:hover .nc-tip { opacity:1 !important; }
        .nc-send:hover { background:#fff !important; }

        .thought-cloud {
          position: absolute;
          bottom: 125%;
          right: 30px; /* Anchors the cloud so it expands leftward into the screen */
          background: #0d1b2e;
          border: 1px solid #00d4bb;
          box-shadow: 0 0 15px rgba(0, 212, 187, 0.15);
          color: #e0e0e0;
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          padding: 10px 16px;
          border-radius: 30px;
          white-space: nowrap;
          pointer-events: none;
          animation: floatThought 4s ease-in-out infinite;
          z-index: 50;
        }
        .thought-cloud::before {
          content: '';
          position: absolute;
          bottom: -15px;
          right: 30px;
          width: 10px;
          height: 10px;
          background: #0d1b2e;
          border: 1px solid #00d4bb;
          border-radius: 50%;
        }
        .thought-cloud::after {
          content: '';
          position: absolute;
          bottom: -30px;
          right: 32px;
          width: 5px;
          height: 5px;
          background: #0d1b2e;
          border: 1px solid #00d4bb;
          border-radius: 50%;
        }
      `}</style>

      <div style={{ position: "fixed", bottom: 3, right: 20, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>

        {/* ── Chat Panel ── */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              key="chatbox"
              initial={{ opacity: 0, scale: 0.4, y: 60, x: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.4, y: 60, x: 30 }}
              transition={{ type: "spring", damping: 18, stiffness: 250 }}
              style={{ transformOrigin: "bottom right", width: 300, height: 390, background: "#06090f", border: "1px solid #f5c518", borderRadius: 12, display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 0 36px rgba(245,197,24,0.13)", position: "relative" }}
            >
              <div style={{ position: "absolute", left: 0, right: 0, height: 1.5, background: "linear-gradient(90deg,transparent,#00c9b155,transparent)", animation: "scan 4s linear infinite", pointerEvents: "none", zIndex: 2 }} />
              <div style={{ background: "#f5c518", padding: "9px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 10, fontWeight: 700, color: "#0a0d1a", letterSpacing: 1.5 }}>CIPHER // ONLINE</span>
                <button onClick={() => setChatOpen(false)} style={{ background: "none", border: "none", color: "#0a0d1a", fontSize: 15, cursor: "pointer", fontWeight: "bold" }}>✕</button>
              </div>
              <div style={{ flex: 1, overflowY: "auto", padding: 12, display: "flex", flexDirection: "column", gap: 8, scrollbarWidth: "thin", scrollbarColor: "#f5c51833 transparent" }}>
                {messages.map((m, i) => (
                  <div key={i} style={{ background: m.role === "user" ? "#f5c518" : "#0d1b2e", color: m.role === "user" ? "#0a0d1a" : "#e0e0e0", border: m.role === "assistant" ? "1px solid #f5c51822" : "none", borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px", padding: "7px 11px", fontSize: 11, fontFamily: "'Share Tech Mono',monospace", maxWidth: "86%", alignSelf: m.role === "user" ? "flex-end" : "flex-start", lineHeight: 1.55, wordBreak: "break-word", whiteSpace: "pre-wrap" }}>
                    {m.content}
                  </div>
                ))}
                {loading && <div style={{ color: "#f5c51877", fontFamily: "'Share Tech Mono',monospace", fontSize: 11 }}>thinking...</div>}
                <div ref={messagesEndRef} />
              </div>
              <div style={{ display: "flex", borderTop: "1px solid #f5c51822", background: "#040810" }}>
                <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="ask CIPHER..." style={{ flex: 1, background: "none", border: "none", outline: "none", padding: "10px 12px", color: "#e0e0e0", fontFamily: "'Share Tech Mono',monospace", fontSize: 11, caretColor: "#f5c518" }} />
                <button className="nc-send" onClick={sendMessage} style={{ background: "#f5c518", border: "none", padding: "0 13px", fontFamily: "'Share Tech Mono',monospace", fontSize: 10, fontWeight: 700, color: "#0a0d1a", cursor: "pointer", transition: "background .18s", letterSpacing: 1 }}>SEND</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Character ── */}
        <div className="nc" onClick={() => setChatOpen(o => !o)} style={{ position: "relative", userSelect: "none" }}>

          {/* Thought Bubble Cloud */}
          {!chatOpen && showThought && (
            <div className="thought-cloud">
              {getThought()}
            </div>
          )}

          {/* Hover tip */}
          {!chatOpen && (
            <div className="nc-tip" style={{ opacity: 0, transition: "opacity .2s", position: "absolute", bottom: "106%", right: 0, background: "#0d1b2e", border: "1px solid #f5c518", color: "#f5c518", fontFamily: "'Share Tech Mono',monospace", fontSize: 9, padding: "4px 10px", borderRadius: "8px 8px 0 8px", whiteSpace: "nowrap", letterSpacing: 1, pointerEvents: "none", zIndex: 10 }}>
              click to chat
            </div>
          )}

          <svg
            ref={svgRef}
            width="130" height="155"
            viewBox="0 0 130 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ground shadow */}
            <ellipse cx="65" cy="151" rx="30" ry="4.5" fill="#f5c51815" />

            {/* ── Neck + Shoulders ── */}
            <rect x="53" y="120" width="24" height="16" rx="4" fill="#d4956a" />
            <path d="M8 155 Q12 130 38 124 L53 120 Q65 128 65 128 Q65 128 77 120 L92 124 Q118 130 122 155Z" fill="#0d1b3e" />
            <path d="M53 120 Q65 132 77 120 L79 155 L51 155Z" fill="#07101e" />
            <path d="M53 120 Q65 130 77 120" stroke="#f5c51855" strokeWidth="1.2" fill="none" strokeLinecap="round" />

            {/* ── Head ── big round flat style */}
            <circle cx="65" cy="78" r="46" fill="#d4956a" />

            {/* Ear L */}
            <ellipse cx="20" cy="80" rx="8" ry="10" fill="#d4956a" />
            <ellipse cx="20" cy="80" rx="4.5" ry="6" fill="#c07850" />
            {/* Earring L */}
            <circle cx="20" cy="87" r="2.2" fill="#f5c518" />

            {/* Ear R */}
            <ellipse cx="110" cy="80" rx="8" ry="10" fill="#d4956a" />
            <ellipse cx="110" cy="80" rx="4.5" ry="6" fill="#c07850" />

            {/* ── Hair — short textured on top ── */}
            <g className="hair-layer">
              {/* Base hair shape */}
              <path d="M22 64 Q30 30 65 28 Q100 30 108 64 Q100 52 65 50 Q30 52 22 64Z" fill="#1a0e00" />
              {/* Hair texture strokes */}
              <path d="M38 44 Q50 36 65 34" stroke="#3a2512" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M65 34 Q80 36 90 44" stroke="#3a2512" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M30 56 Q38 46 50 42" stroke="#3a2512" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M80 42 Q92 46 100 56" stroke="#3a2512" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </g>

            {/* ── EYEBROWS — sleek, angled inward ── */}
            {/* Left brow: left end HIGH, right end LOW → inward anger */}
            <rect x="30" y="67" width="28" height="4" rx="2" fill="#2c1b0a" transform="rotate(6 30 67)" />
            {/* Right brow: left end LOW, right end HIGH */}
            <rect x="72" y="67" width="28" height="4" rx="2" fill="#2c1b0a" transform="rotate(-6 72 67)" />

            {/* ── EYES — flat style, half-lid ── */}
            {/* EYES LAYER */}
            {/* Left eye white */}
            {!blink ? (
              <>
                {/* LEFT EYE */}
                <ellipse cx="44" cy="88" rx={EYE_W / 2} ry={EYE_H / 2} fill="#fff8f0" />
                <g ref={leftEyeRef} style={{ transformOrigin: "44px 88px" }}>
                  {/* Left iris with Glow */}
                  <circle cx="44" cy="88" r="5.5" fill="url(#irisL)" filter="drop-shadow(0px 0px 4px #f5c518)" />
                  <circle cx="44" cy="88" r="2.8" fill="#050505" />
                  <circle cx={44 - 1.2} cy={88 - 1.5} r="1.1" fill="rgba(255,255,255,0.9)" />
                </g>

                {/* RIGHT EYE */}
                <ellipse cx="86" cy="88" rx={EYE_W / 2} ry={EYE_H / 2} fill="#fff8f0" />
                <g ref={rightEyeRef} style={{ transformOrigin: "86px 88px" }}>
                  {/* Right iris with Glow */}
                  <circle cx="86" cy="88" r="5.5" fill="url(#irisR)" filter="drop-shadow(0px 0px 4px #f5c518)" />
                  <circle cx="86" cy="88" r="2.8" fill="#050505" />
                  <circle cx={86 - 1.2} cy={88 - 1.5} r="1.1" fill="rgba(255,255,255,0.9)" />
                </g>
              </>
            ) : (
              <>
                {/* BLINK — soft curved line */}
                <path d={`M${44 - EYE_W / 2} 88 Q44 90 ${44 + EYE_W / 2} 88`} stroke="#3a2818" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d={`M${86 - EYE_W / 2} 88 Q86 90 ${86 + EYE_W / 2} 88`} stroke="#3a2818" strokeWidth="2" fill="none" strokeLinecap="round" />
              </>
            )}

            {/* Iris gradients */}
            <defs>
              <radialGradient id="irisL" cx="38%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#00d4bb" />
                <stop offset="40%" stopColor="#c8860a" />
                <stop offset="100%" stopColor="#7a4a00" />
              </radialGradient>
              <radialGradient id="irisR" cx="38%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#00d4bb" />
                <stop offset="40%" stopColor="#c8860a" />
                <stop offset="100%" stopColor="#7a4a00" />
              </radialGradient>
            </defs>

            {/* ── NOSE — 2 small dots like flat design ── */}
            <circle cx="60" cy="103" r="3" fill="#c07850" opacity="0.5" />
            <circle cx="70" cy="103" r="3" fill="#c07850" opacity="0.5" />

            {/* ── MOUTH ── */}
            {chatOpen ? (
              // Open smile with teeth
              <path d="M48 114 Q65 128 82 114 Q65 120 48 114Z" fill="#fff" stroke="#3a2818" strokeWidth="1.5" strokeLinejoin="round" />
            ) : (
              // Default smirk
              <path d="M48 116 Q58 122 68 119 Q76 117 80 112" stroke="#3a2818" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            )}

            {/* ── EYE GLOW ring ── */}
            {!blink && <>
              <ellipse cx="44" cy="88" rx={EYE_W / 2 + 2} ry={EYE_H / 2 + 2} fill="none" stroke="#00d4bb" strokeWidth="0.8" opacity="0.35" />
              <ellipse cx="86" cy="88" rx={EYE_W / 2 + 2} ry={EYE_H / 2 + 2} fill="none" stroke="#00d4bb" strokeWidth="0.8" opacity="0.35" />
            </>}

          </svg>

          {/* Ground glow */}
          <div style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", width: 60, height: 6, borderRadius: "50%", background: "radial-gradient(ellipse,#f5c51828 0%,transparent 70%)" }} />
        </div>

        {/* <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:8, color:"#f5c518", letterSpacing:2, opacity:0.45, textAlign:"center", width:130 }}>[ NEAV.AI ]</div> */}
      </div>
    </>
  );
}

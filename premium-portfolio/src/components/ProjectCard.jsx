import confetti from "canvas-confetti";

export default function ProjectCard({ title }) {
  const launchConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#5C258D", "#1A2A6C"],
    });
  };

  return (
    <div
      onClick={launchConfetti}
      className="hoverable glass gold-border p-6 rounded-xl cursor-pointer"
    >
      <h3 className="gold-text text-xl">{title}</h3>
    </div>
  );
}

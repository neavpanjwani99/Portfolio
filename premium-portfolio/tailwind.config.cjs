/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royalBlue: "#1A2A6C",
        royalPurple: "#5C258D",
        royalGold: "#FFD700",
        deepBlack: "#0B0B0D",
      },
      boxShadow: {
        glowGold: "0 0 15px rgba(255, 215, 0, 0.8)",
      },
      backgroundImage: {
        "royal-gradient": "linear-gradient(135deg, #1A2A6C, #5C258D, #FFD700)",
      },
    },
  },
  plugins: [],
};

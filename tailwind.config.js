/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        floatA: {
          "0%,100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-18px) scale(1.04)" },
        },
        floatB: {
          "0%,100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(14px) scale(0.97)" },
        },
        floatC: {
          "0%,100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(12px)" },
        },
        rotateSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.55s ease both",
        float: "float 3.5s ease-in-out infinite",
        floatA: "floatA 8s ease-in-out infinite",
        floatB: "floatB 10s ease-in-out infinite",
        floatC: "floatC 7s ease-in-out infinite",
        rotateSlow: "rotateSlow 30s linear infinite",
      },
    },
  },
  plugins: [],
};

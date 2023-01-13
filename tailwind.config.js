/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4cffa3",
      },
      animation: {
        "scan": "scan 4s ease-in-out infinite",
        "scan-line": "scan-line 4s ease-in-out infinite",
      },
      keyframes: {
        "scan": {
          "0%, 100%": { height: "0%" },
          "50%": { height: "100%" },
        },
        "scan-line": {
          "0%, 100%": { top: "0%" },
          "50%": { top: "100%" },
        }
      }
    },
  },
  plugins: [],
}

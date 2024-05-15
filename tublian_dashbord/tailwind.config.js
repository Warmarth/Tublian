/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    fontFamily: {
      display: ["Platypi", "serif"],
    },
  },
  plugins: [require("daisyui")],
};

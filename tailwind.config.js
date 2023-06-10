/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-custom": "#8F19E8",
        "meaning-color": "#757575",
        "keyboard-color": "#2D2D2D",
        "night-black": "#050505",
        "line-dark" : "3A3A3A" ,
      },
      spacing: {
        "5px": "5px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        inconsolata: ['Inconsolata', 'monospace'],
        lora: ["Lora", "serif"],
      },
      screens: {
        tablet: "768px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};

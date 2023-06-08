/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-custom": "#8F19E8",
        "meaning-color": "#757575",
        "keyboard-color": "#2D2D2D",
      },
      spacing: {
        "5px": "5px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        inconsolata: ['Inconsolata', 'monospace'],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};

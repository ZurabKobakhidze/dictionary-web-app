/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'purple-custom': '#8F19E8'
      },
      spacing: {
        '5px': '5px'
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#0b1120",
        bodytextColor: "rgba(255, 255, 255, 0.85) ",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

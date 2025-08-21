/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        accent: "#9CA3AF"
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
};

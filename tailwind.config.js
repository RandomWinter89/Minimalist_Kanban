/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      boxShadow: {
        customShadow: "3px 3px #393A3F",
      }
    },
  },
  plugins: ["tailwindcss ,autoprefixer"],
}


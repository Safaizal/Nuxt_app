/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
    fontfamily: {
      "monospace": ["monospace"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
}


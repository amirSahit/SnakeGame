/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}", "./index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        21: "repeat(21, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        21: "repeat(21, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

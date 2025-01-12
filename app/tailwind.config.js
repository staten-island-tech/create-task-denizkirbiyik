/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./js/main.js"],
  theme: {
    extend: {
      colors: {
        "custom-dark-blue": "#12719e",
        "custom-light-blue": "#46c1e0",
      },
    },
  },
  plugins: [],
};

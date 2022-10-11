/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
     themes: ["cupcake"],
  }
  plugins: [require("daisyui")],
};

//https://www.youtube.com/watch?v=sNXfI3woBEw
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "under-construction":
          "linear-gradient(rgba(29, 38, 113, 0.8), rgb(52 9 23 / 80%)), url('/img/under-construction.jpeg')",
      },
    },
  },
  plugins: [],
};

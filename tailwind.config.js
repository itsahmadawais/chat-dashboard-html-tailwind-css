/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cpink: {
          100: "#fff3f1",
        },
        cgray: {
          100: "#f7f7f9",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi"],
      },
    },
  },
  plugins: [],
};

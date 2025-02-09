/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a62133",
          secondary: "#cb3035",
          accent: "#f9423a",
          neutral: "#fa7b75",
          "base-100": "#fcb3b0",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
};

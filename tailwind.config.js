/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5acbf4",

          "secondary": "#8dbde8",

          "accent": "#6f2ff9",

          "neutral": "#2E2C3A",

          "base-100": "#F6F6F9",

          "info": "#ACD8E7",

          "success": "#107A51",

          "warning": "#F5D670",

          "error": "#EA2E31",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
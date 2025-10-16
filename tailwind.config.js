/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./LandingAnalyticsCore.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#b2d4ff",
          300: "#84b8ff",
          400: "#5596f6",
          500: "#2a6fdb",
          600: "#1855b7",
          700: "#0f4293",
          800: "#0b3270",
          900: "#07224d",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        primaryVariant: "#e5e5e5",
        secondary: "#477998",
        secondaryVariant: "#001427",
        accent: "#ef7a85",
        backgroundDark: "#000B14",
      },
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        body: ["Afacad Flux", "sans-serif"],
      },
    },
  },
  plugins: [],
};

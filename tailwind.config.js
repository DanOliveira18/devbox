/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F71D77",
          400: "#bd175c",
          800: "#840036",
        },
        secundary: {
          100: "#801191",
        },
        "dark-blue": "#091529",
        "light-blue": "#182947",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

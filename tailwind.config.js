/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F71D77",
        },
        "dark-blue": "#091529",
        "light-blue": "#182947",
      },
    },
  },
  plugins: [],
};

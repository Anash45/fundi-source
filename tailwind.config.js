/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "night-black": "#1c1d24",
        "bg-indego": "rgb(239 239 255)",
        "blue-border": "rgb(240 245 255)",
        "blue-600": "rgb(237 244 254)",
        "green-60": "rgb(230 245 240)",
        "green": "rgb(34 43 40)",
        "blue": "rgb(23 33 53)",




      },
      fontFamily: {
        axiformaa: ["Axiforma Regular", "sans-serif"], 
      },
      screens: {
        "xs": "500px"
      }
    },
  },
  plugins: [],
};

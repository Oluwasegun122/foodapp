/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width:{
        "width-size":"650px"
      }
    },
  },
  plugins: [require("daisyui")],
};

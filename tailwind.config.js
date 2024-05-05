/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D84339",
        secondary: "#C8D7D2",
        gray: "#F4F2F0",
        ash: "#373234",
      },
    },
  },
  plugins: [],
};

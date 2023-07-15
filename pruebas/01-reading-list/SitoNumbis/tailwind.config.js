/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#dc143c",
      "primary-dark": "#9a0e2a",
      secondary: "dodgerblue",
      "dark-bg": "#1b1b1b",
      "dark-bg-opacity": "#1b1b1b8a",
      "dark-alt-bg": "#222222",
      "dark-alt-bg-opacity": "#222222ee",
      "dark-text": "#fbfbfb",
      "dark-alt-text": "#ababab",
    },
    extend: {},
  },
  plugins: [],
};
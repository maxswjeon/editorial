/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "notion-default": "#000000",
        "notion-red": "#e03e3e",
        "notion-pink": "#ad1a72",
        "notion-blue": "#0b6e99",
        "notion-purple": "#6940a5",
        "notion-teal": "#4d6461",
        "notion-yellow": "#dfab01",
        "notion-orange": "#d9730d",
        "notion-brown": "#64473a",
        "notion-gray": "#9b9a97",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

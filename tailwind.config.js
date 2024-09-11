/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue-900": "#0a2540", // Dark Blue
        "blue-900": "#1b4d8e",      // Darker Blue for the background of inactive boxes
        "blue-500": "#214c85",      // Lighter Blue for active boxes
      },
    },
  },
  plugins: [],
}


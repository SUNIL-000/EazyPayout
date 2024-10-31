/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-once': 'ping 1s ease-in-out 1', // Adjust timing as needed
      },
    },
  },
  plugins: [],
}


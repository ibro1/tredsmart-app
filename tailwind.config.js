/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#93c5fd',
          500: '#3b82f6',
          700: '#1d4ed8',
        },
        secondary: {
          900: '#111827',
        },
        success: {
          500: '#22c55e',
        }
      },
    },
  },
  plugins: [],
}
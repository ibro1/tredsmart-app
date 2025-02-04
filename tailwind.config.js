/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: 'rgb(147, 197, 253)',
          500: 'rgb(59, 130, 246)',
          700: 'rgb(29, 78, 216)',
        },
        secondary: {
          900: 'rgb(17, 24, 39)',
        },
        success: {
          500: 'rgb(34, 197, 94)',
        }
      }
    }
  },
  plugins: [],
}

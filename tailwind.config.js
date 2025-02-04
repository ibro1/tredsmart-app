/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: 'rgb(var(--color-primary-300))',
          500: 'rgb(var(--color-primary-500))',
          700: 'rgb(var(--color-primary-700))',
        },
        secondary: {
          900: 'rgb(var(--color-secondary-900))',
        },
        success: {
          500: 'rgb(var(--color-success-500))',
        }
      }
    }
  },
  plugins: [],
}
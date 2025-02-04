/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
        },
        secondary: {
          900: 'rgb(var(--color-secondary-900) / <alpha-value>)',
        },
        success: {
          500: 'rgb(var(--color-success-500) / <alpha-value>)',
        }
      }
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addBase, addUtilities, theme }) {
      addBase({
        ':root': {
          '--color-primary-300': '#93c5fd',
          '--color-primary-500': '#3b82f6',
          '--color-primary-700': '#1d4ed8',
          '--color-secondary-900': '#111827',
          '--color-success-500': '#22c55e',
        },
      });
      
      addUtilities({
        '.bg-secondary-900': {
          'background-color': 'var(--color-secondary-900)',
        },
        '.bg-primary-300': {
          'background-color': 'var(--color-primary-300)',
        },
        '.bg-primary-500': {
          'background-color': 'var(--color-primary-500)',
        },
        '.bg-primary-700': {
          'background-color': 'var(--color-primary-700)',
        },
        '.bg-success-500': {
          'background-color': 'var(--color-success-500)',
        },
        '.bg-gradient-primary': {
          'background': 'linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-700) 100%)',
        },
      });
    }
  ],
}
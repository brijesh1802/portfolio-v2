/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Red Hat Text"', 'system-ui', 'sans-serif'],
        display: ['"Red Hat Display"', 'system-ui', 'sans-serif'],
        mono: ['"Red Hat Mono"', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#e11d48',
          soft: '#fb7185',
          muted: '#fda4af',
          deep: '#9f1239',
        },
      },
    },
  },
  plugins: [],
}
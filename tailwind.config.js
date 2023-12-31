/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateCol: {
        'auto-fit': 'repeat(auto-fit, minmax(15rem, 1fr))',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-color-dark': '#777',
        'primary': '#00A3E1',
        'dark': '#2C2D2F',
        'dark-theme-text':'#E1E1E1' 
      },
      screens: {
        'xs': '400px',
        // => @media (min-width: 400px) { ... }
      },
      fontSize: {
        'font-inherit': 'inherit'
      },
      fontFamily: {
        'playfair': ['var(--font-playfair)'],
        'roboto': ['var(--font-roboto)'],
        'jacques': ['var(--font-jacques)']
      }

    },
  },
  plugins: [],
}

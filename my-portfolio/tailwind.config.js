/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    colors: {
      'neutralColor1': '#000000',
      'neutralColor2': '#C9C9C9',
      'primaryColor1': '#FFFFFF',
      'primaryColor2': '#FFE5DF',
      'secondaryColor1': '#AE6E60',
      'accentColor1': '#7F5539',
    },

  },
  plugins: [],
}


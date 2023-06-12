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
      transparent: 'transparent',
      'neutral-color-1': '#000000',
      'neutral-color-2': '#C9C9C9',
      'primary-color-1': '#FFFFFF',
      'primary-color-2': '#FFE5DF',
      'secondary-color-1': '#AE6E60',
      'accent-color-1': '#7F5539',
    },
    backgroundImage: {
      'home-texture': "url('./assets/coffee.jpg')",
    }
  },
  plugins: [],
}


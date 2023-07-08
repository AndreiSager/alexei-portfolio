/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {    
        colors: {
        transparent: 'transparent',
        'neutral-1': '#000000',
        'neutral-2': '#C9C9C9',
        'neutral-3': '#2F4858',
        'neutral-4': '#B68769',
        'primary-1': '#FFFFFF',
        'primary-2': '#FFE5DF',
        'secondary-1': '#AE6E60',
        'accent-1': '#7F5539',
        'instagram' : '#C13584',
        'facebook' : '#1877f2',
        'linkedin' : '#0e76a8',
      },
    },
    backgroundImage: {
      'home-texture': "url('https://ik.imagekit.io/alyujsrzv/Alexei-Portfolio/tr:w-1000/compressed/coffee2.jpg?updatedAt=1687253258998?width=1000 1000w')",
    }
  },
  plugins: [],
}


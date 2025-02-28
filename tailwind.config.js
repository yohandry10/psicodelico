/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sapo-green': '#00cc66',
        'sapo-black': '#000000',
      },
      fontFamily: {
        // Ejemplos:
        press: ['Press Start 2P', 'system-ui'],
        sans: ['Montserrat', 'sans-serif'],

        // Vinculamos las fuentes personalizadas con un "alias" de clase:
        holy: ['HolyStories', 'system-ui'],
        cryo: ['CryoGraffiti-Regular', 'system-ui'],
      },
    },
  },
  plugins: [],
}

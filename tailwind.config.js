/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vt323: ['"VT323"', 'monospace'], // The Minecraft font
      },
      textShadow: {
        mc: '2px 2px 0px #000',
      },
    },
  },
  plugins: [],
}

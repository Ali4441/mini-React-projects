/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['myfont1', 'sans-serif'], // custom naam
      },
    },
  },
  plugins: [],
}


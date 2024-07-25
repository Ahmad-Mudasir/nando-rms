/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleImage: {
        home: 'url("../assets/images/home.png")',
      },
      colors:{
        'red':'#EE3A43',
      }
    },
  },
  plugins: [],
}


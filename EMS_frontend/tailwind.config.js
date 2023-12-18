/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#011E2B',
        secondColor: '#112733',
        whiteColor: '#E8EDEB',
        greenBG: '#00684A',
        lightGreenBG: '#71F6BA',
        greenBorder: '#01EC64',
        greenText: '#01EC64',
        linkText: '#0067FF',
      },
      boxShadow: {
        darkShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
      },
      backgroundImage: {
        loginBG: "url('/images/login-bg.jpg')",
      }
    },
  },
  plugins: [],
}
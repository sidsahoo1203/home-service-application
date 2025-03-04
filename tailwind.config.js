/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        richblack: {
          900: '#111827', // You can replace this with the actual color value you want
        },
      },
    },
    plugins: [],
  }
}
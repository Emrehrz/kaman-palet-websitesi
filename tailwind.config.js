/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "my-lightOrange": "#f28705",
        "my-darkOrange": "#f27405",
        "my-lightBrown": "#8c2703",
        "my-darkBlue": "#101e26",
        "my-gray": "#4d5159",
        "my-lightGray": "#d8dfe3",
        "my-white": "#f7f4eb",
        "my-yellow": "#f2b705",
        "my-black": "#000000",

      },
      backgroundImage: {
        'hero': "url('/img/heroBg.png')",
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      'albert sans': ['Albert Sans', 'sans-serif'], 
      'staatliches': ['Staatliches', 'sans-serif'] 
    },
    colors: {
      main: "#CFDBD5",
      "main-yellow": "#F5CB5C",
      "main-white": "#E8EDDF",
      "main-black": "#242423",
    },
    backgroundImage: {
      'img1': "url('./asset/photo-1635672615876-6370de4424e3.jpg')",
      'img2': "url('./asset/photo-1580595999172-787970a962d8.jpg')",
      'img3': "url('./asset/photo-1657804414355-c9ef6c51283a.jpg')",
      'img4': "url('./asset/photo-1469594292607-7bd90f8d3ba4.jpg')",
      'img5': "url('./asset/photo-1590089349708-9842d3f6ca25.jpg')",
      'pattern-yellow': "url(';/asset/pattern-yellow.png')",
      'pattern-white': "url('./asset/pattern-white.png')",
    }},
  },
  plugins: [],
}


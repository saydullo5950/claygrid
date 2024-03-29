/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      // fontFamily: {
      //   neue: ['Helvetica Neue']
      // },
      colors: {
        brend: {
          coffe: {
            100: '#7F5539',
            200: "#EDE0D4",
          }
        }
      }
    },
    height: {
      "121": "486px"
    },

  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
let colors = require("tailwindcss/colors")

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md', './content/**/*.html', './**/*.toml'],
  theme: {
    extend: {
      colors: {
        neutral: colors.gray,
        positive: colors.green,
        urge: colors.blue,
        warning: colors.yellow,
        info: colors.blue,
        critical: colors.red,
      },
    },
    fontFamily: {
      'sans': ['Source Sans Pro', 'system-ui', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


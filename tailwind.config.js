/** @type {import('tailwindcss').Config} */
let colors = require("tailwindcss/colors")

module.exports = {
  content: ['./layouts/**/*.html', './**/*.md', './content/**/*.html', './**/*.toml'],
  theme: {
    extend: {
      colors: {
        neutral: colors.stone, // Strictly speaking, redundant (this is here to map to the old a17t ~neutral)
        positive: colors.green,
        urge: colors.blue,
        warning: colors.yellow,
        info: colors.blue,
        critical: colors.red,
      },
    },
    fontFamily: {
      'sans': ['Inter', 'system-ui', 'sans-serif'],
      'serif': ['Crimson Text', 'serif'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


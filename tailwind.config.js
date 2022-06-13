const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': {
            backgroundPosition: '0 0'
          },
          '100%': {
            backgroundPosition: '60px 0'
          }
        }
      },
      animation: {
        slide: 'slide 2s linear infinite'
      }
    }
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.tw-table th, .tw-table td': {
          borderWidth: 1
        },
        '.tw-table-lg th, .tw-table-lg td': {
          paddingTop: theme('spacing.6'),
          paddingBottom: theme('spacing.6'),
          paddingLeft: theme('spacing.3'),
          paddingRight: theme('spacing.3')
        },
        '.tw-table-md th, .tw-table-md td': {
          paddingTop: theme('spacing.4'),
          paddingBottom: theme('spacing.4'),
          paddingLeft: theme('spacing.2'),
          paddingRight: theme('spacing.2')
        },
        '.tw-table-sm th, .tw-table-sm td': {
          paddingTop: theme('spacing.2'),
          paddingBottom: theme('spacing.2'),
          paddingLeft: theme('spacing.1'),
          paddingRight: theme('spacing.1')
        },
        '.tw-table-xs th, .tw-table-xs td': {
          paddingTop: theme('spacing.1'),
          paddingBottom: theme('spacing.1'),
          paddingLeft: theme('spacing.0.5'),
          paddingRight: theme('spacing.0.5')
        },
        '.tw-table tr': {
          borderBottomWidth: 1,
          '&:last-child': {
            borderBottomWidth: 0
          }
        }
      })
    })
  ]
}

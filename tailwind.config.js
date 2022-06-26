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
        },
        'bounce-in-right': {
          from: {
            opacity: 0,
            transform: 'translate3d(3000px, 0, 0)'
          },
          '60%': {
            opacity: 1,
            transform: 'translate3d(-25px, 0, 0)'
          },
          '75%': {
            transform: 'translate3d(10px, 0, 0)'
          },
          '90%': {
            transform: 'translate3d(-5px, 0, 0)'
          },
          to: {
            transform: 'none'
          }
        },
        'bounce-in-left': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(-3000px, 0, 0)'
          },
          '60%': {
            opacity: 1,
            transform: 'translate3d(25px, 0, 0)'
          },
          '75%': {
            transform: 'translate3d(-10px, 0, 0)'
          },
          '90%': {
            transform: 'translate3d(5px, 0, 0)'
          },
          to: {
            transform: 'none'
          }
        },
        'bounce-in-up': {
          from: {
            opacity: 0,
            transform: 'translate3d(0, 3000px, 0)'
          },
          '60%': {
            opacity: 1,
            transform: 'translate3d(0, -20px, 0)'
          },
          '75%': {
            transform: 'translate3d(0, 10px, 0)'
          },
          '90%': {
            transform: 'translate3d(0, -5px, 0)'
          },
          to: {
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'bounce-in-down': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, -3000px, 0)'
          },
          '60%': {
            opacity: 1,
            transform: 'translate3d(0, 25px, 0)'
          },
          '75%': {
            transform: 'translate3d(0, -10px, 0)'
          },
          '90%': {
            transform: 'translate3d(0, 5px, 0)'
          },
          to: {
            transform: 'none'
          }
        },
        'toast-progress': {
          '0%': {
            transform: 'scaleX(1)'
          },
          '100%': {
            transform: 'scaleX(0)'
          }
        }
      },
      animation: {
        slide: 'slide 2s linear infinite',
        'bounce-in-right': 'bounce-in-right 0.7s linear',
        'bounce-in-left': 'bounce-in-left 0.7s linear',
        'bounce-in-up': 'bounce-in-up 0.7s linear',
        'bounce-in-down': 'bounce-in-down 0.7s linear',
        'toast-progress': 'toast-progress linear 1 forwards'
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
        },
        '.animate-play-paused': {
          animationPlayState: 'paused'
        }
      })
    })
  ]
}

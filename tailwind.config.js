/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Cabinet Grotesk"', '"Satoshi"', 'system-ui', 'sans-serif'],
        editorial: ['"Panchang"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      colors: {
        cream: {
          50: '#FBF8F3',
          100: '#F6F1E8',
          200: '#EDE4D2',
          300: '#DCCDB0'
        },
        espresso: {
          50: '#3a2e25',
          100: '#2c2219',
          400: '#1f1812',
          700: '#16110c',
          900: '#0d0907'
        },
        sage: {
          400: '#7c8b6a',
          500: '#5d6b4d',
          700: '#3f4a33'
        },
        ember: {
          500: '#c2410c'
        }
      },
      letterSpacing: {
        editorial: '-0.04em',
        eyebrow: '0.22em'
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.32, 0.72, 0, 1)',
        glide: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
}

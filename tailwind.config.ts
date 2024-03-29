import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--roboto)', ...fontFamily.sans],
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xs: { max: '479px' },
      // => @media (max-width: 479px) { ... }
    },
    colors: {
      dark: '#1b1b1b',
      light: '#f5f5f5',
      primary: '#3B82F6',
      primaryDark: '#8B5CF6',
      ...colors,
    },
    backgroundImage: {
      circularLight:
        'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #fff 5px, #fff 100px)',
      circularDark:
        'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #121212 8px, #121212 100px)',
    },
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(20px)' },
          '50%': { transform: 'translateX(0px)' },
        },
      },
      animation: {
        wave: 'wave 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config

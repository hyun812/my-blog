/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        basic: {
          50: '#fafafa',
          100: '#f5f5f5',
          150: '#ededed',
          200: '#e5e5e5',
          250: '#dedede',
          300: '#d4d4d4',
          350: '#b5b5b5',
          400: '#a3a3a3',
          450: '#8a8a8a',
          470: '#808080',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          750: '#363636',
          800: '#262626',
          900: '#171717',
        },
        teal: {
          100: '#e1f5eb',
          200: '#b3e6d6',
          300: '#80d6b4',
          400: '#4bb997',
          500: '#2f9c7a',
          600: '#278f6f',
          700: '#207a63',
          800: '#1a654f',
          900: '#144f44',
          950: '#0e3a36',
        },
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            'h2,h3,h4': {
              'scroll-margin-top': 'var(--scroll-mt)',
            },
            'hr, thead, tbody tr': { borderColor: theme('colors.basic.300') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            'code::before': false,
            'code::after': false,
          },
        },
        dark: {
          css: {
            blockquote: {
              borderLeftColor: theme('colors.basic.700'),
              color: theme('colors.basic.300'),
            },
            'hr, thead, tbody tr': { borderColor: theme('colors.basic.700') },
            'ol li::marker, ul li::marker': {
              color: theme('colors.basic.500'),
            },
          },
        },
      }),
    },
  },
  variants: { typography: ['dark'] },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addComponents, addUtilities }) => {
      addComponents({
        '.text-primary': {
          '@apply text-basic-900 dark:text-basic-200': '',
        },
        '.text-secondary': {
          '@apply text-basic-700 dark:text-basic-350': '',
        },
        '.text-tertiary': {
          '@apply text-basic-600 dark:text-basic-400': '',
        },
        '.text-mute': {
          '@apply text-basic-500 dark:text-basic-470': '',
        },
        '.bg-primary': {
          '@apply bg-basic-50 dark:bg-basic-900': '',
        },
        '.bg-secondary': {
          '@apply bg-basic-150 dark:bg-basic-800': '',
        },
        '.bg-tertiary': {
          '@apply bg-basic-200 dark:bg-basic-750': '',
        },
        '.bg-mute': {
          '@apply bg-basic-250 dark:bg-basic-800': '',
        },
      });
      addUtilities(
        {
          '.no-scrollbar': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',
            /* Firefox */
            'scrollbar-width': 'none',
            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        },
        ['responsive'],
      );
    },
  ],
} satisfies Config;

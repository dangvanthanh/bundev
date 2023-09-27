import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        checkBefore: {
          '0%': {
            width: '4px',
            top: 'auto',
            transform: 'rotate(0)'
          },
          '50%': {
            width: 0,
            top: 'auto',
            transform: 'rotate(0)'
           
          },
          '51%': {
            width: 0,
            top: '8px',
            transform: 'rotate(45deg)'
          },
          '100%': {
            width: '5px',
            top: '8px',
            transform: 'rotate(45deg)'
          }
        },
        checkAfter: {
          '0%': {
            width: '4px',
            top: 'auto',
            transform: 'rotate(0)'
          },
          '50%': {
            width: 0,
            top: 'auto',
            transform: 'rotate(0)'
           
          },
          '51%': {
            width: 0,
            top: '8px',
            transform: 'rotate(-45deg)'
          },
          '100%': {
            width: '10px',
            top: '8px',
            transform: 'rotate(-45deg)'
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
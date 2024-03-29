import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  lightningcss: true,
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      keyframes: {
        checkBefore: {
          '0%': {
            width: '4px',
            top: 'auto',
            transform: 'rotate(0)',
          },
          '50%': {
            width: 0,
            top: 'auto',
            transform: 'rotate(0)',
          },
          '51%': {
            width: 0,
            top: '8px',
            transform: 'rotate(45deg)',
          },
          '100%': {
            width: '5px',
            top: '8px',
            transform: 'rotate(45deg)',
          },
        },
        checkAfter: {
          '0%': {
            width: '4px',
            top: 'auto',
            transform: 'rotate(0)',
          },
          '50%': {
            width: 0,
            top: 'auto',
            transform: 'rotate(0)',
          },
          '51%': {
            width: 0,
            top: '8px',
            transform: 'rotate(-45deg)',
          },
          '100%': {
            width: '10px',
            top: '8px',
            transform: 'rotate(-45deg)',
          },
        },
        firework: {
          '0%': {
            opacity: 1,
            boxShadow:
              '0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0',
          },
          '30%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
            boxShadow:
              '0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0, 14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0, -14px -8px 0 0px #4f29f0',
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})

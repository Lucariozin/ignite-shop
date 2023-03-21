import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',

      gray100: '#E1E1E6',
      gray200: '#C4C4CC',
      gray300: '#8D8D99',
      gray700: '#2f2f34',
      gray800: '#202024',
      gray900: '#121214',

      green400: '#00B37E',
      green500: '#00875F',
    },
  },
  media: {
    lg2: '(max-width: 1350px)',
    lg1: '(max-width: 1200px)',

    md2: '(max-width: 1050px)',
    md1: '(max-width: 900px)',

    sm2: '(max-width: 750px)',
    sm1: '(max-width: 600px)',
  },
})

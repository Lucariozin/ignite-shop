import { globalCss } from '@/styles/stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    overflowX: 'hidden',
  },
})

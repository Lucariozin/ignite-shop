import { styled } from '@/styles/stitches.config'

export const Container = styled('main', {
  display: 'flex',
  alignItems: 'center',

  minHeight: 'calc(100vh - 14rem)',

  padding: '0 1.5rem',
})

export const Carousel = styled('div', {
  position: 'relative',

  overflowX: 'hidden',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const ProductList = styled('div', {
  display: 'flex',
  gap: '3rem',

  marginLeft: 'calc((100vw - 76rem) / 2)',

  '@media (max-width: 1216px)': {
    marginLeft: '0',
  },
})

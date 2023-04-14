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

  '@md1': {
    overflowX: 'scroll',
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

export const NoProductsText = styled('h1', {
  width: '100%',
  textAlign: 'center',

  color: '$gray100',
})

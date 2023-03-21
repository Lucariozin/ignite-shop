import { styled } from '@/styles/stitches.config'

export const ProductsList = styled('div', {
  position: 'relative',

  overflowX: 'scroll',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

const BaseNavigationButton = styled('button', {
  position: 'absolute',
  top: 'calc((100% / 2) - 1rem)',

  color: '$gray200',

  border: 'none',
  backgroundColor: 'transparent',

  outline: '0',
  cursor: 'pointer',
  transition: 'color 0.2s',

  '&:focus-visible, &:hover': {
    color: '$white',
  },
})

export const GoForward = styled(BaseNavigationButton, {
  right: '1rem',
})

export const GoBack = styled(BaseNavigationButton, {
  left: '1rem',
})

export const Carousel = styled('div', {
  display: 'flex',
  gap: '3rem',

  marginLeft: 'calc((100vw - 76rem) / 2)',

  '@media (max-width: 1216px)': {
    marginLeft: '0',
  },
})

export const Product = styled('div', {
  minWidth: '43.5rem',
  height: '41rem',

  backgroundColor: 'red',
})

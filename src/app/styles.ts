import { styled } from '@/styles/stitches.config'

export const Carousel = styled('div', {
  position: 'relative',

  overflowX: 'scroll',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

const BaseNavigationButton = styled('button', {
  position: 'fixed',
  top: 'calc(50% - 1rem)',
  zIndex: '3',

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
  right: '0.5rem',
})

export const GoBack = styled(BaseNavigationButton, {
  left: '0.5rem',
})

export const ProductList = styled('div', {
  display: 'flex',
  gap: '3rem',

  marginLeft: 'calc((100vw - 76rem) / 2)',

  '@media (max-width: 1216px)': {
    marginLeft: '0',
  },
})

import { styled } from '@/styles/stitches.config'

export const Container = styled('main', {
  display: 'flex',
  alignItems: 'center',

  minHeight: 'calc(100vh - 14rem)',

  padding: '0 1.5rem',
})

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

export const RightShadow = styled('div', {
  position: 'fixed',
  zIndex: '6',
  right: '0',
  top: 'calc((100vh - 48.5rem) / 2 + 2rem)',

  height: '100%',
  maxHeight: '41rem',

  boxShadow: '0 0 4rem 4rem rgba(18, 18, 20, 0.75)',
})

export const GoForward = styled(BaseNavigationButton, {
  right: '0.5rem',
})

export const LeftShadow = styled('div', {
  position: 'fixed',
  zIndex: '1',
  left: '0',
  top: 'calc((100vh - 48.5rem) / 2 + 2rem)',

  height: '100%',
  maxHeight: '41rem',

  boxShadow: '0 0 4rem 4rem rgba(18, 18, 20, 0.75)',
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

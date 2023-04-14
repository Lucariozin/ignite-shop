import { styled } from '@/styles/stitches.config'

export const ShadowColumn = styled('div', {
  position: 'fixed',
  top: 'calc((100vh - 48.5rem) / 2 + 2rem)',
  zIndex: '1',

  height: '100%',
  maxHeight: '41rem',

  transition: 'opacity 0.2s, visibility 0.2s',
  boxShadow: '0 0 4rem 4rem rgba(18, 18, 20, 0.75)',

  variants: {
    direction: {
      left: {
        left: '0',
      },
      right: {
        right: '0',
      },
    },
    visibility: {
      visible: {
        opacity: '1',
        visibility: 'visible',
      },
      hidden: {
        opacity: '0',
        visibility: 'hidden',
      },
    },
  },

  defaultVariants: {
    direction: 'left',
    visibility: 'hidden',
  },

  '@md1': {
    display: 'none',
  },
})

export const NavigationButton = styled('button', {
  position: 'fixed',
  top: 'calc(50% - 1rem)',
  zIndex: '1',

  color: '$gray200',

  border: 'none',
  backgroundColor: 'transparent',

  outline: '0',
  cursor: 'pointer',
  transition: 'color 0.2s',

  '&:focus-visible, &:hover': {
    color: '$white',
  },

  variants: {
    direction: {
      left: {
        left: '0.5rem',
      },
      right: {
        right: '0.5rem',
      },
    },
  },

  defaultVariants: {
    direction: 'left',
  },
})

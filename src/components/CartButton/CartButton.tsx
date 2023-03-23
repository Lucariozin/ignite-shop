import { Handbag } from 'phosphor-react'

import { styled } from '@/styles/stitches.config'

export const CartButton = styled('button', {
  lineHeight: '0',
  padding: '0.75rem',

  border: 'none',
  borderRadius: '6px',

  cursor: 'pointer',
  outlineColor: 'transparent',
  transition: 'background-color 0.2s, outline-color 0.2s',

  '&:focus-visible': {
    outline: '1px solid $green400',
    outlineOffset: '2px',
  },

  variants: {
    size: {
      medium: {
        '& > svg': {
          width: '24px',
          height: '24px',
        },
      },
      large: {
        '& > svg': {
          width: '32px',
          height: '32px',
        },
      },
    },
    color: {
      gray: {
        color: '$gray300',
        backgroundColor: '$gray800',

        '&:hover, &:focus-visible': {
          backgroundColor: '$gray700',
        },
      },
      green: {
        color: '$white',
        backgroundColor: '$green500',

        '&:hover, &:focus-visible': {
          backgroundColor: '$green400',
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    color: 'gray',
  },
})

CartButton.defaultProps = {
  children: <Handbag weight="bold" />,
}

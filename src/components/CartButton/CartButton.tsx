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

        '&:hover': {
          backgroundColor: '$gray700',
        },

        '&:focus-visible': {
          outline: '1px solid $green400',
        },
      },
      green: {
        color: '$white',
        backgroundColor: '$green500',

        '&:hover': {
          backgroundColor: '$green400',
        },

        '&:focus-visible': {
          outline: '1px solid $white',
        },
      },
    },
  },
})

CartButton.defaultProps = {
  size: 'medium',
  color: 'gray',

  children: <Handbag weight="bold" />,
}

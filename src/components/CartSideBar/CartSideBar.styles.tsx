import { X } from 'phosphor-react'

import { styled } from '@/styles/stitches.config'

export const Container = styled('aside', {
  position: 'fixed',
  top: '0',
  zIndex: '3',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  maxWidth: '30rem',
  width: '100%',
  height: '100vh',

  padding: '4.5rem 3rem 3rem 3rem',

  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  transition: 'right 0.3s, visibility 0.3s',

  variants: {
    visibility: {
      visible: {
        right: '0',
        visibility: 'visible',
      },
      hidden: {
        right: '-32rem',
        visibility: 'hidden',
      },
    },
  },

  defaultVariants: {
    visibility: 'hidden',
  },
})

export const CloseButton = styled('button', {
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',

  lineHeight: '0',
  outline: '0',
  outlineColor: 'transparent',

  border: 'none',
  color: '$gray300',
  backgroundColor: 'transparent',

  transition: 'color 0.2s, outline-color 0.2s',
  cursor: 'pointer',

  '&:hover': {
    color: '$white',
  },

  '&:focus-visible': {
    color: '$green400',
  },
})

CloseButton.defaultProps = {
  children: <X size={28} weight="bold" />,
}

export const ShoppingBagContainer = styled('div', {})

export const ShoppingBagText = styled('h3', {
  fontSize: '1.25rem',
  color: '$gray100',
})

export const ItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  marginTop: '2.5rem',
})

export const OrderSummary = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.75rem',

  width: '100%',
})

export const OrderDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const DetailRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ItemQuantityText = styled('span', {
  fontSize: '1rem',
  color: '$gray100',
})

export const ItemQuantity = styled('span', {
  fontSize: '1.25rem',
  fontWeight: '400',
  color: '$gray100',
})

export const OrderTotalAmountText = styled('span', {
  fontSize: '1.25rem',
  fontWeight: '700',
  color: '$gray100',
})

export const OrderTotalAmount = styled('h4', {
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '$gray100',
})

import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  position: 'relative',
})

export const Flashing = styled('span', {
  position: 'absolute',
  top: '-2.5rem',
  right: '-2.5rem',

  display: 'block',
  width: '8rem',
  height: '8rem',

  borderRadius: '50%',
  background: 'radial-gradient(circle, $green500, $gray900, transparent)',

  opacity: '0',
  visibility: 'hidden',
})

export const CartItemsAmount = styled('span', {
  position: 'absolute',
  top: '-0.65rem',
  right: '-0.65rem',

  padding: '0.75rem 0.5rem',

  fontSize: '0.875rem',
  fontWeight: '700',
  lineHeight: '0',
  color: '$white',

  borderRadius: '1rem',
  border: '3px solid $gray900',
  background: '$green500',

  userSelect: 'none',
})

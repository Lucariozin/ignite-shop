import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  width: '100%',
  height: '4.375rem',
  padding: '0 1rem',

  fontSize: '1.125rem',
  fontWeight: '700',
  color: '$white',

  border: 'none',
  borderRadius: '8px',
  backgroundColor: '$green500',

  outline: 'none',
  outlineColor: 'transparent',

  cursor: 'pointer',
  userSelect: 'none',

  transition: 'background-color 0.2s, outline-color 0.2s',

  '&:hover, &:focus-visible': {
    backgroundColor: '$green400',
  },

  '&:focus-visible': {
    outline: '1px solid $green400',
    outlineOffset: '2px',
  },
})

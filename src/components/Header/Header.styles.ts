import { styled } from '@/styles/stitches.config'

export const Container = styled('header', {
  height: '7.75rem',
})

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',

  width: '100%',
  maxWidth: '76rem',
  height: '100%',

  margin: '0 auto',
  padding: '0 1.5rem',
})

export const CartButton = styled('button', {
  padding: '0.75rem',
  lineHeight: '0',

  border: 'none',
  borderRadius: '6px',

  color: '$gray300',
  backgroundColor: '$gray800',

  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: '$gray700',
  },
})

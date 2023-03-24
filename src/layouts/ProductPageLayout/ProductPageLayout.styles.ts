import { styled } from '@/styles/stitches.config'

export const Container = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr',
  gap: '4.5rem',

  maxWidth: '73rem',
  margin: '0 auto',
})

export const LeftColumn = styled('div', {
  height: '41rem',
  padding: '5.5rem 1.75rem',

  borderRadius: '8px',
  backgroundImage: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
})

export const ProductImage = styled('div', {
  width: '100%',
  height: '100%',

  backgroundImage: 'url("/assets/t-shirt-01.png")',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
})

export const RightColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2rem',
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  marginTop: '2rem',
})

export const Name = styled('h1', {
  fontSize: '2rem',
  fontWeight: '700',
  color: '$gray200',
})

export const Price = styled('h2', {
  fontSize: '2rem',
  fontWeight: '400',
  color: '$green400',
})

export const Description = styled('p', {
  fontSize: '1.125rem',
  lineHeight: '160%',
  marginTop: '1rem',

  color: '$gray200',
})

export const AddProductToCartButton = styled('button', {
  height: '4.375rem',
  padding: '0 1rem',

  fontSize: '1.125rem',
  fontWeight: '700',
  color: '$white',

  border: 'none',
  borderRadius: '8px',
  backgroundColor: '$green500',

  outline: 'none',
  userSelect: 'none',
  outlineColor: 'transparent',
  cursor: 'pointer',
  transition: 'background-color 0.2s, outline-color 0.2s',

  '&:hover, &:focus-visible': {
    backgroundColor: '$green400',
  },

  '&:focus-visible': {
    outline: '1px solid $green400',
    outlineOffset: '2px',
  },
})
import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  minHeight: 'calc(100vh - 14rem)',

  padding: '0 1.5rem',
})

export const Wrapper = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr',
  gap: '4.5rem',

  maxWidth: '73rem',
  width: '100%',
  margin: '0 auto',

  '@md1': {
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
})

export const LeftColumn = styled('div', {
  maxWidth: '35.875rem',
  width: '100%',
  height: '41rem',

  margin: '0 auto',
  padding: '5.5rem 1.75rem',

  borderRadius: '8px',
  backgroundImage: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  '@md1': {
    height: '30rem',
    padding: '0rem 1rem',
  },
})

export const ProductImage = styled('div', {
  width: '100%',
  height: '100%',

  backgroundPosition: 'center',
  backgroundSize: 'cover',
})

export const RightColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2rem',

  '@md1': {
    marginBottom: '5rem',
  },
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

  '@md1': {
    fontSize: '1.5rem',
  },
})

export const Price = styled('h2', {
  fontSize: '2rem',
  fontWeight: '400',
  color: '$green400',

  '@md1': {
    fontSize: '1.75rem',
  },
})

export const Description = styled('p', {
  fontSize: '1.125rem',
  lineHeight: '160%',
  marginTop: '1rem',

  color: '$gray200',

  '@md1': {
    fontSize: '1rem',
  },
})

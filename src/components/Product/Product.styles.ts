import { styled } from '@/styles/stitches.config'

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',
})

export const Name = styled('h2', {
  fontSize: '1.25rem',
  fontWeight: '700',
  marginTop: 'auto',

  color: '$gray100',
})

export const Price = styled('span', {
  fontSize: '1.5rem',
  fontWeight: '700',

  color: '$green400',
})

export const ProductDetails = styled('div', {
  position: 'absolute',

  opacity: '0',
  visibility: 'hidden',

  left: '4px',
  right: '4px',
  bottom: '-10rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '6.875rem',
  padding: '0 2rem 0 1.25rem',

  borderRadius: '6px',
  backgroundColor: 'rgba(32, 32, 36, 0.9)',

  transition: 'opacity 0.2s, visibility 0.2s, bottom 0.2s',

  '@md1': {
    opacity: '1',
    visibility: 'visible',
    bottom: '4px',
  },

  '@sm1': {
    padding: '0 1rem',
  },

  [`${Name}`]: {
    fontSize: '1.125rem',
  },

  [`${Price}`]: {
    fontSize: '1.25rem',
  },
})

export const ProductImageContainer = styled('div', {
  width: '100%',
  height: '100%',

  padding: '5.5rem',
  cursor: 'pointer',

  '& > img': {
    userSelect: 'none',
  },
})

export const Container = styled('div', {
  position: 'relative',
  overflow: 'hidden',

  minWidth: '43.5rem',
  height: '41rem',

  borderRadius: '8px',
  backgroundImage: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  '&:hover': {
    [`& ${ProductDetails}`]: {
      opacity: '1',
      visibility: 'visible',
      bottom: '4px',
    },
  },

  '@md1': {
    minWidth: '35rem',
    height: 'auto',

    '& img': {
      display: 'block',

      width: '100%',
      height: 'auto',
      maxHeight: '100%',

      margin: '0 auto',
    },

    [`& ${ProductImageContainer}`]: {
      padding: '0',
      marginBottom: '6rem',
    },
  },

  '@media(max-height: 700px)': {
    height: 'auto',
  },

  '@sm1': {
    minWidth: '86vw',
  },
})

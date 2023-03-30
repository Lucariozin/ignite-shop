import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '1.25rem',
})

export const ImageContainer = styled('div', {
  maxWidth: '6.25rem',
  width: '100%',
  maxHeight: '5.875rem',

  overflow: 'hidden',
  flexShrink: '0',

  borderRadius: '8px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  '& > img': {
    userSelect: 'none',
    width: '100%',
  },
})

export const ItemDetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '4px 0',
})

export const ItemDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const ItemName = styled('h5', {
  fontSize: '1.125rem',
  fontWeight: '400',
  color: '$gray200',
})

export const ItemPrice = styled('span', {
  fontSize: '1.125rem',
  fontWeight: '700',
  color: '$gray100',
})

export const RemoveItemButton = styled('button', {
  width: 'fit-content',

  fontSize: '1rem',
  fontWeight: '700',
  color: '$green500',

  border: '0',
  outline: '0',
  backgroundColor: 'transparent',

  cursor: 'pointer',
  transition: 'color 0.2s',

  '&:hover, &:focus-visible': {
    color: '$green400',
  },
})

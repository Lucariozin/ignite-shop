import Link from 'next/link'

import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  minHeight: 'calc(100vh - 7.75rem)',
  padding: '0 1.5rem 7.75rem',
})

export const Wrapper = styled('main', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2rem',
})

export const TShirt = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '8.75rem',
  height: '8.75rem',

  flexShrink: 'none',
  userSelect: 'none',

  borderRadius: '50%',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '0 0 60px rgba(0, 0, 0, 0.8)',
})

export const TShirts = styled('div', {
  display: 'flex',
  alignItems: 'center',

  [`${TShirt} + ${TShirt}`]: {
    marginLeft: '-3.2rem',
  },
})

export const Title = styled('h1', {
  fontSize: '2rem',
  color: '$gray100',

  marginTop: '1.5rem',
})

export const Text = styled('p', {
  fontSize: '1.5rem',
  color: '$gray200',

  textAlign: 'center',
  lineHeight: '140%',

  maxWidth: '36.875rem',
  marginBottom: '2rem',
})

export const GoHomeAnchor = styled(Link, {
  fontSize: '1.25rem',
  fontWeight: '700',
  color: '$green500',

  outline: '0',
  textDecoration: 'none',
  transition: 'color 0.2s',

  '&:hover, &:focus-visible': {
    color: '$green400',
  },
})

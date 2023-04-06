import Link from 'next/link'
import Image from 'next/image'

import { styled } from '@/styles/stitches.config'

export const Container = styled('header', {
  position: 'relative',
  zIndex: '2',

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

export const HomeAnchor = styled(Link, {
  outline: 'none',
})

export const LogoImage = styled(Image, {
  userSelect: 'none',
})

export const CartButtonContainer = styled('div', {
  position: 'relative',
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

import Link from 'next/link'
import Image from 'next/image'

import { styled } from '@/styles/stitches.config'

export const Container = styled('header', {
  position: 'relative',
  zIndex: '2',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',

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

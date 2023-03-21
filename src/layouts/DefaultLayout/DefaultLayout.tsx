'use client'

import { ReactNode } from 'react'

import { Header } from '@/components/Header'

import { Container } from './DefaultLayout.styles'

interface DefaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />

      <Container>{children}</Container>
    </>
  )
}

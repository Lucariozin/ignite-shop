'use client'

import Image from 'next/image'

import { Handbag } from 'phosphor-react'

import { Container, Wrapper, CartButton } from './Header.styles'

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="/assets/ignite-shop-logo.svg" width={130} height={52} alt="" />

        <CartButton>
          <Handbag size={24} weight="bold" />
        </CartButton>
      </Wrapper>
    </Container>
  )
}

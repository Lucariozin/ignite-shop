'use client'

import { Handbag } from 'phosphor-react'

import { Container, Wrapper, CartButton, LogoImage, HomeAnchor } from './Header.styles'

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <HomeAnchor href="/">
          <LogoImage src="/assets/ignite-shop-logo.svg" width={130} height={52} alt="" priority={true} />
        </HomeAnchor>

        <CartButton>
          <Handbag size={24} weight="bold" />
        </CartButton>
      </Wrapper>
    </Container>
  )
}

'use client'

import { CartButton } from '@/components/CartButton'

import { Container, Wrapper, LogoImage, HomeAnchor } from './Header.styles'

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <HomeAnchor href="/">
          <LogoImage src="/assets/ignite-shop-logo.svg" width={130} height={52} alt="" priority />
        </HomeAnchor>

        <CartButton />
      </Wrapper>
    </Container>
  )
}

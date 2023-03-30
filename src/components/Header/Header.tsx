'use client'

import { useState } from 'react'

import { CartButton } from '@/components/CartButton'
import { CartSideBar } from '@/components/CartSideBar'

import { Container, Wrapper, LogoImage, HomeAnchor } from './Header.styles'

export const Header = () => {
  const [cartSideBarIsOpen, setCartSideBarIsOpen] = useState(false)

  const openCartSideBar = () => setCartSideBarIsOpen(true)
  const closeCartSideBar = () => setCartSideBarIsOpen(false)

  return (
    <>
      <Container>
        <Wrapper>
          <HomeAnchor href="/">
            <LogoImage src="/assets/ignite-shop-logo.svg" width={130} height={52} alt="" priority />
          </HomeAnchor>

          <CartButton onClick={openCartSideBar} />
        </Wrapper>
      </Container>

      <CartSideBar open={cartSideBarIsOpen} closeSideBar={closeCartSideBar} />
    </>
  )
}

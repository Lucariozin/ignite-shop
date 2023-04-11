'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

import { CartSideBar } from '@/components/CartSideBar'
import { OpenCartSideBarButton } from './components/OpenCartSideBarButton'

import { Container, Wrapper, LogoImage, HomeAnchor } from './Header.styles'

export const Header = () => {
  const pathname = usePathname()

  const [cartSideBarIsOpen, setCartSideBarIsOpen] = useState(false)

  const openCartSideBar = () => setCartSideBarIsOpen(true)
  const closeCartSideBar = () => setCartSideBarIsOpen(false)

  if (pathname !== '/success') {
    return (
      <>
        <Container>
          <Wrapper>
            <HomeAnchor href="/">
              <LogoImage src="/assets/ignite-shop-logo.svg" width={130} height={52} alt="" priority />
            </HomeAnchor>

            <OpenCartSideBarButton openCartSideBar={openCartSideBar} />
          </Wrapper>
        </Container>

        <CartSideBar open={cartSideBarIsOpen} closeSideBar={closeCartSideBar} />
      </>
    )
  }

  return (
    <Container>
      <HomeAnchor href="/">
        <LogoImage src="/assets/ignite-shop-logo.svg" width={130} height={52} alt="" priority />
      </HomeAnchor>
    </Container>
  )
}

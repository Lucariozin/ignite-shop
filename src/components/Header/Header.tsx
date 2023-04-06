'use client'

import { useState } from 'react'

import { useCart } from '@/contexts/Cart'

import { CartButton } from '@/components/CartButton'
import { CartSideBar } from '@/components/CartSideBar'

import { Container, Wrapper, LogoImage, HomeAnchor, CartButtonContainer, CartItemsAmount } from './Header.styles'

export const Header = () => {
  const { itemsQuantity } = useCart()

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

          <CartButtonContainer>
            <CartButton onClick={openCartSideBar} disabled={!itemsQuantity} />

            {!!itemsQuantity && <CartItemsAmount>{itemsQuantity}</CartItemsAmount>}
          </CartButtonContainer>
        </Wrapper>
      </Container>

      <CartSideBar open={cartSideBarIsOpen} closeSideBar={closeCartSideBar} />
    </>
  )
}

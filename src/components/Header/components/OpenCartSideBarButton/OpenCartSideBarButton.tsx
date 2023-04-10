import { RefObject, useEffect, useRef } from 'react'

import { keyframes } from '@/styles/stitches.config'

import { useCart } from '@/contexts/Cart'

import { CartButton } from '@/components/CartButton'

import { CartItemsAmount, Container, Flashing } from './OpenCartSideBarButton.styles'

interface OpenCartSideBarButtonProps {
  openCartSideBar: () => void
}

export const OpenCartSideBarButton = ({ openCartSideBar = () => {} }: OpenCartSideBarButtonProps) => {
  const { itemsQuantity } = useCart()

  const flashingRef = useRef() as RefObject<HTMLSpanElement>

  const applyFlashingAnimationToCartButton = () => {
    if (!flashingRef.current) return

    const FlashingAnimation = keyframes({
      '0%': {
        opacity: '0',
        visibility: 'visible',
      },
      '50%': {
        opacity: '0.6',
        visibility: 'visible',
      },
      '100%': {
        opacity: '0',
        visibility: 'visible',
      },
    })

    const animationDuration = 1200

    const animation = `${FlashingAnimation} ${animationDuration / 1000}s`

    flashingRef.current.style.animation = animation

    setTimeout(() => {
      if (!flashingRef.current) return

      flashingRef.current.style.animation = ''
    }, animationDuration)
  }

  useEffect(() => {
    if (itemsQuantity < 1) return

    applyFlashingAnimationToCartButton()
  }, [itemsQuantity])

  return (
    <Container onClick={openCartSideBar}>
      <CartButton title="Abrir sacola de compras" />

      {!!itemsQuantity && <CartItemsAmount>{itemsQuantity}</CartItemsAmount>}

      <Flashing ref={flashingRef} />
    </Container>
  )
}

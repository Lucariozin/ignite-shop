'use client'

import { useSearchParams } from 'next/navigation'
import { RefObject, useCallback, useEffect, useRef, useState } from 'react'

import { toast } from 'react-toastify'

import type { Product as ProductType } from '@/services/http/api/types'

import { Product } from '@/components/Product'
import { CarouselNavigationButton } from './components/CarouselNavigationButton'

import { Container, Carousel, ProductList, NoProductsText } from './HomeLayout.styles'

interface HomeLayoutProps {
  products: ProductType[]
}

export const HomeLayout = ({ products = [] }: HomeLayoutProps) => {
  const searchParams = useSearchParams()
  const checkoutFailed = searchParams.get('failed') === 'true'

  const screenWidth = window?.screen?.width ?? 0

  const [carouselIsNavigating, setCarouselIsNavigating] = useState(false)
  const [carouselPassedAmount, setCarouselPassedAmount] = useState(screenWidth)

  const productsCarouselRef = useRef() as RefObject<HTMLDivElement>

  const itemsQuantity = products.length

  const getCasouselLength = () => productsCarouselRef.current?.scrollWidth ?? 0

  const handleGoToTheCarouselRight = useCallback(() => {
    if (carouselIsNavigating) return

    setCarouselIsNavigating(true)

    const productElementWidth = Math.floor((productsCarouselRef.current?.scrollWidth ?? 0) / itemsQuantity)

    setCarouselPassedAmount((state) => {
      const newState = state + productElementWidth
      const carouselWidth = productsCarouselRef.current?.scrollWidth ?? 0

      if (newState > carouselWidth) return carouselWidth

      return newState
    })

    productsCarouselRef.current?.scrollBy({
      left: productElementWidth,
      behavior: 'smooth',
    })

    setTimeout(() => setCarouselIsNavigating(false), 500)
  }, [carouselIsNavigating, itemsQuantity])

  const handleGoToTheCarouselLeft = useCallback(() => {
    if (carouselIsNavigating) return

    setCarouselIsNavigating(true)

    const productElementWidth = Math.floor((productsCarouselRef.current?.scrollWidth ?? 0) / itemsQuantity)

    setCarouselPassedAmount((state) => {
      const newState = state - productElementWidth

      if (newState < screenWidth) return screenWidth

      return newState
    })

    productsCarouselRef.current?.scrollBy({
      left: productElementWidth * -1,
      behavior: 'smooth',
    })

    setTimeout(() => setCarouselIsNavigating(false), 500)
  }, [carouselIsNavigating, itemsQuantity, screenWidth])

  useEffect(() => {
    if (!checkoutFailed) return

    toast.error('Compra cancelada')
  }, [checkoutFailed])

  const thereAreProducts = !!products.length

  return (
    <Container>
      {thereAreProducts ? (
        <Carousel ref={productsCarouselRef} onScroll={(event) => event.preventDefault()}>
          <CarouselNavigationButton
            direction="left"
            title="Ver os produtos anteriores"
            onClick={handleGoToTheCarouselLeft}
            isVisible={carouselPassedAmount !== screenWidth}
          />

          <ProductList>
            {products.map(({ id, name, price, priceId, image }) => (
              <Product key={id} id={id} name={name} price={price} priceId={priceId} image={image} />
            ))}
          </ProductList>

          <CarouselNavigationButton
            direction="right"
            title="Ver os próximos produtos"
            onClick={handleGoToTheCarouselRight}
            isVisible={carouselPassedAmount !== getCasouselLength()}
          />
        </Carousel>
      ) : (
        <NoProductsText>Não existem produtos disponíveis no momento...</NoProductsText>
      )}
    </Container>
  )
}

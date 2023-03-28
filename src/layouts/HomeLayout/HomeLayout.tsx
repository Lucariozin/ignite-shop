'use client'

import { RefObject, useRef, useState } from 'react'

import type { Product as ProductType } from '@/services/api'

import { Product } from '@/components/Product'
import { CarouselNavigationButton } from './components/CarouselNavigationButton'

import { Container, Carousel, ProductList } from './HomeLayout.styles'

interface HomeLayoutProps {
  products: ProductType[]
}

export const HomeLayout = ({ products = [] }: HomeLayoutProps) => {
  const screenWidth = window?.screen?.width ?? 0

  const [carouselPassedAmount, setCarouselPassedAmount] = useState(screenWidth)

  const productsCarouselRef = useRef() as RefObject<HTMLDivElement>

  const itemsQuantity = products.length

  const getCasouselLength = () => productsCarouselRef.current?.scrollWidth ?? 0

  const handleGoToTheCarouselRight = () => {
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
  }

  const handleGoToTheCarouselLeft = () => {
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
  }

  return (
    <Container>
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
    </Container>
  )
}

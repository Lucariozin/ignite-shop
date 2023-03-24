'use client'

import { RefObject, useRef } from 'react'

import { CaretLeft, CaretRight } from 'phosphor-react'

import { Product } from '@/components/Product'

import { Carousel, ProductList, GoForward, GoBack, LeftShadow, RightShadow } from './styles'

const Home = () => {
  const productsCarouselRef = useRef() as RefObject<HTMLDivElement>

  const itemsQuantity = 15

  const handlePassTheCarousel = () => {
    const productElementWidth = Math.floor((productsCarouselRef.current?.scrollWidth ?? 0) / itemsQuantity)

    productsCarouselRef.current?.scrollBy({
      left: productElementWidth,
      behavior: 'smooth',
    })
  }

  const handleGoBackTheCarousel = () => {
    const productElementWidth = Math.floor((productsCarouselRef.current?.scrollWidth ?? 0) / itemsQuantity)

    productsCarouselRef.current?.scrollBy({
      left: productElementWidth * -1,
      behavior: 'smooth',
    })
  }

  return (
    <Carousel ref={productsCarouselRef}>
      <LeftShadow>
        <GoBack title="Ver os produtos anteriores" onClick={handleGoBackTheCarousel}>
          <CaretLeft size={52} />
        </GoBack>
      </LeftShadow>

      <ProductList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductList>

      <RightShadow>
        <GoForward title="Ver os próximos produtos" onClick={handlePassTheCarousel}>
          <CaretRight size={52} />
        </GoForward>
      </RightShadow>
    </Carousel>
  )
}

export default Home

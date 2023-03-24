'use client'

import { RefObject, useRef } from 'react'

import { CaretLeft, CaretRight } from 'phosphor-react'

import type { Product as ProductType } from '@/services/api'

import { Product } from '@/components/Product'

import { Container, Carousel, ProductList, GoForward, GoBack, LeftShadow, RightShadow } from './HomeLayout.styles'

interface HomeLayoutProps {
  products: ProductType[]
}

export const HomeLayout = ({ products = [] }: HomeLayoutProps) => {
  const productsCarouselRef = useRef() as RefObject<HTMLDivElement>

  const itemsQuantity = products.length

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
    <Container>
      <Carousel ref={productsCarouselRef}>
        <LeftShadow>
          <GoBack title="Ver os produtos anteriores" onClick={handleGoBackTheCarousel}>
            <CaretLeft size={52} />
          </GoBack>
        </LeftShadow>

        <ProductList>
          {products.map(({ id, name, price, image }) => (
            <Product key={id} id={id} name={name} price={price} image={image} />
          ))}
        </ProductList>

        <RightShadow>
          <GoForward title="Ver os próximos produtos" onClick={handlePassTheCarousel}>
            <CaretRight size={52} />
          </GoForward>
        </RightShadow>
      </Carousel>
    </Container>
  )
}

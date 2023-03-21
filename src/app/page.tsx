'use client'

import { CaretLeft, CaretRight } from 'phosphor-react'

import { Carousel, Product, ProductsList, GoForward, GoBack } from './styles'

const Home = () => {
  return (
    <ProductsList>
      <GoBack title="Ver os produtos anteriores">
        <CaretLeft size={52} />
      </GoBack>

      <Carousel>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </Carousel>

      <GoForward title="Ver os próximos produtos">
        <CaretRight size={52} />
      </GoForward>
    </ProductsList>
  )
}

export default Home

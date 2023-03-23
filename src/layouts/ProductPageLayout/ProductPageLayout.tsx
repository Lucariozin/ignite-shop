'use client'

import { Container } from './ProductPageLayout.styles'

interface ProductPageLayoutProps {
  productId: string
}

export const ProductPageLayout = ({ productId }: ProductPageLayoutProps) => {
  return (
    <Container>
      <h1>Product Page: {productId}</h1>
    </Container>
  )
}

import { CartButton } from '@/components/CartButton'

import { Container, Details, Name, Price, ProductDetails, ProductImageContainer } from './Product.styles'

export const Product = () => {
  return (
    <Container>
      <ProductImageContainer />

      <ProductDetails>
        <Details>
          <Name>Camiseta Beyond the Limits</Name>

          <Price>R$ 79,90</Price>
        </Details>

        <CartButton size="large" color="green" />
      </ProductDetails>
    </Container>
  )
}

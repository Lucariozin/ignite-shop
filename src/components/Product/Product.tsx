import { CartButton } from '@/components/CartButton'

import { Container, Details, Name, Price, ProductDetails, ProductImageContainer } from './Product.styles'

interface ProductProps {
  id: string
  name: string
  price: number
  image: string
}

export const Product = ({ id = '', name = '', price = 0, image = '' }: ProductProps) => {
  const formattedPrice = (price / 100).toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' })

  return (
    <Container>
      <ProductImageContainer style={{ backgroundImage: `url("${image}")` }} />

      <ProductDetails>
        <Details>
          <Name>{name}</Name>

          <Price>{formattedPrice}</Price>
        </Details>

        <CartButton size="large" color="green" />
      </ProductDetails>
    </Container>
  )
}

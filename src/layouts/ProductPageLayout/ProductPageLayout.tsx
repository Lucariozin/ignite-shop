'use client'

import { useCart } from '@/contexts/Cart/Cart.context'

import { Button } from '@/components/Button'

import {
  Name,
  Price,
  Wrapper,
  Container,
  LeftColumn,
  Description,
  RightColumn,
  ProductImage,
  ProductDetails,
} from './ProductPageLayout.styles'

interface ProductPageLayoutProps {
  id: string
  name: string
  price: number
  priceId: string
  image: string
  description: string
}

export const ProductPageLayout = ({
  id = '',
  name = '',
  price = 0,
  priceId = '',
  image = '',
  description = '',
}: ProductPageLayoutProps) => {
  const { addProductToCart } = useCart()

  const handleAddProductToCart = () => {
    addProductToCart({ priceId, productId: id, productName: name, productPrice: price, productImage: image })
  }

  const formattedPrice = (price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <Container>
      <Wrapper>
        <LeftColumn>
          <ProductImage style={{ backgroundImage: `url("${image}")` }} />
        </LeftColumn>

        <RightColumn>
          <ProductDetails>
            <Name>{name}</Name>

            <Price>{formattedPrice}</Price>

            <Description>{description}</Description>
          </ProductDetails>

          <Button onClick={handleAddProductToCart}>Colocar na sacola</Button>
        </RightColumn>
      </Wrapper>
    </Container>
  )
}

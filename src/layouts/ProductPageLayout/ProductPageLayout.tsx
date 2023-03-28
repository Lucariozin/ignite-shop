'use client'

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
  AddProductToCartButton,
} from './ProductPageLayout.styles'

interface ProductPageLayoutProps {
  id: string
  name: string
  price: number
  image: string
  description: string
}

export const ProductPageLayout = ({
  id = '',
  name = '',
  price = 0,
  image = '',
  description = '',
}: ProductPageLayoutProps) => {
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

          <AddProductToCartButton>Colocar na sacola</AddProductToCartButton>
        </RightColumn>
      </Wrapper>
    </Container>
  )
}

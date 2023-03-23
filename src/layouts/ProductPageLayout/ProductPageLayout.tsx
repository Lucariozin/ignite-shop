'use client'

import {
  Name,
  Price,
  Container,
  LeftColumn,
  Description,
  RightColumn,
  ProductImage,
  ProductDetails,
  AddProductToCartButton,
} from './ProductPageLayout.styles'

interface ProductPageLayoutProps {
  productId: string
}

export const ProductPageLayout = ({ productId }: ProductPageLayoutProps) => {
  return (
    <Container>
      <LeftColumn>
        <ProductImage />
      </LeftColumn>

      <RightColumn>
        <ProductDetails>
          <Name>Camiseta Beyond the Limits</Name>

          <Price>R$ 79,90</Price>

          <Description>
            Tempus fermentum eget lacus, quis ante. Potenti sit pharetra, ridiculus amet. Bibendum pretium arcu arcu
            eget viverra at metus donec hendrerit. Rhoncus, nunc, eu at ac. At massa, fermentum amet ornare cras
            tincidunt nunc tincidunt. Netus lorem nulla nulla mattis integer velit dictum proin nibh.
          </Description>
        </ProductDetails>

        <AddProductToCartButton>Colocar na sacola</AddProductToCartButton>
      </RightColumn>
    </Container>
  )
}

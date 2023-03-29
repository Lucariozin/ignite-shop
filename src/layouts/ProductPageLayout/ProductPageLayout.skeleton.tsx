'use client'

import { Skeleton } from '@/components/Skeleton/Skeleton'

import { Name, Price, Wrapper, Container, Description, RightColumn, ProductDetails } from './ProductPageLayout.styles'

export const ProductPageLayoutSkeleton = () => {
  return (
    <Container>
      <Wrapper>
        <Skeleton width="100%" height="41rem" borderRadius="8px" />

        <RightColumn>
          <ProductDetails>
            <Name>
              <Skeleton width="100%" height="2rem" />
            </Name>

            <Price>
              <Skeleton width="10rem" height="2rem" />
            </Price>

            <Description>
              <Skeleton width="100%" height="1rem" marginBottom="1rem" />
              <Skeleton width="100%" height="1rem" marginBottom="1rem" />
              <Skeleton width="100%" maxWidth="20rem" height="1rem" marginBottom="1rem" />
            </Description>
          </ProductDetails>

          <Skeleton width="100%" height="4.375rem" />
        </RightColumn>
      </Wrapper>
    </Container>
  )
}

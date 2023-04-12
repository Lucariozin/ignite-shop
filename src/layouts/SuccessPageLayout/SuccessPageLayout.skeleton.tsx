'use client'

import { Skeleton } from '@/components/Skeleton/Skeleton'

import { Container, TShirt, TShirts, Wrapper } from './SuccessPageLayout.styles'

export const SuccessPageLayoutSkeleton = () => {
  return (
    <Container>
      <Wrapper css={{ width: '100%' }}>
        <TShirts>
          <TShirt css={{ background: 'none' }}>
            <Skeleton width="100%" height="100%" borderRadius="50%" />
          </TShirt>

          <TShirt css={{ background: 'none' }}>
            <Skeleton width="100%" height="100%" borderRadius="50%" />
          </TShirt>

          <TShirt css={{ background: 'none' }}>
            <Skeleton width="100%" height="100%" borderRadius="50%" />
          </TShirt>
        </TShirts>

        <Skeleton width="100%" maxWidth="18rem" height="2rem" marginTop="1.5rem" />

        <Skeleton maxWidth="40rem" width="100%" height="1.2rem" marginTop="1.2rem" />
        <Skeleton maxWidth="25rem" width="100%" height="1.2rem" marginTop="-0.8rem" />

        <Skeleton maxWidth="12rem" width="100%" height="1rem" marginTop="3rem" />
      </Wrapper>
    </Container>
  )
}

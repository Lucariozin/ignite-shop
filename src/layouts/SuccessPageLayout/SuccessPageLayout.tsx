'use client'

import Image from 'next/image'

import type { Product } from '@/services/http/api/types'

import { Container, GoHomeAnchor, TShirt, TShirts, Text, Title, Wrapper } from './SuccessPageLayout.styles'

interface SuccessPageLayoutProps {
  products: Partial<Product>[]
  userName: string
}

export const SuccessPageLayout = ({ products = [], userName = '' }: SuccessPageLayoutProps) => {
  const productsAmount = products.length

  const productsAmountText = productsAmount === 1 ? `${productsAmount} camiseta` : `${productsAmount} camisetas`

  return (
    <Container>
      <Wrapper>
        <TShirts>
          {products.map(({ image = '', id = '' }) => (
            <TShirt key={id}>
              <Image src={image} alt="" width={140} height={140} />
            </TShirt>
          ))}
        </TShirts>

        <Title>Compra efetuada!</Title>

        <Text>
          Uhuul <strong>{userName}</strong>, sua compra de {productsAmountText} já está a caminho da sua casa.
        </Text>

        <GoHomeAnchor href="/">Voltar ao catálogo</GoHomeAnchor>
      </Wrapper>
    </Container>
  )
}

import Image from 'next/image'

import { useRouter } from 'next/navigation'

import { CartButton } from '@/components/CartButton'

import { Container, Details, Name, Price, ProductDetails, ProductImageContainer } from './Product.styles'

interface ProductProps {
  id: string
  name: string
  price: number
  image: string
}

export const Product = ({ id = '', name = '', price = 0, image = '' }: ProductProps) => {
  const router = useRouter()

  const formattedPrice = (price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const handleProductClick = () => router.push(`/products/${id}`)

  return (
    <Container>
      <ProductImageContainer onClick={handleProductClick}>
        <Image src={image} width={520} height={520} alt="" priority />
      </ProductImageContainer>

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

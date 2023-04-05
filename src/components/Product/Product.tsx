import Image from 'next/image'

import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/Cart/Cart.context'

import { CartButton } from '@/components/CartButton'

import { Container, Details, Name, Price, ProductDetails, ProductImageContainer } from './Product.styles'

interface ProductProps {
  id: string
  name: string
  price: number
  priceId: string
  image: string
}

export const Product = ({ id = '', name = '', price = 0, priceId = '', image = '' }: ProductProps) => {
  const { addProductToCart } = useCart()

  const router = useRouter()

  const handleAddProductToCart = () => {
    addProductToCart({ priceId, productId: id, productName: name, productPrice: price, productImage: image })
  }

  const handleProductClick = () => router.push(`/products/${id}`)

  const formattedPrice = (price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

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

        <CartButton size="large" color="green" title="Adicionar produto ao carrinho" onClick={handleAddProductToCart} />
      </ProductDetails>
    </Container>
  )
}

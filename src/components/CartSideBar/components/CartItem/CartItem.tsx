import Image from 'next/image'

import { toast } from 'react-toastify'

import {
  ItemName,
  Container,
  ItemPrice,
  ItemDetails,
  ImageContainer,
  RemoveItemButton,
  ItemDetailsContainer,
} from './CartItem.styles'

interface CartItemProps {
  productId: string
  productName: string
  productPrice: number
  productImage: string
  removeProductFromCart: (params: { productId: string }) => void
}

export const CartItem = ({
  productId = '',
  productName = '',
  productPrice = 0,
  productImage = '',
  removeProductFromCart = () => {},
}: CartItemProps) => {
  const handleRemoveProductFromCart = () => {
    removeProductFromCart({ productId })

    toast.success(`Produto "${productName}" removido com sucesso`)
  }

  const formattedPrice = (productPrice / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <Container>
      <ImageContainer>
        <Image src={productImage} alt="" width={100} height={94} />
      </ImageContainer>

      <ItemDetailsContainer>
        <ItemDetails>
          <ItemName>{productName}</ItemName>

          <ItemPrice>{formattedPrice}</ItemPrice>
        </ItemDetails>

        <RemoveItemButton onClick={handleRemoveProductFromCart}>Remover</RemoveItemButton>
      </ItemDetailsContainer>
    </Container>
  )
}

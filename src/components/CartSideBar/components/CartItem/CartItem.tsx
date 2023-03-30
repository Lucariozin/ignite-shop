import Image from 'next/image'

import {
  ItemName,
  Container,
  ItemPrice,
  ItemDetails,
  ImageContainer,
  RemoveItemButton,
  ItemDetailsContainer,
} from './CartItem.styles'

export const CartItem = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="/assets/t-shirt-01.png" alt="" width={100} height={94} />
      </ImageContainer>

      <ItemDetailsContainer>
        <ItemDetails>
          <ItemName>Camiseta Beyond the Limits</ItemName>

          <ItemPrice>R$ 79,90</ItemPrice>
        </ItemDetails>

        <RemoveItemButton>Remover</RemoveItemButton>
      </ItemDetailsContainer>
    </Container>
  )
}

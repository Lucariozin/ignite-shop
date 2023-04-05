import { Button } from '@/components/Button'
import { CartItem } from './components/CartItem'

import {
  Container,
  DetailRow,
  CloseButton,
  ItemQuantity,
  OrderDetails,
  OrderSummary,
  ItemsContainer,
  ShoppingBagText,
  ItemQuantityText,
  OrderTotalAmount,
  OrderTotalAmountText,
  ShoppingBagContainer,
} from './CartSideBar.styles'

interface CartSideBarProps {
  open: boolean
  closeSideBar: () => void
}

export const CartSideBar = ({ open = false, closeSideBar = () => {} }: CartSideBarProps) => {
  const visibility = open ? 'visible' : 'hidden'

  return (
    <Container visibility={visibility}>
      <CloseButton onClick={closeSideBar} />

      <ShoppingBagContainer>
        <ShoppingBagText>Sacola de compras</ShoppingBagText>

        <ItemsContainer>
          <CartItem />
          <CartItem />
          <CartItem />
          {/* <CartItem />
          <CartItem />
          <CartItem />
          <CartItem /> */}
        </ItemsContainer>
      </ShoppingBagContainer>

      <OrderSummary>
        <OrderDetails>
          <DetailRow>
            <ItemQuantityText>Quantidade</ItemQuantityText>

            <ItemQuantity>3 itens</ItemQuantity>
          </DetailRow>

          <DetailRow>
            <OrderTotalAmountText>Valor total</OrderTotalAmountText>

            <OrderTotalAmount>R$ 270,00</OrderTotalAmount>
          </DetailRow>
        </OrderDetails>

        <Button>Finalizar compra</Button>
      </OrderSummary>
    </Container>
  )
}

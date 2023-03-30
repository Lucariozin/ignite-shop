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
  FinishOrderButton,
  OrderTotalAmountText,
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

      <ShoppingBagText>Sacola de compras</ShoppingBagText>

      <ItemsContainer></ItemsContainer>

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

        <FinishOrderButton>Finalizar compra</FinishOrderButton>
      </OrderSummary>
    </Container>
  )
}

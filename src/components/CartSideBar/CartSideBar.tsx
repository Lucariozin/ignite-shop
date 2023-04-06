import { useCart } from '@/contexts/Cart'

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
  CartWithoutProductsText,
} from './CartSideBar.styles'

interface CartSideBarProps {
  open: boolean
  closeSideBar: () => void
}

export const CartSideBar = ({ open = false, closeSideBar = () => {} }: CartSideBarProps) => {
  const { items, itemsQuantity, totalPrice, removeProductFromCart } = useCart()

  const itemsQuantityText = `${itemsQuantity} ${itemsQuantity === 1 ? 'item' : 'itens'}`

  const formattedTotalPrice = (totalPrice / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const visibility = open ? 'visible' : 'hidden'

  return (
    <Container visibility={visibility}>
      <CloseButton onClick={closeSideBar} />

      <ShoppingBagContainer>
        <ShoppingBagText>Sacola de compras</ShoppingBagText>

        {!itemsQuantity && (
          <CartWithoutProductsText>{'Você ainda não possui itens em sua sacola de compras :('}</CartWithoutProductsText>
        )}

        <ItemsContainer>
          {items.map(({ productId, productName, productPrice, productImage }) => (
            <CartItem
              key={productId}
              productId={productId}
              productName={productName}
              productPrice={productPrice}
              productImage={productImage}
              removeProductFromCart={removeProductFromCart}
            />
          ))}
        </ItemsContainer>
      </ShoppingBagContainer>

      {!!itemsQuantity && (
        <OrderSummary>
          <OrderDetails>
            <DetailRow>
              <ItemQuantityText>Quantidade</ItemQuantityText>

              <ItemQuantity>{itemsQuantityText}</ItemQuantity>
            </DetailRow>

            <DetailRow>
              <OrderTotalAmountText>Valor total</OrderTotalAmountText>

              <OrderTotalAmount>{formattedTotalPrice}</OrderTotalAmount>
            </DetailRow>
          </OrderDetails>

          <Button>Finalizar compra</Button>
        </OrderSummary>
      )}
    </Container>
  )
}

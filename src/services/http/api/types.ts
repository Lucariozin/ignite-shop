export type Return<T = any> = {
  data: T | null
  status: 'success' | 'failed'
}

export type Product = {
  id: string
  name: string
  price: number
  priceId: string
  image: string
  description?: string
}

export type GetProductByIdParams = {
  productId: string
}

export type Item = {
  price: string
  quantity: number
}

export type GetCheckoutSessionParams = {
  items: Item[]
}

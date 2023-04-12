import type { RequestInit } from 'next/dist/server/web/spec-extension/request'

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

export type GetProducts = (requestConfig?: RequestInit) => Promise<Return<Product[]>>

export type GetProductByIdParams = {
  productId: string
}

export type GetProductById = (params: GetProductByIdParams, requestConfig?: RequestInit) => Promise<Return<Product>>

type GetProductsBySessionIdParams = {
  sessionId: string
}

export type GetProductsBySessionIdReturn = {
  products: Partial<Product>[]
  userName: string
}

export type GetProductsBySessionId = (
  params: GetProductsBySessionIdParams,
  requestConfig?: RequestInit,
) => Promise<Return<GetProductsBySessionIdReturn>>

export type Item = {
  price: string
  quantity: number
}

export type GetCheckoutSessionParams = {
  items: Item[]
}

export type GetCheckoutSession = (
  params: GetCheckoutSessionParams,
  requestConfig?: RequestInit,
) => Promise<Return<{ url: string }>>

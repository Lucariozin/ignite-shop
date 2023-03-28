import { RequestInit } from 'next/dist/server/web/spec-extension/request'

type Return<T = any> = {
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

type GetProductByIdParams = {
  productId: string
}

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_APPLICATION_URL}/api`

export const getProducts = async (requestConfig?: RequestInit): Promise<Return<Product[]>> => {
  const url = `${baseUrl}/products`

  try {
    const response = await fetch(url, requestConfig)
    const data = (await response.json()).data as Product[]

    return {
      data,
      status: 'success',
    }
  } catch {
    return {
      data: null,
      status: 'failed',
    }
  }
}

export const getProductById = async (
  { productId = '' }: GetProductByIdParams,
  requestConfig?: RequestInit,
): Promise<Return<Product>> => {
  const url = `${baseUrl}/products/${productId}`

  try {
    const response = await fetch(url, requestConfig)
    const data = (await response.json()).data as Product

    return {
      data,
      status: 'success',
    }
  } catch {
    return {
      data: null,
      status: 'failed',
    }
  }
}

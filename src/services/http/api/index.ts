import type { RequestInit } from 'next/dist/server/web/spec-extension/request'

import type { GetCheckoutSessionParams, GetProductByIdParams, Product, Return } from './types'

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

export const getCheckoutSession = async (
  { items }: GetCheckoutSessionParams,
  requestConfig?: RequestInit,
): Promise<Return<{ url: string }>> => {
  const url = `${baseUrl}/get-checkout-session`

  const newRequestConfig: RequestInit = {
    ...requestConfig,
    cache: 'no-cache',
    method: 'POST',
    body: JSON.stringify({ items }),
  }

  try {
    const response = await fetch(url, newRequestConfig)
    const data = (await response.json()).data

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

import type { RequestInit } from 'next/dist/server/web/spec-extension/request'

import type {
  Product,
  GetProducts,
  GetProductById,
  GetCheckoutSession,
  GetProductsBySessionId,
  GetProductsBySessionIdReturn,
} from './types'

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_APPLICATION_URL}/api`

export const getProducts: GetProducts = async (requestConfig) => {
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

export const getProductById: GetProductById = async ({ productId = '' }, requestConfig) => {
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

export const getProductsBySessionId: GetProductsBySessionId = async ({ sessionId = '' }, requestConfig) => {
  const url = `${baseUrl}/products/get-by-session-id`

  const newRequestConfig: RequestInit = {
    ...requestConfig,
    method: 'POST',
    body: JSON.stringify({ sessionId }),
  }

  try {
    const response = await fetch(url, newRequestConfig)
    const data = (await response.json()).data as GetProductsBySessionIdReturn

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

export const getCheckoutSession: GetCheckoutSession = async ({ items }, requestConfig) => {
  const url = `${baseUrl}/get-checkout-session`

  const newRequestConfig: RequestInit = {
    ...requestConfig,
    cache: 'no-cache',
    method: 'POST',
    body: JSON.stringify({ items }),
  }

  try {
    const response = await fetch(url, newRequestConfig)
    const data = (await response.json()).data as { url: string }

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

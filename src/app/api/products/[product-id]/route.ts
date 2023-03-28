import { NextResponse } from 'next/server'

import Stripe from 'stripe'

import { stripe } from '@/services/stripe'

import type { Product } from '@/services/api'

interface Context {
  params?: {
    'product-id'?: string | string[]
  }
}

export async function GET(request: Request, { params }: Context) {
  const productId = String(params?.['product-id'] ?? '')

  if (!productId) return NextResponse.json({ error: 'Invalid product id' })

  const product = await stripe.products.retrieve(productId, { expand: ['default_price'] })

  const mappedProduct: Product = {
    id: product.id,
    name: product.name,
    image: product.images[0] ?? '',
    description: product.description ?? '',
    price: (product.default_price as Stripe.Price).unit_amount ?? 0,
  }

  return NextResponse.json({
    data: mappedProduct,
  })
}

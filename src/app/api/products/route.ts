import { NextResponse } from 'next/server'

import { Stripe } from 'stripe'

import { stripe } from '@/services/stripe'

import type { Product } from '@/services/http/api/types'

export async function GET(request: Request) {
  const products = await stripe.products.list({ expand: ['data.default_price'] })

  const mappedProducts: Product[] = products.data.map((product) => ({
    id: product.id,
    name: product.name,
    image: product.images[0] ?? '',
    description: product.description ?? '',
    price: (product.default_price as Stripe.Price).unit_amount ?? 0,
    priceId: (product.default_price as Stripe.Price).id,
  }))

  return NextResponse.json({
    data: mappedProducts,
  })
}

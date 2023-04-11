import { NextResponse } from 'next/server'

import { Stripe } from 'stripe'

import { stripe } from '@/services/stripe'

import type { Product } from '@/services/http/api/types'

export async function GET() {
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

export async function POST(request: Request) {
  const body = await request.json()

  const sessionId = body?.sessionId

  if (!sessionId) return NextResponse.json({ error: 'Invalid session id' })

  const items = (await stripe.checkout.sessions.listLineItems(sessionId, { expand: ['data.price.product'] })).data

  const mappedItems = items.map((item) => {
    const product = item.price?.product as Stripe.Product

    return {
      name: product.name,
      image: product.images[0],
    }
  })

  return NextResponse.json({
    data: mappedItems,
  })
}

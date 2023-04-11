import { NextResponse } from 'next/server'

import Stripe from 'stripe'

import { stripe } from '@/services/stripe'

export async function POST(request: Request) {
  const body = await request.json()

  const sessionId = body?.sessionId

  if (!sessionId) return NextResponse.json({ error: 'Invalid session id' })

  const session = await stripe.checkout.sessions.retrieve(sessionId)
  const products = (await stripe.checkout.sessions.listLineItems(sessionId, { expand: ['data.price.product'] })).data

  const mappedProducts = products.map((product) => {
    const stripeProduct = product.price?.product as Stripe.Product

    return {
      id: stripeProduct.id,
      name: stripeProduct.name,
      image: stripeProduct.images[0],
    }
  })

  return NextResponse.json({
    data: {
      products: mappedProducts,
      userName: session.customer_details?.name,
    },
  })
}

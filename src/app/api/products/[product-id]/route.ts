import { NextResponse } from 'next/server'

import { stripe } from '@/services/stripe'

interface Context {
  params?: {
    'product-id'?: string | string[]
  }
}

export async function GET(request: Request, { params }: Context) {
  const productId = String(params?.['product-id'] ?? '')

  if (!productId) return NextResponse.json({ error: 'Invalid product id' })

  const product = await stripe.products.retrieve(productId)

  return NextResponse.json({
    data: product,
  })
}

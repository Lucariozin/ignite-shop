import { NextResponse } from 'next/server'

import { stripe } from '@/services/stripe'

export async function GET(request: Request) {
  const products = await stripe.products.list()

  return NextResponse.json({
    data: products.data,
  })
}

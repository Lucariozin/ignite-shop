import { NextResponse } from 'next/server'

import { stripe } from '@/services/stripe'

export async function POST(request: Request) {
  const { items } = await request.json()

  if (!items) return NextResponse.json({ error: 'Invalid items' })

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000',
    line_items: items,
    mode: 'payment',
  })

  const data = {
    url: checkoutSession.url,
  }

  return NextResponse.json({ data })
}

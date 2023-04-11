import { NextResponse } from 'next/server'

import { stripe } from '@/services/stripe'

export async function POST(request: Request) {
  const { items } = await request.json()

  if (!items) return NextResponse.json({ error: 'Invalid items' })

  const applicationUrl = process.env.NEXT_PUBLIC_BASE_APPLICATION_URL

  if (!applicationUrl) return NextResponse.json({ error: 'Invalid application url' })

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${applicationUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${applicationUrl}?failed=true`,
    line_items: items,
    mode: 'payment',
  })

  const data = {
    url: checkoutSession.url,
  }

  return NextResponse.json({ data })
}

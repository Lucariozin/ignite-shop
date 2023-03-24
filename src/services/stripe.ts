import Stripe from 'stripe'

const stripeSecretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ?? ''

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2022-11-15',
  typescript: true,
  appInfo: {
    name: 'Ignite Shop',
  },
})

import React from 'react'

import { Roboto } from 'next/font/google'

import { CartProvider } from '@/contexts/Cart/Cart.context'

import { globalStyles } from '@/styles/global'
import { getCssText } from '@/styles/stitches.config'
import { StyleSheet } from '@/styles/StyleSheet'

import { Header } from '@/components/Header'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  globalStyles()

  return (
    <html lang="pt-br" className={roboto.className}>
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

        <StyleSheet />
      </head>

      <body>
        <CartProvider>
          <Header />

          {children}
        </CartProvider>
      </body>
    </html>
  )
}

export default RootLayout

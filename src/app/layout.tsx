import React from 'react'

import { Roboto } from 'next/font/google'

import { globalStyles } from '@/styles/global'
import { getCssText } from '@/styles/stitches.config'

import { StyleSheet } from './StyleSheet'

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
        <Header />

        {children}
      </body>
    </html>
  )
}

export default RootLayout

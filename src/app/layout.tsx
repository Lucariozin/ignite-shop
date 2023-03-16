import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout

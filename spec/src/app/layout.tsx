import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Yandex.Music OpenAPI',
  description: 'Open API for Yandex.Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anorva — Revenue Partners for Ambitious B2B Teams',
  description: 'Drive qualified leads with conversion-focused strategy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

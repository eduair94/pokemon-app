import { Layout } from '@/components/layouts'
import { metadataGeneratorPage } from '@/helpers'
import { darkTheme } from '@/themes'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = metadataGeneratorPage('Home')

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={darkTheme}>
        <body className={inter.className}>
          <Providers>
            <Layout>
                {children}
              </Layout>
          </Providers>
        </body>
    </html>
  )
}

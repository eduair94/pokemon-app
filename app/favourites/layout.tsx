import { metadataGeneratorPage } from '@/helpers'
import { type Metadata } from 'next'

export const metadata: Metadata = metadataGeneratorPage('Favourites')

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    // Do what you need to do
    <>
        {children}
    </>
  )
}

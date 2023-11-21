import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pokemon - Favourites'
}

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    // Do what you need to do
    <>
        {children}
    </>
  )
}

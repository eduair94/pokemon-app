import { Client, Navbar } from '@/components/ui'
import { Suspense, type FC, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Navbar />
        <Suspense>
          <Client />
        </Suspense>
        <main className="py-0 px-[20px]">
            {children}
        </main>
    </>
  )
}

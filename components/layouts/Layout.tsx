import { type FC, type ReactNode } from 'react'
import { Navbar } from '@/components/ui'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Navbar />
        <main className="py-0 px-[20px]">
            {children}
        </main>
    </>
  )
}

// app/providers.tsx
'use client'
import { Progress } from '@/components/Progress'
import { NextUIProvider } from '@nextui-org/react'
import { type FC, type ReactNode } from 'react'

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Progress />
      <NextUIProvider>
      {/* <Provider store={store}> */}
        {children}
      </NextUIProvider>
      {/* </Provider> */}
    </>
  )
}

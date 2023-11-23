// app/providers.tsx
'use client'
import { Progress } from '@/components/Progress'
import { NextUIProvider } from '@nextui-org/react'
import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Progress />
      <Provider store={store}>
        <NextUIProvider>
            {children}
        </NextUIProvider>
      </Provider>
    </>
  )
}

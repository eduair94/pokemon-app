// app/providers.tsx
'use client'
import { NextUIProvider } from '@nextui-org/react'
import { Next13ProgressBar } from 'next13-progressbar'
import { Suspense, type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Suspense>
        <Next13ProgressBar height="4px" color="#0A2FFF" options={{ showSpinner: true }} showOnShallow />
      </Suspense>
      <Provider store={store}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </Provider>
    </>
  )
}

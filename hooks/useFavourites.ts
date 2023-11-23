'use client'
import { store } from '@/app/store'
import { setFavourites } from '@/app/store/favourite/thunks'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

export const useFavourite = () => {
  useEffect(() => {
    store.dispatch(setFavourites())
    window.confetti = confetti
  }, [])

  return {}
}

'use client'
import { type AppDispatch } from '@/app/store'
import { setFavourites } from '@/app/store/favourite/thunks'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useFavourite = () => {
  'use client'
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(setFavourites())
    window.confetti = confetti
  }, [])

  return {}
}

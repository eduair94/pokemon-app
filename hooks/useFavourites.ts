'use client'
import { setFavourites } from '@/app/store/favourite/thunks'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useFavourite = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setFavourites())
    window.confetti = confetti
  }, [])

  return {}
}

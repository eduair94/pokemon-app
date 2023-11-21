'use client'
import { type AppDispatch } from '@/app/store'
import { setFavourites } from '@/app/store/favourite/thunks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useFavourite = () => {
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(setFavourites())
  }, [])

  return {}
}

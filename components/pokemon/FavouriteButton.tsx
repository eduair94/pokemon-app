'use client'
import { type RootState, type AppDispatch } from '@/app/store'
import { existsInFavourites, toggleFavourite } from '@/app/store/favourite/thunks'
import { confettiApi } from '@/helpers'
import { type PokemonResponse } from '@/interfaces'
import { Button } from '@nextui-org/react'
import { useState, type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const FavouriteButton: FC<{ pokemon: PokemonResponse }> = ({ pokemon }) => {
  const dispatch: AppDispatch = useDispatch()
  const res = dispatch(existsInFavourites(pokemon.id))
  const [isInFavourites, setIsInFavourites] = useState(res)

  const isLoading = useSelector((state: RootState) => state.favourite.isLoading)

  const onToggleFavourite = () => {
    dispatch(toggleFavourite(pokemon.id))
    setIsInFavourites(!isInFavourites)
    if (!isInFavourites) {
      void confettiApi(1, 0)
    }
  }

  if (isLoading) return <></>

  return (
    <Button onClick={onToggleFavourite}
    variant={isInFavourites ? undefined : 'ghost'}
    color={isInFavourites ? 'danger' : undefined}
    className={isInFavourites ? '' : 'custom-gradient-transition'}>
        { isInFavourites ? 'Remove from favourites' : 'Add to favourites' }
    </Button>
  )
}

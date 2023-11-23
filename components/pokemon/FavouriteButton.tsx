'use client'
import { store } from '@/app/store'
import { existsInFavourites, toggleFavourite } from '@/app/store/favourite/thunks'
import { confettiApi } from '@/helpers'
import { type PokemonResponse } from '@/interfaces'
import { Button } from '@nextui-org/react'
import { useState, type FC } from 'react'

export const FavouriteButton: FC<{ pokemon: PokemonResponse }> = ({ pokemon }) => {
  const res = store.dispatch(existsInFavourites(pokemon.id))
  const [isInFavourites, setIsInFavourites] = useState(res)

  const isLoading = store.getState().favourite.isLoading

  const onToggleFavourite = () => {
    store.dispatch(toggleFavourite(pokemon.id))
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

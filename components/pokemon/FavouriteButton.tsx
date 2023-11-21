'use client'
import { type AppDispatch } from '@/app/store'
import { existsInFavourites, toggleFavourite } from '@/app/store/favourite/thunks'
import { type PokemonResponse } from '@/interfaces'
import { Button } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { useState, type FC } from 'react'
import { useDispatch } from 'react-redux'

export const FavouriteButton: FC<{ pokemon: PokemonResponse }> = ({ pokemon }) => {
  const dispatch: AppDispatch = useDispatch()
  const res = dispatch(existsInFavourites(pokemon.id))
  const [isInFavourites, setIsInFavourites] = useState(res)

  const onToggleFavourite = () => {
    dispatch(toggleFavourite(pokemon.id))
    setIsInFavourites(!isInFavourites)
    if (!isInFavourites) {
      void confetti({
        zIndex: 10,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
  }

  return (
    <Button onClick={onToggleFavourite}
    variant={isInFavourites ? undefined : 'ghost'}
    color={isInFavourites ? 'danger' : undefined}
    className={isInFavourites ? '' : 'custom-gradient-transition'}>
        { isInFavourites ? 'Remove from favourites' : 'Add to favourites' }
    </Button>
  )
}

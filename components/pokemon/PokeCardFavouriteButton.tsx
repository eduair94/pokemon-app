'use client'

import { type AppDispatch, type RootState } from '@/app/store'
import { existsInFavourites, toggleFavourite } from '@/app/store/favourite/thunks'
import { confettiApi } from '@/helpers'
import { type SmallPokemon } from '@/interfaces'
import { FavoriteBorder } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Spinner } from '@nextui-org/react'
import { useState, type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const PokeCardFavouriteButton: FC<{ pokemon: SmallPokemon }> = ({ pokemon }) => {
  const dispatch: AppDispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.favourite.isLoading);
  const res = dispatch(existsInFavourites(pokemon.id))
  const [isInFavourites, setIsInFavourites] = useState(res)

  const onToggleFavourite = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Get click coordinates from event
    const x = event.clientX
    const y = event.clientY
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const xCoordinate = x / windowWidth
    const yCoordinate = y / windowHeight
    event.stopPropagation()
    dispatch(toggleFavourite(pokemon.id))
    setIsInFavourites(!isInFavourites)
    if (!isInFavourites) {
      void confettiApi(xCoordinate, yCoordinate)
    }
  }

  return (
      <div onClick={onToggleFavourite} className="absolute top-0 right-0 z-20 w-[50px] h-[50px] content-center justify-center items-center flex hover:opacity-50">
          {
              isLoading ? <Spinner size="md" /> : (isInFavourites ? <FavoriteIcon /> : <FavoriteBorder />)
          }
        </div>
  )
}

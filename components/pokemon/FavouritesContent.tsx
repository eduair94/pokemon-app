'use client'
import { NoFavourites } from '@/components/ui/NoFavourites'
import { PokeCard } from '@/components/pokemon/PokeCard'
import { useSelector } from 'react-redux'
import { Loading } from '@/components/ui'
import { useFavourite } from '@/hooks/useFavourites'
import { type SmallPokemon } from '@/interfaces'
import { type FC } from 'react'
import { type RootState } from '@/app/store'

export const FavouritesContent: FC<{ pokemons: SmallPokemon[] }> = ({ pokemons }) => {
  const { favourites: favouritePokemons, isLoading } = useSelector(
    (state: RootState) => ({ favourites: state.favourite.favourites, isLoading: state.favourite.isLoading })
  )
  const emptyFavourites = favouritePokemons.length === 0

  useFavourite()

  if (isLoading) {
    return <Loading/>
  }

  if (emptyFavourites) return <NoFavourites/>

  pokemons = pokemons.filter((pokemon) => favouritePokemons.includes(pokemon.id))

  return (
    <div className="container py-4">
      <h1 className="text-3xl">Favourites</h1>
      <div className="my-4 grid gap-4 justify-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {pokemons.map((pokemon) => {
          return <PokeCard key={pokemon.id} pokemon={pokemon}/>
        }
        )}
      </div>
    </div>
  )
}

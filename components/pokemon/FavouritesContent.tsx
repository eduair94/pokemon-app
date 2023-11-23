'use client'
import { type RootState } from '@/app/store'
import { PokeCard } from '@/components/pokemon/PokeCard'
import { Loading, SearchBar } from '@/components/ui'
import { NoFavourites } from '@/components/ui/NoFavourites'
import { type SmallPokemon } from '@/interfaces'
import { type FC } from 'react'
import { useSelector } from 'react-redux'

interface Props {
  pokemons: SmallPokemon[]
  search: string
}

export const FavouritesContent: FC<Props> = ({ pokemons, search }) => {
  const { favourites: favouritePokemons, isLoading } = useSelector(
    (state: RootState) => ({ favourites: state.favourite.favourites, isLoading: state.favourite.isLoading })
  )
  const emptyFavourites = favouritePokemons.length === 0

  if (emptyFavourites) return <NoFavourites/>

  pokemons = pokemons.filter((pokemon) => favouritePokemons.includes(pokemon.id))

  return (
    <div className="container py-4">
      {isLoading ?? <Loading />}
      <h1 className="text-3xl">Favourites</h1>
      <div className="mt-4">
        <SearchBar search={search} path="favourites" />
      </div>
      <div className="my-4 grid gap-4 justify-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {pokemons.map((pokemon) => {
          return <PokeCard key={pokemon.id} pokemon={pokemon}/>
        }
        )}
      </div>
    </div>
  )
}

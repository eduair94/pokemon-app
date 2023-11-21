'use client'
import { type RootState } from '@/app/store'
import { PokeCard } from '@/components/pokemon/PokeCard'
import { Loading } from '@/components/ui'
import { useFavourite } from '@/hooks/useFavourites'
import { type SmallPokemon } from '@/interfaces'
import { type FC } from 'react'
import { useSelector } from 'react-redux'

export const HomePageContent: FC<{ pokemons: SmallPokemon[] }> = ({ pokemons }) => {
  const isLoading = useSelector(
    (state: RootState) => state.favourite.isLoading
  )

  useFavourite()

  if (isLoading) {
    return <Loading/>
  }

  return (
    <>
      <div className="my-4 grid gap-4 justify-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {pokemons.map((pokemon) => {
          return <PokeCard key={pokemon.id} pokemon={pokemon}/>
        }
        )}
      </div>
    </>
  )
}

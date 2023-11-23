import { PokeCard } from '@/components/pokemon/PokeCard'
import { type SmallPokemon } from '@/interfaces'
import { type FC } from 'react'
import { SearchBar } from '../ui'

interface Props {
  pokemons: SmallPokemon[]
  search: string
}

export const HomePageContent: FC<Props> = ({ pokemons, search }) => {
  return (
    <>
    <div className="mt-4">
      <SearchBar search={search} path="" />
    </div>
    <div className="my-4 grid gap-4 justify-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8">
      {pokemons.map((pokemon) => {
        return <PokeCard key={pokemon.id} pokemon={pokemon}/>
      }
      )}
      </div>
    </>
  )
}

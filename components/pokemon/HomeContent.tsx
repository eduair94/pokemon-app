import { PokeCard } from '@/components/pokemon/PokeCard'
import { type SmallPokemon } from '@/interfaces'
import { type FC } from 'react'

export const HomePageContent: FC<{ pokemons: SmallPokemon[] }> = ({ pokemons }) => {
  return (
    <div className="my-4 grid gap-4 justify-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
      {pokemons.map((pokemon) => {
        return <PokeCard key={pokemon.id} pokemon={pokemon}/>
      }
      )}
    </div>
  )
}

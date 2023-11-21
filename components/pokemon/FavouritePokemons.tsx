import { type FC } from 'react'
import { PokeCard } from './PokeCard'
import { type SmallPokemon } from '@/interfaces'

export const FavouritePokemons: FC<{ pokemons: SmallPokemon[] }> = ({ pokemons }) => {
  return (
    <div className="my-4 grid gap-4 justify-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
    {pokemons.map((pokemon) => {
      return <PokeCard key={pokemon.id} pokemon={pokemon}/>
    }
    )}
</div>
  )
}

import { pokeApi } from '@/api'
import { type PokemonListResponse, type SmallPokemon } from '@/interfaces'
import { cache } from 'react'

export const revalidate = 86400 // revalidate the data at most every hour

export const getPokemonsData = cache(async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=10000')
  return data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
    }
  }) as SmallPokemon[]
})

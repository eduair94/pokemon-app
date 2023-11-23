import { pokeApi } from '@/api'
import { totalPokemons } from '@/helpers/totalPokemons'
import { type PokemonListResponse, type SmallPokemon } from '@/interfaces'
import { cache } from 'react'

export const revalidate = 86400 // 24 hours

export const getPokemonsData = cache(async () => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=${totalPokemons}`)
  return data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
    }
  }) as SmallPokemon[]
})

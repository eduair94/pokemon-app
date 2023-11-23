import { pokeApi } from '@/api'
import { type PokemonResponse } from '@/interfaces'
import { cache } from 'react'

export const revalidate = 86400 // 24 hours

export const getPokemonInfo = cache(async (name: string | number): Promise<PokemonResponse | null> => {
  const data = await pokeApi.get(`/pokemon/${name}`)
    .then(({ data }: { data: PokemonResponse }) => {
      return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
      }
    })
    .catch(e => {
      return null
    }) as PokemonResponse | null
  return data
})

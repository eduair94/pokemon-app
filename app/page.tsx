import { Layout } from '@/components/layouts'
import { type Metadata, type ResolvingMetadata, type NextPage } from 'next'
import { metadataGenerator } from '@/helpers'
import { pokeApi } from '@/api'
import { type PokemonListResponse } from '@/interfaces'
import { PokeCard } from '@/components/pokemon/PokeCard'
import { cache } from 'react'

export async function generateMetadata (
  { params, searchParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  return metadataGenerator('Listado de Pokemons')
}

interface RootObject {
  count: number
  next: string
  previous?: any
  results: Result[]
}

interface Result {
  name: string
  url: string
}

const getData = cache(async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  return {
    pokemons: data.results.map((pokemon, i) => {
      return {
        ...pokemon,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
      }
    })
  }
})

const HomePage: NextPage = async () => {
  const { pokemons } = await getData()
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png
  return (
    <div className="my-4 grid gap-4 justify-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
      {pokemons.map((pokemon) => {
        return <PokeCard key={pokemon.id} pokemon={pokemon}/>
      }
      )}
    </div>
  )
}

export default HomePage

'use client'
import { type NextPage } from 'next'
import { PokeCard } from '@/components/pokemon/PokeCard'
import { getPokemonsData } from './utils'
import { use } from 'react'

const HomePage: NextPage = () => {
  const { pokemons } = use(getPokemonsData())
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

export default HomePage

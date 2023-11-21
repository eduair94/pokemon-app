import React from 'react'
import { getPokemonsData } from '../utils'
import { FavouritesContent } from '@/components/pokemon/FavouritesContent'
import { type NextPage } from 'next'

const FavouritesPage: NextPage = async () => {
  const { pokemons } = await getPokemonsData()
  return (
    <FavouritesContent pokemons={pokemons}/>
  )
}

export default FavouritesPage

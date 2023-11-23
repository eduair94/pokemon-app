'use server'
import { HomePageContent } from '@/components/pokemon/HomeContent'
import { type NextPage } from 'next'
import { getPokemonsData } from '../utils'

const HomePage: NextPage = async () => {
  const pokemons = await getPokemonsData()
  return (
    <HomePageContent pokemons={pokemons}/>
  )
}

export default HomePage

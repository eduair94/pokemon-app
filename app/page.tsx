import { type NextPage } from 'next'
import { getPokemonsData } from './utils'
import { HomePageContent } from '@/components/pokemon/HomeContent'

const HomePage: NextPage = async () => {
  const { pokemons } = await getPokemonsData()
  return (
    <HomePageContent pokemons={pokemons}/>
  )
}

export default HomePage

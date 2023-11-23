'use server'
import { HomePageContent } from '@/components/pokemon/HomeContent'
import { type NextPage } from 'next'
import { getPokemonsData } from './utils'

interface Props {
  searchParams: Record<string, string | string[] | undefined>
}

const HomePage: NextPage<Props> = async ({ searchParams }) => {
  const pokemons = await getPokemonsData()
  return (
    <HomePageContent search={searchParams.search as string} pokemons={pokemons}/>
  )
}

export default HomePage

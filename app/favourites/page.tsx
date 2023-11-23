import { FavouritesContent } from '@/components/pokemon/FavouritesContent'
import { type NextPage } from 'next'
import { getPokemonsData } from '../utils'

interface Props {
  searchParams: Record<string, string | string[] | undefined>
}

const FavouritesPage: NextPage<Props> = async ({ searchParams }) => {
  const pokemons = await getPokemonsData()
  return (
    <FavouritesContent search={searchParams.search as string} pokemons={pokemons}/>
  )
}

export default FavouritesPage

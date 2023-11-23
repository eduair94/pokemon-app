import { FavouritesContent } from '@/components/pokemon/FavouritesContent'
import { type NextPage } from 'next'
import { getPokemonDataFilter } from '../utils'

interface Props {
  searchParams: Record<string, string | string[] | undefined>
}

const FavouritesPage: NextPage<Props> = async ({ searchParams }) => {
  const pokemons = await getPokemonDataFilter(searchParams)
  return (
    <FavouritesContent search={searchParams.search as string} pokemons={pokemons}/>
  )
}

export default FavouritesPage

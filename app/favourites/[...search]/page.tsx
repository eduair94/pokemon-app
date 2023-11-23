import { FavouritesContent } from '@/components/pokemon/FavouritesContent'
import { type NextPage } from 'next'
import { getPokemonsData } from '../../utils'

const FavouritesPage: NextPage = async () => {
  const pokemons = await getPokemonsData()
  return (
    <FavouritesContent pokemons={pokemons}/>
  )
}

export default FavouritesPage

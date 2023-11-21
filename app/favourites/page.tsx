import { use } from 'react'
import { getPokemonsData } from '../utils'
import { NoFavourites } from '@/components/ui/NoFavourites'
import { PokeCard } from '@/components/pokemon/PokeCard'
import { useSelector } from 'react-redux'
import { type RootState } from '../store'

const Favourites = () => {
  const { favourites: favouritePokemons } = useSelector(
    (state: RootState) => state.favourite
  )
  const isLoading = false
  const emptyFavourites = favouritePokemons.length === 0

  if (isLoading) {
    return (
    <div className="container py-4">
      <h1 className="text-3xl">Loading...</h1>
      </div>
    )
  }

  if (emptyFavourites) return <NoFavourites/>

  let { pokemons } = use(getPokemonsData())
  pokemons = pokemons.filter((pokemon) => favouritePokemons.includes(pokemon.id))

  return (
    <div className="container py-4">
      <h1 className="text-3xl">Favourites</h1>

      <div className="my-4 grid gap-4 justify-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {pokemons.map((pokemon) => {
          return <PokeCard key={pokemon.id} pokemon={pokemon}/>
        }
        )}
    </div>
    </div>
  )
}

export default Favourites

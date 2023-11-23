import { type SmallPokemon } from '@/interfaces'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
import { type FC } from 'react'
import { PokeCardFavouriteButton } from './PokeCardFavouriteButton'
import { PokeCardLink } from './PokeCardLink'
import { PokemonImage } from './PokemonImage'

interface Props { pokemon: SmallPokemon }

export const PokeCard: FC<Props> = ({ pokemon }) => {
  return (
    <Card className="w-full h-full" isHoverable={true} isPressable={true}>
      <PokeCardLink pokemon={pokemon} />
      <PokeCardFavouriteButton pokemon={pokemon} />
        <CardBody className="p-1">
        <PokemonImage pokemon={pokemon} />
        </CardBody>
        <CardFooter className="justify-between">
            <p className="capitalize">{pokemon.name}</p>
            <p>#{pokemon.id}</p>
          </CardFooter>
      </Card>
  )
}

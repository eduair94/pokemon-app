import { type SmallPokemon } from '@/interfaces'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { type FC } from 'react'
import { PokeCardFavouriteButton } from './PokeCardFavouriteButton'
import { PokeCardLink } from './PokeCardLink'

interface Props { pokemon: SmallPokemon }

export const PokeCard: FC<Props> = ({ pokemon }) => {
  return (
    <Card className="w-full h-full" isHoverable={true} isPressable={true}>
      <PokeCardLink pokemon={pokemon} />
      <PokeCardFavouriteButton pokemon={pokemon} />
        <CardBody className="p-1">
          <Image
            className="pointer-events-none"
            src={pokemon.img || 'https://dummyimage.com/140x140/000000/fff'}
            width="100%"
            height={140}
          />
        </CardBody>
        <CardFooter className="justify-between">
            <p className="capitalize">{pokemon.name}</p>
            <p>#{pokemon.id}</p>
          </CardFooter>
      </Card>

  )
}

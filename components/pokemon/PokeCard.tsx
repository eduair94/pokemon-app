'use client'
import { type SmallPokemon } from '@/interfaces'
import { Card, CardBody, Image, CardFooter } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { type FC } from 'react'

interface Props { pokemon: SmallPokemon }

export const PokeCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter()

  const onClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    void router.push(`/pokemon/${pokemon.id}`)
  }

  return (
      <Card isHoverable={true} isPressable={true} onClick={onClick}>
        <CardBody className="p-1">
          <Image
            src={pokemon.img}
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

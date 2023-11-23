'use client'

import { type SmallPokemon } from '@/interfaces'
import { Image } from '@nextui-org/react'
import { useRef, type FC } from 'react'

export const PokemonImage: FC<{ pokemon: SmallPokemon }> = ({ pokemon }) => {
  const imageRef = useRef<HTMLImageElement>(null)

  const onError = () => {
    if (imageRef.current !== null) {
      imageRef.current.src = '/img/placeholder.png'
      imageRef.current.setAttribute('data-loaded', 'true')
    }
  }

  return (
      <Image
        ref={imageRef}
        alt={pokemon.name}
        onError={onError}
        className="pointer-events-none"
        classNames={{
          wrapper: 'h-full'
        }}
        src={pokemon.img || '/img/placeholder.png'}
        width="100%"
        height={140}
    />
  )
}

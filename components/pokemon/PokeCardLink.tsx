'use client'
import { type SmallPokemon } from '@/interfaces'
import { useRouter } from 'next/navigation'
import React, { type FC } from 'react'

export const PokeCardLink: FC<{ pokemon: SmallPokemon }> = ({ pokemon }) => {
  const router = useRouter()

  const onClickLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    router.push(`/pokemon/${pokemon.name}`)
  }

  return (
    <a onClick={(event) => { onClickLink(event) }} className="absolute top-0 left-0 w-full h-full z-10" href={`/pokemon/${pokemon.name}`}></a>
  )
}

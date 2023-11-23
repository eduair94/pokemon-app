import { type PokemonResponse } from '@/interfaces'
import { type Metadata } from 'next'
import { capitalize } from '.'

export const metadataGenerator = (pokemon: PokemonResponse): Metadata => {
  const title = capitalize(pokemon.name)
  const images = ['/img/banner.png', pokemon.sprites?.front_default, pokemon.sprites.other?.dream_world.front_default, pokemon.sprites?.back_default, pokemon.sprites?.front_shiny]
  return {
    title,
    description: `Information about the pokemon ${title}`,
    keywords: [title, 'pokemon', 'pokedex'],
    icons: { icon: images[1] },
    category: 'Pokemon',
    openGraph: {
      type: 'website',
      title: `Pokemon ${title}`,
      description: `Information about the pokemon ${title}`,
      images,
      siteName: 'Pokemon List'
    },
    twitter: {
      title,
      description: `Information about the pokemon ${title}`,
      images
    }
  }
}

export const metadataGeneratorPage = (str: string): Metadata => {
  const title = 'Pokemon - ' + str
  const images = ['/img/banner.png']
  return {
    title,
    description: `This page is ${title}`,
    keywords: [title, 'pokemon', 'pokedex'],
    icons: { icon: '/img/banner.png' },
    category: 'Pokemon',
    openGraph: {
      type: 'website',
      title,
      description: `This page is ${title}`,
      images,
      siteName: 'Pokemon List'
    },
    twitter: {
      title,
      description: `This page is ${title}`,
      images
    }
  }
}

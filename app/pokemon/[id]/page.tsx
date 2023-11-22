import { pokeApi } from '@/api'
import { getPokemonInfo } from '@/app/utils'
import { FavouriteButton } from '@/components/pokemon/FavouriteButton'
import { metadataGenerator } from '@/helpers'
import { type PokemonListResponse } from '@/interfaces'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import { type Metadata, type NextPage, type ResolvingMetadata } from 'next'

export async function generateStaticParams (): Promise<Array<{ id: number }>> {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=10000')
  return data.results.map(({ id }) => ({ id }))
}

interface Props {
  params: { id: number }
}

export async function generateMetadata (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params
  const pokemon = await getPokemonInfo(id)
  if (!pokemon) return {}
  return metadataGenerator(pokemon)
}

const Pokemon: NextPage<Props> = async ({ params }) => {
  const id = params.id
  const pokemon = await getPokemonInfo(id)
  if (!pokemon) return
  return (
    <div className="sm:container grid my-4 gap-4 sm:grid-cols-12 h-auto w-full">
        <div className="sm:col-span-4 flex flex-col">
            <Card isHoverable={true} className="p-[30px] flex-grow">
                <CardBody className="d-flex justify-center align-center">
                    <Image
                    className="m-auto"
                    alt={pokemon.name}
                    src={pokemon.sprites.other?.dream_world.front_default || 'https://dummyimage.com/200x200/000000/fff'}
                    width="auto"
                    height={200}
                    />
                </CardBody>
            </Card>
        </div>
        <div className="sm:col-span-8 flex flex-col">
            <Card className="flex-col h-full">
                <CardHeader className="flex justify-between flex-wrap gap-4">
                    <h1 className="text-4xl capitalize">{pokemon.name}</h1>
                    <FavouriteButton pokemon={pokemon}/>
                </CardHeader>
                <div className="sm:mt-3 p-3">
                    <p className="text-2xl">Sprites:</p>
                    <div className="container flex-row flex flex-wrap">
                        <Image src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            width={150}
                            height={150}
                        />
                        <Image src={pokemon.sprites.back_default}
                            alt={pokemon.name}
                            width={150}
                            height={150}
                        />
                        <Image src={pokemon.sprites.front_shiny}
                            alt={pokemon.name}
                            width={150}
                            height={150}
                        />
                        <Image src={pokemon.sprites.back_shiny}
                            alt={pokemon.name}
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default Pokemon

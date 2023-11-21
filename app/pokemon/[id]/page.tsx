import { pokeApi } from '@/api'
import { FavouriteButton } from '@/components/pokemon/FavouriteButton'
import { capitalize, metadataGenerator } from '@/helpers'
import { type PokemonListResponse, type PokemonResponse } from '@/interfaces'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import { type Metadata, type NextPage, type ResolvingMetadata } from 'next'
import { cache } from 'react'

export async function generateStaticParams (): Promise<Array<{ id: string }>> {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=10000')
  return data.results.map(el => ({ id: el.name }))
}

interface Props {
  params: { id: string }
}

const getData = cache(async (id: string): Promise<PokemonResponse | null> => {
  const { data } = await pokeApi.get(`/pokemon/${id}`).catch(e => {
    return {
      data: null
    }
  })
  return data
})

export async function generateMetadata (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params
  const pokemon = await getData(id)
  if (!pokemon) return {}
  return metadataGenerator(capitalize(pokemon.name))
}

const Pokemon: NextPage<Props> = async ({ params }) => {
  const id = params.id
  const pokemon = await getData(id)
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

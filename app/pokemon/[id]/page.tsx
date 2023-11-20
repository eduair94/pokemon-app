import { pokeApi } from '@/api'
import { type PokemonListResponse, type PokemonResponse } from '@/interfaces'
import { type Metadata, type ResolvingMetadata, type NextPage } from 'next'
import { cache } from 'react'
import { Card, CardBody, Image, CardHeader, Button } from '@nextui-org/react'
import { capitalize, metadataGenerator } from '@/helpers'

export async function generateStaticParams (): Promise<Array<{ id: string }>> {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=100000')
  const num = data.count
  return [...Array(num)].map((_value, index) => ({ id: String(index + 1) }))
}

interface Props {
  params: { id: string }
}

const getData = cache(async (id: string): Promise<PokemonResponse> => {
  const { data } = await pokeApi.get(`/pokemon/${id}`)
  return data
})

export async function generateMetadata (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params
  const pokemon = await getData(id)
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
                    src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
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
                    <Button variant="ghost" className="custom-gradient-transition">Add to favourites</Button>
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

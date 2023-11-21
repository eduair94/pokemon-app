import { Image } from '@nextui-org/react'

export const NoFavourites = () => {
  return (
    <div className="h-[calc(100vh-100px)] w-full flex flex-col content-center justify-center self-center flex-wrap">
        <h1 className="text-3xl text-center mb-4">No favourites</h1>
        <Image
        className="opacity-50" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        width={250} height={250}
        />
    </div>
  )
}

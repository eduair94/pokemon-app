import { Button, Spacer } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <div className="flex w-full flex-row items-center justify-start px-[20px] py-0 bg-gray-900">
        <Link className="text-white flex items-center hover:opacity-90 hover:scale-105 transition ease-in-out delay-150" href="/">
            <Image
              alt="Pokemon"
              width={70}
              height={70}
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            />
          <h2 className="xs:text-5xl text-2xl">P</h2>
          <h3 className="xs:text-4xl text-xl">okémon</h3>
        </Link>
        <Spacer style={{ flex: 1 }}/>
        <Link href="/favourites">
          <Button variant="ghost" className="custom-gradient-transition">
            Favoritos
          </Button>
        </Link>
    </div>
  )
}

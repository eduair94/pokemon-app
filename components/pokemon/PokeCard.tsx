'use client'
import { type AppDispatch } from '@/app/store'
import { existsInFavourites, toggleFavourite } from '@/app/store/favourite/thunks'
import { type SmallPokemon } from '@/interfaces'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { useRouter } from 'next/navigation'
import { useState, type FC } from 'react'
import { useDispatch } from 'react-redux'

interface Props { pokemon: SmallPokemon }

export const PokeCard: FC<Props> = ({ pokemon }) => {
  const dispatch: AppDispatch = useDispatch()
  const res = dispatch(existsInFavourites(pokemon.id))
  const [isInFavourites, setIsInFavourites] = useState(res)
  const router = useRouter()
  const onClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    void router.push(`/pokemon/${pokemon.name}`)
  }

  const onClickLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event?.preventDefault()
  }

  const onToggleFavourite = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Get click coordinates from event
    const x = event.clientX
    const y = event.clientY
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const xCoordinate = x / windowWidth
    const yCoordinate = y / windowHeight
    event.stopPropagation()
    dispatch(toggleFavourite(pokemon.id))
    setIsInFavourites(!isInFavourites)
    if (!isInFavourites) {
      void confetti({
        zIndex: 10,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: xCoordinate,
          y: yCoordinate
        }
      })
    }
  }

  return (
    <Card onClick={onClick} className="w-full h-full" isHoverable={true} isPressable={true}>
        <div onClick={onToggleFavourite} className="absolute top-0 right-0 z-20 w-[50px] h-[50px] content-center justify-center items-center flex hover:opacity-50">
            {isInFavourites ? <FavoriteIcon/> : <FavoriteBorder/>}
        </div>
        <a onClick={(event) => { onClickLink(event) }} className="absolute top-0 left-0 w-full h-full z-10" href={`/pokemon/${pokemon.name}`}></a>
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

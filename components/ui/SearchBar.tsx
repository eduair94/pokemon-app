'use client'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Input } from '@nextui-org/react'
import { useEffect, useState, type FC } from 'react'

interface Props {
  path: string
}

export const SearchBar: FC<Props> = ({ path }) => {
  // Access to last value in the current path separated by /
  let search = ''
  if (typeof window !== 'undefined') {
    const hasSearch = window.location.pathname.includes('/search/')
    if (hasSearch) search = window.location.pathname.split('/').pop() as string
  }

  let [searchValue, setSearchValue] = useState(search)
  const [searchSub, setSearchSub] = useState(search)

  const onSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    // get text input value name search from the event.
    if (event) event.preventDefault()
    searchValue = searchValue.toLowerCase()
    if (searchValue) {
      const route = `${path}/search/${searchValue}`
      console.log('go to', route)
      window.history.pushState(null, 'Search', route)
    } else {
      const route = `/${path}`
      window.history.pushState(null, 'Search', route)
    }
    setSearchSub(searchValue)
  }

  const onClear = () => {
    setSearchValue('')
    searchValue = ''
    onSubmit()
  }

  useEffect(() => {
    console.log('search searchSub', searchSub)
    const search = searchSub
    if (search) {
      document.querySelectorAll('.poke-card').forEach((el) => {
        const pokeName = (el as HTMLElement).dataset.name
        const pokeId = (el as HTMLElement).dataset.id
        if (pokeName && pokeId && !pokeName.includes(search) && pokeId !== search) {
          el.classList.add('hidden')
        } else if (el.classList.contains('hidden')) {
          el.classList.remove('hidden')
        }
      })
    } else {
      document.querySelectorAll('.poke-card').forEach((el) => {
        el.classList.remove('hidden')
      })
    }
  }, [searchSub])

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <Input
          onClear={onClear}
          classNames={{
            base: 'max-w-full sm:max-w-[350px] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
          }}
          placeholder="Type to search..."
              size="sm"
              name="search"
          startContent={<SearchIcon />}
        type="search"
        onValueChange={setSearchValue}
        value={searchValue}
          />
          <Button type="submit" >Search</Button>
    </form>
  )
}

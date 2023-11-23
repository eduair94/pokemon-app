'use client'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next13-progressbar'
import { useState, type FC } from 'react'

interface Props {
  path: string
  search: string
}

export const SearchBar: FC<Props> = ({ path, search }) => {
  const router = useRouter()
  let [searchValue, setSearchValue] = useState(search)

  const onSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    // get text input value name search from the event.
    if (event) event.preventDefault()
    const search = searchValue
    if (search) {
      const route = `${path}/search/${search.toLowerCase()}`
      console.log('go to', route)
      void router.push(route, { shallow: true })
      return
    }
    void router.push(`/${path}`, { shallow: true })
  }

  const onClear = () => {
    setSearchValue('')
    searchValue = ''
    onSubmit()
  }

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

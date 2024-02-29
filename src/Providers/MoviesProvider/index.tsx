import { PropsWithChildren, ReactElement, useEffect, useState } from 'react'
import { MoviesContext } from './context'
import useLanguage from 'src/Hooks/useLanguage'
import { getLocalData } from 'src/utils'
import { IGenre } from 'src/Components/Types/types'
import { getGenresList } from 'src/Hooks/useGenres'

export default function MoviesProvider({
  children,
}: PropsWithChildren): ReactElement {
  const lang = useLanguage()
  const userGenresIds = getLocalData('userGenres')
  const [genres, setGenres] = useState<IGenre[]>([])
  const [selectedGenresIds, setSelectedGenresIds] =
    useState<number[]>(userGenresIds)

  const changeSelectedGenresIds = (id: number) => {
    const genreId = selectedGenresIds.indexOf(id)
    if (genreId < 0) {
      selectedGenresIds.push(id)
    } else {
      selectedGenresIds.splice(genreId, 1)
    }
    setSelectedGenresIds([...selectedGenresIds])
    localStorage.setItem('userGenres', JSON.stringify(selectedGenresIds))
  }

  useEffect(() => {
    getGenresList(lang).then((data) => setGenres(data))
  }, [lang])

  return (
    <MoviesContext.Provider
      value={{ genres, selectedGenresIds, changeSelectedGenresIds }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

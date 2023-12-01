import { genresListUrl } from '../urls'
import useLanguage from './useLanguage'
import { useEffect, useState } from 'react'
import { IGenre } from '../Components/Types/types'
import { getLocalData } from 'src/utils'

export const getGenresList = (language: string) => {
  return fetch(
    `${genresListUrl}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`,

    { method: 'GET' }
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data.genres
    })
    .catch(() => {
      return []
    })
}

export default function useGenres() {
  const lang = useLanguage()
  const userGenresIds = getLocalData('userGenres')
  const [genres, setGenres] = useState<IGenre[]>([])
  const [genresIds, setGenresIds] = useState<number[]>(userGenresIds)

  useEffect(() => {
    getGenresList(lang).then((data) => setGenres(data))
  }, [lang])

  const handleGenres = (id: number) => {
    const genreId = genresIds.indexOf(id)
    if (genreId < 0) {
      genresIds.push(id)
    } else {
      genresIds.splice(genreId, 1)
    }
    setGenresIds([...genresIds])
    localStorage.setItem('userGenres', JSON.stringify(genresIds))
  }
  return { genres, genresIds, handleGenres }
}

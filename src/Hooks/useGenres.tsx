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
  const [genresId, setGenresId] = useState<number[]>(userGenresIds)

  useEffect(() => {
    getGenresList(lang).then((data) => setGenres(data))
  }, [lang])

  const handleGenres = (id: number) => {
    if (!genresId.includes(id)) {
      genresId.push(id)
    } else {
      const genreId = genresId.indexOf(id)
      genresId.splice(genreId, 1)
    }
    setGenresId([...genresId])
    localStorage.setItem('userGenres', JSON.stringify(genresId))
  }
  return { genres, genresId, handleGenres }
}

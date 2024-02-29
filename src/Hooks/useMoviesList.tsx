import { IMovieResponse } from 'src/Components/Types/types'
import { moviesListUrl } from 'src/urls'
import useLanguage from './useLanguage'
import { useState } from 'react'
import { getLocalData } from 'src/utils'

const getMoviesList = async (
  page: number,
  language?: string,
  withGenres?: string,
  year?: number,
  rating?: number
): Promise<IMovieResponse> => {
  return fetch(
    `${moviesListUrl}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&with_genres=${withGenres}&year=${year}&vote_average.gte=${rating}&page=${page}`,

    { method: 'GET' }
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch(() => {
      return {}
    })
}

export default function useMoviesList(): any {
  const lang = useLanguage()
  const [favoriteIds, setFavoriteIds] = useState<number[]>(
    getLocalData('favoriteIds')
  )

  const handleIsFavorite = (id: number): void => {
    const index = favoriteIds.findIndex((item) => item === id)
    const nextWatchedIds =
      index >= 0
        ? favoriteIds.filter((item) => item !== id)
        : [...favoriteIds, id]

    setFavoriteIds(nextWatchedIds)
    localStorage.setItem('favoriteIds', JSON.stringify(nextWatchedIds))
  }
}

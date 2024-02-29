import { useCallback, useEffect, useState } from 'react'
import {
  IMovie,
  IMovieResponse,
  UseMoviesOutput,
} from '../Components/Types/types'
import { movieUrl } from 'src/urls'
import useLanguage from './useLanguage'
import { getLocalData } from 'src/utils'

const getMovie = async (
  movieId: number,
  language?: string
): Promise<IMovieResponse> => {
  return fetch(
    `${movieUrl}${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`,

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

const normalizeData = (data: IMovieResponse[]): IMovie[] => {
  return data.map((item) => ({
    ...item,
    posterPath: item.poster_path,
  }))
}

export default function useFavoriteMovies(): UseMoviesOutput {
  const lang = useLanguage()
  const userMoviesIds = getLocalData('userMoviesIDs')
  const [moviesIds, setMoviesIds] = useState<number[]>(userMoviesIds)
  const [movies, setMovies] = useState<IMovie[]>([])
  const savedWatchedIds = getLocalData('watchedIds')
  const [watchedIds, setWatchedIds] = useState<number[]>(savedWatchedIds)

  const handleDeleteMovie = (id: number): void => {
    setMoviesIds((prev) => prev.filter((item) => item !== id))
  }

  const handleIsWatched = (id: number): void => {
    const index = watchedIds.findIndex((item) => item === id)
    const nextWatchedIds =
      index >= 0
        ? watchedIds.filter((item) => item !== id)
        : [...watchedIds, id]
    setWatchedIds(nextWatchedIds)
    localStorage.setItem('watchedIds', JSON.stringify(nextWatchedIds))
  }

  const fetchAndFillMovies = useCallback(async () => {
    const fetchedMovies = await Promise.all(
      moviesIds.map(async (id) => {
        const data = await getMovie(id, lang)
        return data
      })
    )

    const normalizedData = normalizeData(fetchedMovies)

    setMovies(normalizedData)

    localStorage.setItem('userMoviesIDs', JSON.stringify(moviesIds))
  }, [lang, moviesIds])

  useEffect(() => {
    void fetchAndFillMovies()
  }, [fetchAndFillMovies])

  return {
    movies,
    watchedIds,
    setMoviesIds,
    handleDeleteMovie,
    handleIsWatched,
  }
}

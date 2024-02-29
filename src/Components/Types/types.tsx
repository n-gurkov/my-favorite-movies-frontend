import { SetStateAction } from 'react'

export interface IMoviesResponse {
  results: IMovieResponse[]
  total_pages: number
}

export interface IMovieResponse {
  id: number
  title: string
  poster_path: string
  overview: string
}
export interface IFavoriteMovies {
  isBlockView: boolean
}

export interface IMovie extends Omit<IMovieResponse, 'poster_path'> {
  posterPath: string
}

export interface IGenre {
  id: number
  name: string
}

export interface IGenreListProps {
  genres: IGenre[]
  genresIds: number[]
  handleGenres: (index: number) => void
}

export interface IFavoriteMovieProps {
  isBlockView: boolean
}

export interface UseMoviesOutput {
  movies: IMovie[]
  watchedIds: number[]
  setMoviesIds: React.Dispatch<SetStateAction<number[]>>
  handleDeleteMovie: (id: number) => void
  handleIsWatched: (id: number) => void
}

export interface loginFormInputErrors {
  login?: string
  password?: string
}

import { createContext, useContext } from 'react'
import { IGenre } from 'src/Components/Types/types'

interface IMoviesContext {
  genres: IGenre[]
  selectedGenresIds: number[]
  changeSelectedGenresIds: (id: number) => void
}

const defaultContext: IMoviesContext = {
  genres: [],
  selectedGenresIds: [],
  changeSelectedGenresIds: () => {
    throw new Error('Out of context')
  },
}

export const MoviesContext = createContext(defaultContext)

export default function useMoviesContext() {
  return useContext(MoviesContext)
}

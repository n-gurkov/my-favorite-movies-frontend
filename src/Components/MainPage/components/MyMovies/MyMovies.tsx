import React from 'react'
import FavoriteMovieList from './components/MyMoviesList/MyMoviesList'
import useFavoriteMovies from '../../../../Hooks/useFavoriteMovies'
import { IFavoriteMovies } from '../../../../Components/Types/types'

const MyMovies: React.FC<IFavoriteMovies> = ({ isBlockView }) => {
  const { movies, handleDeleteMovie } = useFavoriteMovies()

  return (
    <FavoriteMovieList
      isBlockView={isBlockView}
      favoriteMovies={movies}
      handleDeleteMovie={handleDeleteMovie}
    />
  )
}

export default MyMovies

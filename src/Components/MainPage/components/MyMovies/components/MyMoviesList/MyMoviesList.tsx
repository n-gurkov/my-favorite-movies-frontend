import React from 'react'
import {
  ButtonsWrapper,
  PictureCard,
} from '../../../../../MainPage/assets/styles'
import { posterUrl } from '../../../../../../urls'
import { IFavoriteMovieProps, IMovie } from '../../../../../Types/types'
import checkmark from './assets/checkmark.svg'
import cross from './assets/cross.svg'
import {
  MovieCardButton,
  MoviePresentList,
  MovieTitle,
  MovieWrapperList,
  TextWrapper,
} from './assets/styles'
import useFavoriteMovies from 'src/Hooks/useFavoriteMovies'

const FavoriteMovieList: React.FC<IFavoriteMovieProps> = ({
  isBlockView,
  favoriteMovies,
}) => {
  const { watchedIds, handleDeleteMovie, handleIsWatched } = useFavoriteMovies()
  return (
    <MovieWrapperList isBlockView={isBlockView}>
      {favoriteMovies.map((movie: IMovie) => {
        return (
          <MoviePresentList
            isBlockView={isBlockView}
            key={movie.id}
            isWatched={watchedIds.includes(movie.id)}
          >
            <PictureCard img={posterUrl + movie.posterPath} />

            <TextWrapper isBlockView={isBlockView}>
              <MovieTitle isBlockView={isBlockView}>{movie.title}</MovieTitle>
              <span>{movie.overview}</span>
            </TextWrapper>

            <ButtonsWrapper>
              <MovieCardButton onClick={() => handleIsWatched(movie.id)}>
                <img src={checkmark} />
              </MovieCardButton>
              <MovieCardButton onClick={() => handleDeleteMovie(movie.id)}>
                <img src={cross} />
              </MovieCardButton>
            </ButtonsWrapper>
          </MoviePresentList>
        )
      })}
    </MovieWrapperList>
  )
}

export default FavoriteMovieList

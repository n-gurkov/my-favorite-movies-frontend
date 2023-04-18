import React from 'react';
import {
  ButtonsWrapper,
  PictureCard,
} from 'src/Components/MainPage/assets/styles';
import { posterUrl } from 'src/urls';
import { IFavoriteMovieProps, IMovie } from 'src/utils';
import checkmark from './assets/checkmark.svg';
import cross from './assets/cross.svg';
import {
  MovieCardButton,
  MoviePresentList,
  MovieTitle,
  MovieWrapperList,
  TextWrapper,
} from './assets/styles';

const FavoriteMovieList: React.FC<IFavoriteMovieProps> = ({
  isBlockView,
  favoriteMovies,
  handleIsWatched,
  handleDeleteMovie,
}) => {
  return (
    <MovieWrapperList isBlockView={isBlockView}>
      {favoriteMovies.map((movie: IMovie, index: number) => {
        return (
          <MoviePresentList
            isBlockView={isBlockView}
            key={movie.id}
            isWatched={movie.isWatched}
          >
            <PictureCard img={posterUrl + movie.posterPath} />

            <TextWrapper isBlockView={isBlockView}>
              <MovieTitle isBlockView={isBlockView}>{movie.title}</MovieTitle>
              <span>{movie.overview}</span>
            </TextWrapper>

            <ButtonsWrapper>
              <MovieCardButton onClick={() => handleIsWatched(index, movie.id)}>
                <img src={checkmark} />
              </MovieCardButton>
              <MovieCardButton onClick={() => handleDeleteMovie(movie.id)}>
                <img src={cross} />
              </MovieCardButton>
            </ButtonsWrapper>
          </MoviePresentList>
        );
      })}
    </MovieWrapperList>
  );
};

export default FavoriteMovieList;

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
  MovieWrapperList,
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
            isWatched={movie.isWatched ? true : false}
          >
            <PictureCard img={posterUrl + movie.poster_path} />

            <div>
              <h1>{movie.title}</h1>
              <span>{movie.overview}</span>
            </div>

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

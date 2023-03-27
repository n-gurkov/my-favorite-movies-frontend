import React from 'react';
import {
  MoviePresentList,
  MovieWrapperList,
  PictureCard,
} from 'src/Components/MainPage/assets/MainPageStyledComponents';
import { posterUrl } from 'src/urls';
import { IFavoriteMovieProps, IMovie } from 'src/utils';
import checkmark from 'src/Components/MainPage/assets/checkmark.svg';
import cross from 'src/Components/MainPage/assets/cross.svg';

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
            <PictureCard src={posterUrl + movie.poster_path} />

            <div>
              <h1>{movie.title}</h1>
              <span>{movie.overview}</span>
            </div>

            <div>
              <button onClick={() => handleIsWatched(index, movie.id)}>
                <img src={checkmark} />
              </button>
              <button onClick={() => handleDeleteMovie(movie.id)}>
                <img src={cross} />
              </button>
            </div>
          </MoviePresentList>
        );
      })}
    </MovieWrapperList>
  );
};

export default FavoriteMovieList;

import React from 'react';
import {
  MoviePresentList,
  MovieWrapperList,
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
            <h1>{movie.title}</h1>
            <img src={posterUrl + movie.poster_path} alt={movie.title}/>
            <span>{movie.overview}</span>
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

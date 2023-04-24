import React, { useEffect, useState } from 'react';
import i18n from 'src/i18n';
import {
  toggleWatched,
  deleteFavorite,
  getLocalData,
  getMovie,
  IMovie,
  IMovieResponse,
} from 'src/utils';
import FavoriteMovieList from './components/MyMoviesList/MyMoviesList';

interface IFavoriteMovies {
  isBlockView: boolean;
}
const USER_MOVIES_IDS = [103, 15, 234, 24, 255, 77, 78, 28, 11];
localStorage.setItem('userMoviesIDs', JSON.stringify(USER_MOVIES_IDS));
const MyMovies: React.FC<IFavoriteMovies> = ({ isBlockView }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const userMoviesIDs = getLocalData('userMoviesIDs');
    if (!userMoviesIDs.length) return;
    const watchedIds = getLocalData('watchedMovies');
    userMoviesIDs.map((id: number) =>
      getMovie(id, i18n.language).then((movie: IMovieResponse) => {
        setFavoriteMovies((prev) =>
          prev.concat({
            ...movie,
            posterPath: movie.poster_path,
            isWatched: watchedIds.includes(movie.id) ? true : false,
          })
        );
      })
    );
  }, []);

  const handleDeleteMovie = (id: number) => {
    deleteFavorite(id);
    setFavoriteMovies(favoriteMovies.filter((item) => item.id !== id));
  };

  const handleIsWatched = (index: number, id: number) => {
    toggleWatched(id);
    favoriteMovies[index].isWatched = !favoriteMovies[index].isWatched;
    setFavoriteMovies([...favoriteMovies]);
  };

  return (
    <FavoriteMovieList
      isBlockView={isBlockView}
      favoriteMovies={favoriteMovies}
      handleIsWatched={handleIsWatched}
      handleDeleteMovie={handleDeleteMovie}
    />
  );
};

export default MyMovies;

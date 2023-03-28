import React, { useEffect, useState } from 'react';
import i18n from 'src/i18n';
import {
  addWatched,
  deleteFavorite,
  getLocalData,
  getMovie,
  IMovie,
} from 'src/utils';
import FavoriteMovieList from './components/MyMoviesList/MyMoviesList';

interface IFavoriteMovies {
  isBlockView: boolean;
}
const MyMovies: React.FC<IFavoriteMovies> = ({ isBlockView }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);
  const [userMoviesIDs, setUserIDs] = useState<number[]>([]);

  useEffect(() => {
    // const watchedMovies: number[] = getLocalData('userMoviesIDs');
    const watchedMovies: number[] = [100, 150];
    if (!watchedMovies.length) return;

    watchedMovies.map((id) =>
      getMovie(id, i18n.language).then((movie: IMovie) => {
        setFavoriteMovies((prev) =>
          prev.concat({
            ...movie,
            ...{
              isWatched: watchedMovies.find((item: number) => item === movie.id)
                ? true
                : false,
            },
          })
        );
      })
    );
  }, [userMoviesIDs]);

  const handleDeleteMovie = (id: number) => {
    deleteFavorite(id);
    setFavoriteMovies(favoriteMovies.filter((item) => item.id !== id));
  };

  const handleIsWatched = (index: number, id: number) => {
    addWatched(id);
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

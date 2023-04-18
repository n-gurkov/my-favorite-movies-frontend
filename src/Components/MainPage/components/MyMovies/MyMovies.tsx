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
localStorage.setItem('userMoviesIDs', JSON.stringify([103, 15, 234]));
const MyMovies: React.FC<IFavoriteMovies> = ({ isBlockView }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);
  const [userMoviesIDs, setUserIDs] = useState<number[]>([]);

  useEffect(() => {
    const favoriteMovies: number[] = getLocalData('userMoviesIDs');
    if (!favoriteMovies.length) return;

    favoriteMovies.map((id) =>
      getMovie(id, i18n.language).then((movie: IMovie) => {
        setFavoriteMovies((prev) =>
          prev.concat({
            ...movie,
            posterPath: movie.poster_path,
            ...{
              isWatched: favoriteMovies.find(
                (item: number) => item === movie.id
              )
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

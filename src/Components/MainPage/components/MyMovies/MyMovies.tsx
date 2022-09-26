import React, { useEffect, useState } from 'react';
import i18n from 'src/i18n';
import {
  addWatched,
  deleteFavorite,
  getLocalData,
  getMovie,
  IMovie,
} from 'src/utils';
import FavoriteMovieList from './components/MyMoviesList';

interface IFavoriteMovies {
  isBlockView: boolean;
}
const MyMovies: React.FC<IFavoriteMovies> = ({ isBlockView }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);
  const [userMoviesIDs, setUserIDs] = useState<number[]>([]);

  useEffect(() => {
   let qwwer = [100] 
  localStorage.setItem('userMoviesIDs', JSON.stringify(qwwer));
    let watched: [] = [];
    let qw = getLocalData('userMoviesIDs')
    if (getLocalData('userMoviesIDs') !== []) {
     watched = getLocalData('userMoviesIDs');
      console.log(watched)
    }
    
    watched.map((id) =>
      getMovie(id, i18n.language).then((movie: IMovie) => {
        setFavoriteMovies((prev) =>
          prev.concat({
            ...movie,
            ...{
              isWatched: watched.find((item: number) => item === movie.id)
                ? true
                : false,
            },
          }),
        );
      }),
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
    <div>
      <FavoriteMovieList
        isBlockView = {isBlockView}
        favoriteMovies={favoriteMovies}
        handleIsWatched={handleIsWatched}
        handleDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
};

export default MyMovies;

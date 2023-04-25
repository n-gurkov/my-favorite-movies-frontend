import { genresListUrl, moviesListUrl, movieUrl } from './urls';

const users = {
  admin: '12345',
  user: '12345',
  test: 'test',
};

export const initUsers = () => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const getLocalData = (key: string) => {
  const data = localStorage.getItem(key);
  return data !== null ? JSON.parse(data) : [];
};

export const checkPassword = (login: string, password: string) => {
  const users = getLocalData('users') || [];

  if (password !== users[login]) {
    return false;
  } else {
    localStorage.setItem('currentUser', login);
    localStorage.setItem('isLogged', 'true');
    return true;
  }
};

export const getGenresList = (language: string) => {
  return fetch(
    `${genresListUrl}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`,

    { method: 'GET' }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.genres;
    })
    .catch(() => {
      return {};
    });
};

export const getMoviesList = (
  page: number,
  language?: string,
  withGenres?: string,
  year?: number,
  rating?: number
) => {
  return fetch(
    `${moviesListUrl}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&with_genres=${withGenres}&year=${year}&vote_average.gte=${rating}&page=${page}`,

    { method: 'GET' }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch(() => {
      return {};
    });
};

export const getMovie = (movieId: number, language?: string) => {
  return fetch(
    `${movieUrl}${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`,

    { method: 'GET' }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch(() => {
      return {};
    });
};

const addOrDeleteItem = (list: number[], item: number): number[] => {
  let newList = list;
  if (list.find((element) => element === item)) {
    newList = list.filter((element) => element !== item);
  } else {
    newList.push(item);
  }
  return newList;
};

export const toggleWatched = (id: number) => {
  const watched: number[] = getLocalData('watchedMovies');
  localStorage.setItem(
    'watchedMovies',
    JSON.stringify(addOrDeleteItem(watched, id))
  );
};

export const deleteFavorite = (id: number) => {
  const remove = getLocalData('userMoviesIDs').filter(
    (item: number) => item !== id
  );
  localStorage.setItem('userMoviesIDs', JSON.stringify(remove));
};

export interface IMovieResponse {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface IMovie extends Omit<IMovieResponse, 'poster_path'> {
  posterPath: string;
  isWatched: boolean;
}

export interface IFavoriteMovieProps {
  isBlockView: boolean;
  favoriteMovies: IMovie[];
  handleIsWatched: (index: number, id: number) => void;
  handleDeleteMovie: (id: number) => void;
}

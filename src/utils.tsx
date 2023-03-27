import { genresListUrl, moviesListUrl, movieUrl } from "./urls";

const users = {
  admin: '12345',
  user: '12345',
  test: 'test',
};

export const initUsers = () => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const getLocalData = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) || '')
    : [];
};

export const checkPassword = (login: string, password: string) => {
  const users = getLocalData('users') || [];

  if (password !== users[login]) {
    return false;
  }
  else {
    localStorage.setItem('currentUser', login);
    localStorage.setItem('isLogged', 'true');
    return true;
  }
};

export const getGenresList = (language: string) => {
  return fetch(
    `${genresListUrl}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`,

    { method: 'GET' },

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

  rating?: number,
) => {
  return fetch(
    `${moviesListUrl}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&with_genres=${withGenres}&year=${year}&vote_average.gte=${rating}&page=${page}`,
   
   { method: 'GET' }, 
   
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
    
    { method: 'GET' },
    
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


export interface IGenre {
  id: number;
  name: string;
}

const checkAdding = (watched: number[], id: number): number[] => {
  if (watched.find((item) => item === id)) {
    watched = watched.filter((item) => item !== id);
  } else {
    watched.push(id);
  }
  return watched;
};
export const addWatched = (id: number) => {
  if (localStorage.getItem('watchedMovies') === null) {
    localStorage.setItem('watchedMovies', JSON.stringify([id]));
  } else {
    let watched: number[] = JSON.parse(
      localStorage.getItem('watchedMovies') || '',
    );
    localStorage.setItem(
      'watchedMovies',
      JSON.stringify(checkAdding(watched, id)),
    );
  }
};

export const deleteFavorite = (id: number) => {
  let remove = JSON.parse(localStorage.getItem('userMoviesIDs') || '');
  remove = remove.filter((item: number) => item !== id);
  localStorage.setItem('userMoviesIDs', JSON.stringify(remove));
};

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  isWatched?: boolean;
}

export interface IFavoriteMovieProps {
  isBlockView: boolean;
  favoriteMovies: IMovie[];
  handleIsWatched: (index: number, id: number) => void;
  handleDeleteMovie: (id: number) => void;
} 


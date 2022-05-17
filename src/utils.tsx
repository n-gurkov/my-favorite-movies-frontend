import { genresListUrl, moviesListUrl, movieUrl } from "./urls";

const users = {
  admin: "12345",
  user: "12345",
};

export const initUsers = () => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const getLocalData = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) || "")
    : [];
};

export const checkPassword = (login: string, password: string) => {
  const users = getLocalData("users") || [];

  if (password !== users[login]) return false;
  {
    localStorage.setItem("currentUser", login);
    return true;
  }
};

export const getGenresList = (language: string) => {
  return fetch(
    `${genresListUrl}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`,
    { method: "GET" }
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
    { method: "GET" }
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
    { method: "GET" }
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

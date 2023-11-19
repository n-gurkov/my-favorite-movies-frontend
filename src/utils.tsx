import { moviesListUrl } from './urls'

const users = {
  admin: '12345',
  user: '12345',
  test: 'test',
}

export const initUsers = () => {
  localStorage.setItem('users', JSON.stringify(users))
}

export const getLocalData = (key: string) => {
  const data = localStorage.getItem(key)
  return data !== null ? JSON.parse(data) : []
}

export const checkPassword = (login: string, password: string) => {
  const users = getLocalData('users') || []

  if (password !== users[login]) {
    return false
  } else {
    localStorage.setItem('currentUser', login)
    localStorage.setItem('isLogged', 'true')
    return true
  }
}

export const clearLogInData = () => {
  localStorage.removeItem('currentUser')
  localStorage.setItem('isLogged', 'false')
}

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
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch(() => {
      return {}
    })
}

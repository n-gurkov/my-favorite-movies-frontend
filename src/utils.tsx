const users = {
  admin: '12345',
  user: '12345',
  test: 'test',
}

export const initUsers = () => {
  if (JSON.stringify(getLocalData('users')) !== JSON.stringify(users)) {
    localStorage.setItem('users', JSON.stringify(users))
  }
}

export const getLocalData = (key: string) => {
  const data = localStorage.getItem(key)
  return data !== null ? JSON.parse(data) : []
}

export const checkPassword = (login: string, password: string) => {
  const userPassword = (getLocalData('users') || [])[login]
  return userPassword === password
}

export const fillCurrentUser = (login: string) => {
  localStorage.setItem('currentUser', JSON.stringify(login))
  localStorage.setItem('isLogged', 'true')
  return true
}

export const loginUser = (login: string, password: string) => {
  return checkPassword(login, password) && fillCurrentUser(login)
}

export const clearLogInData = () => {
  localStorage.removeItem('currentUser')
  localStorage.setItem('isLogged', 'false')
}

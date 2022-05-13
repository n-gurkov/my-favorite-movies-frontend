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
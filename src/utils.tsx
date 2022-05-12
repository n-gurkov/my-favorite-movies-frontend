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

export const checkPassword = (login: any, password: string) => {
  const users = getLocalData("users");
  if (users !== []) {
    if (password === users[login]) {
      localStorage.setItem("currentUser", login);
      return true;
    } else {
      return false;
    }
  }
};
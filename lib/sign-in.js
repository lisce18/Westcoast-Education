export const isLoggedIn = () => {
  return localStorage.getItem('costumer') !== null;
};

export const logIn = async (username, password) => {
  const costumers = await getUsers();
};

import { query } from '../../utilities/config.js';

export const costumerBtn = () => {
  if (query.currentQuery === 'signUpNewCostumer') {
    document.querySelector('#sign-up-form').style.display = 'block';
  } else {
    document.querySelector('#sign-in-form').style.display = 'block';
  }
};

export const isLoggedIn = () => {
  return localStorage.getItem('costumer') !== null;
};

export const logIn = async (username, password) => {
  const costumers = await getUsers();
};

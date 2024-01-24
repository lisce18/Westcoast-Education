import HttpClient from './http.js';

const form = document.querySelector('#signIn');
const welcomeCustomer = document.querySelector('#welcomeCustomer');

const logInHandler = async (e) => {
  e.preventDeafult();
  console.log('Loggar in');
  const costumer = getAllCostumers();

  const found = costumer.find(
    (costumers) =>
      costumers.costumerEmail === form.costumerEmail.value &&
      costumers.password === form.password.value
  );

  if (found) {
    location.href = '../index.html';
    const title = document.createElement('h1');
    title.appendChild(
      document.createTextNode(`Välkommen, ${costumer.firstName}!`)
    );
    return title;
  } else {
    alert('Du finns inte i systemet, testa att registrera dig.');
  }
};

const getAllCostumers = async () => {
  const url = 'http://localhost:3000/costumers';
  const http = new HttpClient(url);
  const customer = await http.get();
  return customer;
};

form.addEventListener('submit', logInHandler);

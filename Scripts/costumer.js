import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const form = document.querySelector('#signUpForm');

const addCostumer = async (e) => {
  e.preventDefault();

  const costumer = new FormData(form);
  const obj = convertFormDataToJson(costumer);
  saveCostumer(obj);
};

const saveCostumer = async (costumer) => {
  const url = 'http://localhost:3000/costumers';
  const http = new HttpClient(url);
  await http.add(costumer);
  location.href = '../index.html';
};

form.addEventListener('submit', addCostumer);

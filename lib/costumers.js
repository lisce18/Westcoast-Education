import HttpClient from '../utilities/http.js';
import { createCostumerCard } from './dom/costumers-dom.js';

export const initCostumers = async () => {
  const costumerList = document.querySelector('#costumer-list');
  const costumers = await getCostumers();

  costumers.forEach((costumer) => {
    costumerList.appendChild(createCostumerCard(costumer));
  });
};
const getCostumers = async () => {
  const url = 'http://localhost:3000/costumers';
  const http = new HttpClient(url);
  const costumers = await http.get();
  return costumers;
};

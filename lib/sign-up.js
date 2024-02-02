import HttpClient from '../Models/http.js';
import { baseUrl } from '../utilities/config.js';
import { convertFormDataToJson } from '../utilities/convertForm.js';

export const addNewCostumer = (regCostumer) => {
  regCostumer = async () => {
    e.preventDefault();

    const costumer = new FormData(form);
    const obj = convertFormDataToJson(costumer);
    obj.username =
      `${obj.fullName}`.toLocaleLowerCase() + Math.floor(math.random() * 100);
    localStorage.setItem('username', obj.username);
    this.saveCostumer(obj);
  };

  saveCostumer = async (costumer) => {
    const http = new HttpClient(`${baseUrl}costumers`);
    await http.add(costumer);
    location.href = `./Pages/gallery.html?costumer=${costumer.username}`;
  };
};

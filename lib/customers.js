import HttpClient from "../utilities/http.js";
import { createCustomerCard } from "./dom/customers-dom.js";

export const initCustomers = async () => {
  const customerList = document.querySelector("#customer-list");
  const customers = await getCustomers();

  customers.forEach((customer) => {
    customerList.appendChild(createCustomerCard(customer));
  });
};
export const getCustomers = async () => {
  const url = "http://localhost:3000/customers";
  const http = new HttpClient(url);
  const customers = await http.get();
  return customers;
};

export const getCustomer = async (id) => {
  const url = `http://localhost:3000/customers/${id}`;
  const http = new HttpClient(url);
  const customer = await http.get();
  return customer;
};

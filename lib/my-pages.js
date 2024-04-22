import { createMyPages } from "./dom/my-pages-dom";

export const initMyPages = async () => {
  const customerId = Number(location.search.split("=")[1]);
  displayCustomerInfo(customerId);
};

const displayCustomerInfo = async (id) => {
  const url = `${baseUrl}customers?id=${id}`;
  const http = new HttpClient(url);
  const customer = await http.get();
  createMyPages(customer);
};

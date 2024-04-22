import { getCustomers } from "./customers.js";

export const logIn = async (email, password) => {
  const customers = await getCustomers();

  const customer = customers.find((customer) => {
    return email === customer.email && password === customer.password;
  });

  if (customer) {
    localStorage.setItem("email", JSON.stringify(customer.email));
    localStorage.setItem("isLoggedIn", true);
    return true;
  } else {
    console.log("No customer found");
    return false;
  }
};

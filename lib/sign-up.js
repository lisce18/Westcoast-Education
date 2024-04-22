import HttpClient from "../utilities/http.js";
import { baseUrl } from "../utilities/config.js";
import { convertFormDataToJson } from "../utilities/convertForm.js";

export const addNewCustomer = async () => {
  const form = document.querySelector("#signUpForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const customer = new FormData(form);
    const obj = convertFormDataToJson(customer);
    obj.courses = [];
    await saveCustomer(obj);
  });
};

const saveCustomer = async (customer) => {
  const http = new HttpClient(baseUrl);
  await http.add("customers", customer);
  location.href = "/";
};

document.addEventListener("DOMContentLoaded", addNewCustomer);

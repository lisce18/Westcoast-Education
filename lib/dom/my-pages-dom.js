import { getCustomers } from "../customers.js";
import {
  createDiv,
  createUnderTitle,
  createTitle,
  createParagraph,
  createH3,
} from "./init-dom.js";

export const createMyPages = async () => {
  const customers = await getCustomers();

  const loggedInEmail = JSON.parse(localStorage.getItem("email"));
  const customer = customers.find(
    (customer) => customer.email === loggedInEmail
  );

  const myPages = document.querySelector("#my-pages");
  const title = createTitle();
  title.textContent = "Mina sidor";
  myPages.appendChild(title);

  const profileList = createDiv();
  profileList.setAttribute("customerId", customer.id);
  profileList.classList.add("profile-list");
  const customerInfoContainer = createDiv();
  const customerName = createUnderTitle();
  const fullNameParts = customer.fullName.split(" ");
  const customerFirstName = createParagraph();
  customerFirstName.textContent = fullNameParts[0];
  customerName.appendChild(customerFirstName);
  const customerLastName = createParagraph();
  customerLastName.textContent = fullNameParts.slice(1).join(" ");
  customerName.appendChild(customerLastName);
  profileList.appendChild(customerName);
  const infoContainer = createDiv();
  infoContainer.classList.add("info-container");
  const customerAddress = createParagraph();
  customerAddress.textContent = `Adress: ${customer.billingAddress}`;
  infoContainer.appendChild(customerAddress);
  const customerPhone = createParagraph();
  customerPhone.textContent = `Telefonnummer: ${customer.phoneNr}`;
  infoContainer.appendChild(customerPhone);
  const customerEmail = createParagraph();
  customerEmail.textContent = `Email: ${customer.email}`;
  infoContainer.appendChild(customerEmail);
  profileList.appendChild(infoContainer);

  const courseList = createDiv();
  courseList.classList.add("course-list");
  const courseTitle = createH3();
  courseTitle.textContent = "Mina kurser";
  courseList.appendChild(courseTitle);
  if (customer.courses.length === 0) {
    const noCourses = createParagraph();
    noCourses.textContent =
      "Du har inte registrerat dig för några kurser ännu.";
    courseList.appendChild(noCourses);
  } else {
    customer.courses.forEach((course) => {
      const courseName = createParagraph();
      courseName.textContent = course;
      courseList.appendChild(courseName);
    });
  }
  courseList.classList.add("course-list");
  customerInfoContainer.appendChild(courseList);
  profileList.appendChild(customerInfoContainer);
  myPages.appendChild(profileList);
};

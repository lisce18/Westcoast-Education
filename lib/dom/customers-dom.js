import { createParagraph, createDiv, createH3 } from "./init-dom.js";

export const createCustomerCard = (customer) => {
  const customerContainer = createDiv();
  customerContainer.classList.add("customer-name");
  customerContainer.appendChild(createCustomerName(customer));
  customerContainer.appendChild(createCustomerInfoCard(customer));
  return customerContainer;
};

const createCustomerName = (customer) => {
  const nameTitle = createH3();
  nameTitle.setAttribute("id", customer.id);
  nameTitle.textContent = `Kund: ${customer.fullName}`;

  return nameTitle;
};

const createCustomerInfoCard = (customer) => {
  const infoCard = createDiv();
  infoCard.classList.add("customer-info");

  const addressParagraph = createParagraph();
  addressParagraph.appendChild(
    document.createTextNode(`Adress: ${customer.billingAddress}`)
  );
  infoCard.appendChild(addressParagraph);

  const phoneParagraph = createParagraph();
  phoneParagraph.appendChild(
    document.createTextNode(`Tel nr: ${customer.phoneNr}`)
  );
  infoCard.appendChild(phoneParagraph);

  const emailParagraph = createParagraph();
  emailParagraph.appendChild(
    document.createTextNode(`E-post: ${customer.email}`)
  );
  infoCard.appendChild(emailParagraph);

  return infoCard;
};

export const addNameClickHandler = (nameDivs) => {
  nameDivs.forEach((nameDiv) => {
    nameDiv.addEventListener("click", () => {
      location.href = `./`;
    });
  });
};

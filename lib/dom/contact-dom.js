import {
  createForm,
  createLabel,
  createInput,
  createDiv,
  createTextArea,
  createButton,
  createTitle,
} from "./init-dom.js";

export const createContactForm = () => {
  const contactForm = document.querySelector("#contact-form");

  const createContactForm = createForm();
  createContactForm.setAttribute("id", "contactForm");

  const formTitle = createTitle();
  formTitle.textContent = "Kontakta oss";
  createContactForm.appendChild(formTitle);

  const formControlName = createDiv();
  formControlName.classList.add("form-control");
  const nameLabel = createLabel();
  nameLabel.setAttribute("for", "fullName");
  nameLabel.textContent = "Namn:";
  formControlName.appendChild(nameLabel);
  const inputName = createInput();
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "fullName");
  inputName.setAttribute("name", "fullName");
  inputName.setAttribute("placeholder", "Ange fullständigt namn");
  formControlName.appendChild(inputName);
  createContactForm.appendChild(formControlName);

  const formControlEmail = createDiv();
  formControlEmail.classList.add("form-control");
  const emailLabel = createLabel();
  emailLabel.setAttribute("for", "emailContact");
  emailLabel.textContent = "E-mail:";
  formControlEmail.appendChild(emailLabel);
  const inputEmail = createInput();
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "emailContact");
  inputEmail.setAttribute("name", "emailContact");
  inputEmail.setAttribute("placeholder", "Ange E-mail");
  formControlEmail.appendChild(inputEmail);
  createContactForm.appendChild(formControlEmail);

  const formControlText = createDiv();
  formControlText.classList.add("form-control");
  const formText = createTextArea();
  formText.setAttribute("name", "form-text");
  formText.setAttribute("id", "form-text");
  formText.setAttribute("cols", 30);
  formText.setAttribute("rows", 15);
  formText.setAttribute("placeholder", "Meddelande");
  formControlText.appendChild(formText);
  createContactForm.appendChild(formControlText);

  const formControlBtn = createDiv();
  formControlBtn.classList.add("form-control");
  const contactBtn = createButton();
  contactBtn.classList.add("btn");
  contactBtn.textContent = "Skicka";
  contactBtn.setAttribute("type", "submit");
  formControlBtn.appendChild(contactBtn);
  createContactForm.appendChild(formControlBtn);

  contactForm.appendChild(createContactForm);
};

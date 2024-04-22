import {
  createButton,
  createForm,
  createInput,
  createLabel,
  createLink,
  createSection,
  createTitle,
  createDiv,
} from "./init-dom.js";

export const createSignUpForm = () => {
  const signUpForm = document.querySelector("#sign-up-form");

  const signUpContainer = createSection();
  const title = createTitle();
  title.textContent = "Registrera Dig";
  title.classList.add("page-title");
  signUpContainer.appendChild(title);

  const formSignUp = createForm();
  formSignUp.setAttribute("id", "signUpForm");

  const formControlBackBtn = createDiv();
  const backBtn = createLink();
  backBtn.textContent = "Tillbaka";
  backBtn.setAttribute("href", "./sign-in.html");
  backBtn.classList.add("btn");
  formControlBackBtn.appendChild(backBtn);
  formSignUp.appendChild(formControlBackBtn);

  const formControlFullName = createDiv();
  formControlFullName.classList.add("form-control");
  const fullNameLabel = createLabel();
  fullNameLabel.setAttribute("for", "fullName");
  fullNameLabel.textContent = "Fullständigt namn:";
  formControlFullName.appendChild(fullNameLabel);
  const inputFullName = createInput();
  inputFullName.setAttribute("type", "text");
  inputFullName.setAttribute("id", "fullName");
  inputFullName.setAttribute("name", "fullName");
  inputFullName.setAttribute("placeholder", "Ange fullständigt namn...");
  formControlFullName.appendChild(inputFullName);
  formSignUp.appendChild(formControlFullName);

  const formControlAddress = createDiv();
  formControlAddress.classList.add("form-control");
  const addressLabel = createLabel();
  addressLabel.setAttribute("for", "billingAddress");
  addressLabel.textContent = "Address:";
  formControlAddress.appendChild(addressLabel);
  const inputAddress = createInput();
  inputAddress.setAttribute("type", "text");
  inputAddress.setAttribute("id", "billingAddress");
  inputAddress.setAttribute("name", "billingAddress");
  inputAddress.setAttribute("placeholder", "Ange adress...");
  formControlAddress.appendChild(inputAddress);
  formSignUp.appendChild(formControlAddress);

  const formControlEmail = createDiv();
  formControlEmail.classList.add("form-control");
  const emailLabel = createLabel();
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email:";
  formControlEmail.appendChild(emailLabel);
  const inputEmail = createInput();
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "email");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute("placeholder", "Ange E-mail...");
  formControlEmail.appendChild(inputEmail);
  formSignUp.appendChild(formControlEmail);

  const formControlPhoneNr = createDiv();
  formControlPhoneNr.classList.add("form-control");
  const phoneNrLabel = createLabel();
  phoneNrLabel.setAttribute("for", "phoneNr");
  phoneNrLabel.textContent = "Telefon nummer:";
  formControlPhoneNr.appendChild(phoneNrLabel);
  const inputPhoneNr = createInput();
  inputPhoneNr.setAttribute("type", "text");
  inputPhoneNr.setAttribute("id", "phoneNr");
  inputPhoneNr.setAttribute("name", "phoneNr");
  inputPhoneNr.setAttribute("placeholder", "Ange telefon nummer...");
  formControlPhoneNr.appendChild(inputPhoneNr);
  formSignUp.appendChild(formControlPhoneNr);

  const formControlPassword = createDiv();
  formControlPassword.classList.add("form-control");
  const passwordLabel = createLabel();
  passwordLabel.setAttribute("for", "password");
  passwordLabel.textContent = "Lösenord";
  formControlPassword.appendChild(passwordLabel);
  const inputPassword = createInput();
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("id", "password");
  inputPassword.setAttribute("name", "password");
  inputPassword.setAttribute("placeholder", "Ange Lösenord...");
  formControlPassword.appendChild(inputPassword);
  formSignUp.appendChild(formControlPassword);

  const formControlBtn = createDiv();
  formControlBtn.classList.add("form-control");
  const signUpBtn = createButton();
  signUpBtn.classList.add("btn");
  signUpBtn.textContent = "Registrera";
  signUpBtn.setAttribute("type", "submit");
  formControlBtn.appendChild(signUpBtn);
  formSignUp.appendChild(formControlBtn);

  const formControlLogInBtn = createDiv();
  formControlLogInBtn.classList.add("form-control");
  const logInBtn = createLink();
  logInBtn.classList.add("btn");
  logInBtn.textContent = "Logga in";
  logInBtn.setAttribute("type", "submit");
  logInBtn.setAttribute("href", "/");
  formControlLogInBtn.appendChild(logInBtn);
  formSignUp.appendChild(formControlLogInBtn);
  signUpForm.appendChild(formSignUp);
};

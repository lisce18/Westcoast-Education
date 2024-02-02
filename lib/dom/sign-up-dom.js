import {
  createButton,
  createForm,
  createInput,
  createLabel,
  createLink,
  createSection,
  createTitle,
  createDiv,
} from './init-dom.js';

/*******************************************************************/
// Creating Sign In Form
/*******************************************************************/

export const createSignUpForm = () => {
  const signUpForm = document.querySelector('#sign-up-form');

  const signUpContainer = createSection();
  const title = createTitle();
  title.textContent = 'Registrera Dig';
  title.classList.add('page-title');
  signUpContainer.appendChild(title);

  // Skapar form
  const formSignUp = createForm();

  // Skapar en tillbaka knapp/länk
  const formControlBackBtn = createDiv();
  const backBtn = createLink();
  backBtn.textContent = 'Tillbaka';
  backBtn.setAttribute('href', './sign-in.html');
  backBtn.classList.add('btn');
  formControlBackBtn.appendChild(backBtn);
  formSignUp.appendChild(formControlBackBtn);

  // Skpar en input för förnamn
  const formControlFullName = createDiv();
  const fullNameLabel = createLabel();
  fullNameLabel.setAttribute('for', 'fullName');
  fullNameLabel.textContent = 'Fullständigt namn:';
  formControlFullName.appendChild(fullNameLabel);
  const inputFullName = createInput();
  inputFullName.setAttribute('type', 'text');
  inputFullName.setAttribute('id', 'fullName');
  inputFullName.setAttribute('name', 'fullName');
  inputFullName.setAttribute('placeholder', 'Ange fullständigt namn...');
  formControlFullName.appendChild(inputFullName);
  formSignUp.appendChild(formControlFullName);

  // Skapar en input för att skriva in adress
  const formControlAddress = createDiv();
  const addressLabel = createLabel();
  addressLabel.setAttribute('for', 'signUpAddress');
  addressLabel.textContent = 'Address:';
  formControlAddress.appendChild(addressLabel);
  const inputAddress = createInput();
  inputAddress.setAttribute('type', 'text');
  inputAddress.setAttribute('id', 'signUpAddress');
  inputAddress.setAttribute('name', 'signupAddress');
  inputAddress.setAttribute('placeholder', 'Ange adress...');
  formControlAddress.appendChild(inputAddress);
  formSignUp.appendChild(formControlAddress);

  // Skapar input för att skriva in email
  const formControlEmail = createDiv();
  const emailLabel = createLabel();
  emailLabel.setAttribute('for', 'signInEmail');
  emailLabel.textContent = 'Email:';
  formControlEmail.appendChild(emailLabel);
  const inputEmail = createInput();
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('id', 'signInEmail');
  inputEmail.setAttribute('name', 'signInEmail');
  inputEmail.setAttribute('placeholder', 'Ange E-mail...');
  formControlEmail.appendChild(inputEmail);
  formSignUp.appendChild(formControlEmail);

  // Skapar en input för att skriva in telefonnummer
  const formControlPhoneNr = createDiv();
  const phoneNrLabel = createLabel();
  phoneNrLabel.setAttribute('for', 'signUpNumber');
  phoneNrLabel.textContent = 'Telefon nummer:';
  formControlPhoneNr.appendChild(phoneNrLabel);
  const inputPhoneNr = createInput();
  inputPhoneNr.setAttribute('type', 'text');
  inputPhoneNr.setAttribute('id', 'signUpNumber');
  inputPhoneNr.setAttribute('name', 'signUpNumber');
  inputPhoneNr.setAttribute('placeholder', 'Ange telefon nummer...');
  formControlPhoneNr.appendChild(inputPhoneNr);
  formSignUp.appendChild(formControlPhoneNr);

  // Skapar en input för att skriva in lösenord
  const formControlPassword = createDiv();
  const passwordLabel = createLabel();
  passwordLabel.setAttribute('for', 'signInPassword');
  passwordLabel.textContent = 'Lösenord';
  formControlPassword.appendChild(passwordLabel);
  const inputPassword = createInput();
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('id', 'signInPassword');
  inputPassword.setAttribute('name', 'signInPassword');
  inputPassword.setAttribute('placeholder', 'Ange Lösenord...');
  formControlPassword.appendChild(inputPassword);
  formSignUp.appendChild(formControlPassword);

  // Skapar 'Registrera knappen'
  const formControlBtn = createDiv();
  formControlBtn.classList.add('form-control');
  const signUpBtn = createButton();
  signUpBtn.classList.add('btn');
  signUpBtn.textContent = 'Registrera';
  signUpBtn.setAttribute('type', 'submit');
  formControlBtn.appendChild(signUpBtn);
  formSignUp.appendChild(formControlBtn);

  // Skapar 'Registrera knappen'
  const formControlLogInBtn = createDiv();
  formControlLogInBtn.classList.add('form-control');
  const logInBtn = createLink();
  logInBtn.classList.add('btn');
  logInBtn.textContent = 'Logga in';
  logInBtn.setAttribute('type', 'submit');
  logInBtn.setAttribute('href', '../Pages/log-in.html');
  formControlLogInBtn.appendChild(logInBtn);
  formSignUp.appendChild(formControlLogInBtn);
  signUpForm.appendChild(formSignUp);
};

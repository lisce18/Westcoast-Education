import {
  createButton,
  createForm,
  createInput,
  createLabel,
  createSection,
  createTitle,
  createDiv,
  createLink,
} from './init-dom.js';

/*******************************************************************/
// Creating Sign In Form
/*******************************************************************/

export const createSignInForm = () => {
  const signInForm = document.querySelector('#sign-in-form');

  const signInContainer = createSection();
  const title = createTitle('Logga in');
  title.classList.add('page-title');
  signInContainer.appendChild(title);

  // Skapar form
  const formSignIn = createForm();

  // Skapar en tillbaka knapp
  const formControlBackBtn = createDiv();
  const backBtn = createLink();
  backBtn.textContent = 'Tillbaka';
  backBtn.setAttribute('href', '../index.html');
  backBtn.classList.add('btn');
  formControlBackBtn.appendChild(backBtn);
  formSignIn.appendChild(formControlBackBtn);

  // Skapar en input för att skriva in email
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
  formSignIn.appendChild(formControlEmail);

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
  formSignIn.appendChild(formControlPassword);

  // Skapar 'Logga in knappen'
  const formControlBtn = createDiv();
  formControlBtn.classList.add('form-control');
  const signInBtn = createButton();
  signInBtn.classList.add('btn');
  signInBtn.textContent = 'Logga in';
  signInBtn.setAttribute('type', 'submit');
  formControlBtn.appendChild(signInBtn);
  formSignIn.appendChild(formControlBtn);

  // Skapar en knapp för att komma till en registrerings sida
  const formControlSignUp = createDiv();
  const signUpBtn = createLink();
  signUpBtn.textContent = 'Registrera ny användare';
  signUpBtn.setAttribute('href', '../Pages/sign-up.html');
  signUpBtn.classList.add('btn');
  formControlSignUp.appendChild(signUpBtn);
  formSignIn.appendChild(formControlSignUp);

  signInContainer.appendChild(formSignIn);
  signInForm.appendChild(signInContainer);
};

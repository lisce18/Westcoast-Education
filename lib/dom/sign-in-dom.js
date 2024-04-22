import {
  createButton,
  createForm,
  createInput,
  createLabel,
  createSection,
  createTitle,
  createDiv,
  createLink,
} from "./init-dom.js";
import { logIn } from "../sign-in.js";

export const createSignInForm = () => {
  const signInForm = document.querySelector("#sign-in-form");

  const signInContainer = createSection();
  const title = createTitle("Logga in");
  title.classList.add("page-title");
  title.textContent = "Logga in";
  signInContainer.appendChild(title);

  const formSignIn = createForm();
  formSignIn.setAttribute("id", "signInForm");

  formSignIn.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#signInEmail").value;
    const password = document.querySelector("#signInPassword").value;

    const loggedIn = await logIn(email, password);

    if (loggedIn) {
      window.location.href = "/Pages/first-page.html";
    } else {
      alert("Login failed. Please check your email and password.");
    }
  });

  const formControlSignUp = createDiv();
  formControlSignUp.classList.add("form-control");
  const signUpBtn = createLink();
  signUpBtn.textContent = "Registrera ny användare";
  signUpBtn.setAttribute("href", "../Pages/sign-up.html");
  signUpBtn.classList.add("btn");
  formControlSignUp.appendChild(signUpBtn);
  formSignIn.appendChild(formControlSignUp);

  const formControlEmail = createDiv();
  formControlEmail.classList.add("form-control");
  const emailLabel = createLabel();
  emailLabel.setAttribute("for", "signInEmail");
  emailLabel.textContent = "Email: ";
  formControlEmail.appendChild(emailLabel);
  const inputEmail = createInput();
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "signInEmail");
  inputEmail.setAttribute("required", "true");
  inputEmail.setAttribute("name", "signInEmail");
  inputEmail.setAttribute("placeholder", "Ange din email...");
  formControlEmail.appendChild(inputEmail);
  formSignIn.appendChild(formControlEmail);

  const formControlPassword = createDiv();
  formControlPassword.classList.add("form-control");
  const passwordLabel = createLabel();
  passwordLabel.setAttribute("for", "signInPassword");
  passwordLabel.textContent = "Lösenord: ";
  formControlPassword.appendChild(passwordLabel);
  const inputPassword = createInput();
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("id", "signInPassword");
  inputPassword.setAttribute("required", "true");
  inputPassword.setAttribute("name", "signInPassword");
  inputPassword.setAttribute("placeholder", "Ange Lösenord...");
  formControlPassword.appendChild(inputPassword);
  formSignIn.appendChild(formControlPassword);

  const formControlBtn = createDiv();
  formControlBtn.classList.add("btn-container");

  const backBtn = createLink();
  backBtn.textContent = "Tillbaka";
  backBtn.setAttribute("href", "../index.html");
  backBtn.classList.add("btn");
  formControlBtn.appendChild(backBtn);

  const signInBtn = createButton();
  signInBtn.textContent = "Logga in";
  signInBtn.setAttribute("type", "submit");
  signInBtn.setAttribute("id", "signInBtn");
  formControlBtn.appendChild(signInBtn);

  formSignIn.appendChild(formControlBtn);
  formSignIn.appendChild(formControlBtn);

  signInContainer.appendChild(formSignIn);
  signInForm.appendChild(signInContainer);
};

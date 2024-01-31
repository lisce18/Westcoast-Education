import {
  createSection,
  createForm,
  createLabel,
  createInput,
  createDiv,
  createTextArea,
  createButton,
} from './init-dom.js';

/*******************************************************************/
// Creating Contact Form
/*******************************************************************/

export const createContactForm = () => {
  const contactForm = document.querySelector('#contact-form');

  const createFormContainer = createSection();
  const createContactForm = createForm();

  // Input för namn
  const formControlName = createDiv();
  formControlName.classList.add('form-control');
  formControlName.appendChild(createLabel('for', 'fullName'));
  const inputName = createInput();
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('id', 'fullName');
  inputName.setAttribute('name', 'fullName');
  inputName.setAttribute('placeholder', 'Ange fullständigt namn');
  formControlName.appendChild(inputName);
  createContactForm.appendChild(formControlName);

  // Input för e-mail
  const formControlEmail = createDiv();
  formControlEmail.classList.add('form-control');
  formControlEmail.appendChild(createLabel('for', 'emailContact'));
  const inputEmail = createInput();
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('id', 'emailContact');
  inputEmail.setAttribute('name', 'emailContact');
  inputEmail.setAttribute('placeholder', 'Ange E-mail');
  formControlEmail.appendChild(inputEmail);
  createContactForm.appendChild(formControlEmail);

  // Textarea för anledning
  const formControlText = createDiv();
  formControlText.classList.add('form-control');
  formControlText.appendChild(createLabel('for', 'form-text'));
  const formText = createTextArea();
  formText.setAttribute('name', 'form-text');
  formText.setAttribute('id', 'form-text');
  formText.setAttribute('cols', 40);
  formText.setAttribute('rows', 20);
  formControlText.appendChild(formText);
  createContactForm.appendChild(formControlText);

  // Knapp för att skicka in
  const formControlBtn = createDiv();
  formControlBtn.classList.add('form-control');
  const contactBtn = createButton();
  contactBtn.classList.add('btn');
  contactBtn.setAttribute('type', 'submit');
  createContactForm.appendChild(formControlBtn);

  // Lägger till alla delar till form elementet
  createFormContainer.appendChild(createContactForm);

  contactForm.appendChild(createFormContainer);
};

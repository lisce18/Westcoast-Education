import {
  createDiv,
  createForm,
  createInput,
  createLabel,
  createTitle,
} from "./init-dom.js";

export const createAddCourseForm = () => {
  const addCourse = document.querySelector("#add-course");

  const form = createForm();
  form.setAttribute("id", "add-course-form");

  const formTitle = createTitle();
  formTitle.textContent = "Lägg till kurs";
  form.appendChild(formTitle);

  const courseNameControl = createDiv();
  courseNameControl.classList.add("form-control");
  const courseNameLabel = createLabel();
  courseNameLabel.textContent = "Kursnamn: ";
  courseNameControl.appendChild(courseNameLabel);
  const courseNameInput = createInput();
  courseNameInput.setAttribute("type", "text");
  courseNameInput.setAttribute("name", "courseName");
  courseNameInput.setAttribute("required", "true");
  courseNameControl.appendChild(courseNameInput);
  form.appendChild(courseNameControl);

  const courseDurationControl = createDiv();
  courseDurationControl.classList.add("form-control");
  const courseDurationLabel = createLabel();
  courseDurationLabel.textContent = "Antal dagar: ";
  courseDurationControl.appendChild(courseDurationLabel);
  const courseDurationInput = createInput();
  courseDurationInput.setAttribute("type", "number");
  courseDurationInput.setAttribute("name", "duration");
  courseDurationInput.setAttribute("required", "true");
  courseDurationControl.appendChild(courseDurationInput);
  form.appendChild(courseDurationControl);

  const courseLocationControl = createDiv();
  courseLocationControl.classList.add("form-control");
  const courseLocationLabel = createLabel();
  courseLocationLabel.textContent = "Plats: ";
  courseLocationControl.appendChild(courseLocationLabel);
  const courseLocationInput = createInput();
  courseLocationInput.setAttribute("type", "text");
  courseLocationInput.setAttribute("name", "location");
  courseLocationInput.setAttribute("required", "true");
  courseLocationControl.appendChild(courseLocationInput);
  form.appendChild(courseLocationControl);

  const courseImageUrlControl = createDiv();
  courseImageUrlControl.classList.add("form-control");
  const courseImageUrlLabel = createLabel();
  courseImageUrlLabel.textContent = "Bild URL: ";
  courseImageUrlControl.appendChild(courseImageUrlLabel);
  const courseImageUrlInput = createInput();
  courseImageUrlInput.setAttribute("type", "text");
  courseImageUrlInput.setAttribute("name", "imageUrl");
  courseImageUrlControl.appendChild(courseImageUrlInput);
  form.appendChild(courseImageUrlControl);

  const courseStartDateControl = createDiv();
  courseStartDateControl.classList.add("form-control");
  const courseStartDateLabel = createLabel();
  courseStartDateLabel.textContent = "Startdatum: ";
  courseStartDateControl.appendChild(courseStartDateLabel);
  const courseStartDateInput = createInput();
  courseStartDateInput.setAttribute("type", "text");
  courseStartDateInput.setAttribute("name", "startDate");
  courseStartDateInput.setAttribute("required", "true");
  courseStartDateControl.appendChild(courseStartDateInput);
  form.appendChild(courseStartDateControl);

  const coursePriceControl = createDiv();
  coursePriceControl.classList.add("form-control");
  const coursePriceLabel = createLabel();
  coursePriceLabel.textContent = "Pris: ";
  coursePriceControl.appendChild(coursePriceLabel);
  const coursePriceInput = createInput();
  coursePriceInput.setAttribute("type", "number");
  coursePriceInput.setAttribute("name", "price");
  coursePriceInput.setAttribute("required", "true");
  coursePriceControl.appendChild(coursePriceInput);
  form.appendChild(coursePriceControl);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit-button");
  submitButton.textContent = "Lägg till kurs";
  form.appendChild(submitButton);

  addCourse.appendChild(form);
};

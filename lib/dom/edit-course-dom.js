import { getCourse } from "../gallery.js";
import { createCourseList } from "./course-details-dom.js";
import { createButton, createInput } from "./init-dom.js";
import HttpClient from "../../utilities/http.js";

export const loadCourseDetails = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("id");
  const course = await getCourse(courseId);
  const courseDetails = document.querySelector("#course-details");

  if (courseDetails) {
    createCourseList([course], courseDetails);
    const editBtn = createButton();
    editBtn.textContent = "Redigera kurs";
    editBtn.setAttribute("id", "edit-btn");
    editBtn.addEventListener("click", () => {
      createEditForm(course);
      editBtn.disabled = true;
    });
    courseDetails.appendChild(editBtn);
  } else {
    console.error('Element with id "course-details" not found');
  }
};

const createEditForm = async (course) => {
  const editForm = document.createElement("form");

  const courseNameInput = createInput();
  courseNameInput.name = "course-name";
  courseNameInput.value = course.courseName;
  editForm.appendChild(courseNameInput);

  const courseDurationInput = createInput();
  courseDurationInput.name = "course-duration";
  courseDurationInput.value = course.duration;
  editForm.appendChild(courseDurationInput);

  const courseStartDateInput = createInput();
  courseStartDateInput.name = "course-start-date";
  courseStartDateInput.value = course.startDate;
  editForm.appendChild(courseStartDateInput);

  const courseLocationInput = createInput();
  courseLocationInput.name = "course-location";
  courseLocationInput.value = course.location;
  editForm.appendChild(courseLocationInput);

  const coursePriceInput = createInput();
  coursePriceInput.name = "course-price";
  coursePriceInput.value = course.price;
  editForm.appendChild(coursePriceInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Update Course";
  editForm.appendChild(submitButton);

  const deleteButton = createButton();
  deleteButton.textContent = "Delete Course";
  deleteButton.addEventListener("click", async () => {
    const http = new HttpClient("http://localhost:3000/courses");
    await http.delete(course.id);
    location.href = "./admin.html";
  });
  editForm.appendChild(deleteButton);

  const courseDetails = document.querySelector("#course-details");
  courseDetails.appendChild(editForm);

  const http = new HttpClient();
  http.baseUrl = "http://localhost:3000/courses";

  editForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const updatedCourse = {
      id: course.id,
      courseName: courseNameInput.value,
      number: Number(course.number),
      duration: Number(courseDurationInput.value),
      location: courseLocationInput.value,
      imageUrl: course.imageUrl,
      startDate: courseStartDateInput.value,
      price: Number(coursePriceInput.value),
      customers: course.customers,
    };

    try {
      const result = await http.update(course.id, updatedCourse);
      location.reload();
      return result;
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  });
};

import { createLink } from "./init-dom.js";

export const createAddCourseButton = () => {
  const courseList = document.querySelector("#course-list");
  const addCourseButton = createLink();
  addCourseButton.classList.add("add-course-button");
  addCourseButton.textContent = "Lägg till en kurs";
  addCourseButton.href = "/Admin/add-course.html";
  courseList.appendChild(addCourseButton);
};

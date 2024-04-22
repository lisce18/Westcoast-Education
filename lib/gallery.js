import HttpClient from "../utilities/http.js";
import { addImageClickHandler } from "./dom/gallery-dom.js";
import { createCard } from "./dom/gallery-dom.js";
import { createButton, createDiv } from "./dom/init-dom.js";

export const initCourses = async () => {
  const gallery = document.querySelector("#course-list");
  const courses = await getCourses();
  if (location.href.includes("admin.html")) {
    const courseContainer = createDiv();
    courseContainer.classList.add("course-container");
    courses.forEach((course) => {
      courseContainer.appendChild(createCard(course));
    });
    gallery.appendChild(courseContainer);
  } else {
    courses.forEach((course) => {
      gallery.appendChild(createCard(course));
    });
  }

  const images = document.querySelectorAll(".course-image img");
  addImageClickHandler(images);
};

export const getCourses = async () => {
  const url = "http://localhost:3000/courses";
  const http = new HttpClient(url);
  const courses = await http.get();
  return courses;
};

export const getCourse = async (id) => {
  const url = `http://localhost:3000/courses/${id}`;
  const http = new HttpClient(url);
  const course = await http.get();
  return course;
};

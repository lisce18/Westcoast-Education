import HttpClient from "../utilities/http.js";
import { createCard } from "./dom/gallery-dom.js";

export const displayPopularCourses = async () => {
  window.onload = async function () {
    try {
      const httpClient = new HttpClient("http://localhost:3000");
      const courses = await httpClient.getAllCourses();
      const popular = courses.filter(
        (course) => course.customers && course.customers.length >= 3
      );
      const popularCoursesElement = document.getElementById("popular");
      if (popularCoursesElement) {
        popular.forEach((course) => {
          const courseCard = createCard(course);
          popularCoursesElement.appendChild(courseCard);
        });
      } else {
        console.error('Element with id "popularCourses" not found');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
};

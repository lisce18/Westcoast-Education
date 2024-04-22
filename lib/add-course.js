import HttpClient from "../utilities/http.js";
import { getCourses } from "./gallery.js";

export const addCourse = async () => {
  const form = document.querySelector("#add-course-form");

  const http = new HttpClient();
  http.baseUrl = "http://localhost:3000";

  const courses = await getCourses();

  const maxId = Math.max(...courses.map((course) => course.id));
  const newId = maxId + 1;

  const courseNumber = Math.floor(1000 + Math.random() * 9000);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const course = Object.fromEntries(formData.entries());

    course.price = Number(course.price);
    course.duration = Number(course.duration);

    const newCourse = {
      id: newId,
      number: courseNumber,
      ...course,
    };

    if (newCourse.imageUrl === "") {
      newCourse.imageUrl = "photo-coming-soon.jpg";
    }

    newCourse.customers = [];

    const result = await http.add("/courses", newCourse);
    location.href = "./admin.html";
  });
};

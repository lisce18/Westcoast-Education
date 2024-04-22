import { baseUrl } from "../utilities/config.js";
import HttpClient from "../utilities/http.js";
import { createCourseList } from "./dom/course-details-dom.js";

export const initCourseDetails = async () => {
  const courseId = location.search.split("=")[1];
  displayCourseDetails(courseId);
};
const displayCourseDetails = async (id) => {
  const url = `http://localhost:3000/courses?id=${id}`;
  const http = new HttpClient(url);
  const course = await http.get();
  createCourseList(course);
};

export const enrollCustomer = async () => {
  window.onload = enrollCustomer;
  const courseId = Number(location.search.split("=")[1]);

  const courseHttp = new HttpClient(`${baseUrl}courses`);
  const courses = await courseHttp.get();
  const course = courses.find((course) => course.id === courseId);
  if (!course) {
    console.error("Course not found");
    return;
  }
  const courseName = course.courseName;

  const enrollButton = document.querySelector("#enroll-btn");
  if (!enrollButton) {
    console.error("Button not found");
    return;
  }
  enrollButton.addEventListener("click", async (e) => {
    if (e.target.id === "enroll-btn") {
      const customerEmail = localStorage.getItem("email");

      const customerHttp = new HttpClient(`${baseUrl}customers`);
      const customers = await customerHttp.get();

      const customer = customers.find(
        (customer) => customer.email === JSON.parse(customerEmail)
      );

      if (!customer) {
        console.error("Customer not found");
        return;
      }

      if (customer.courses.includes(courseName)) {
        alert("Du har redan registrerat dig för kursen!");
        return;
      } else {
        alert("Registreringen lyckades!");
      }

      const customerId = customer.id;

      customer.courses = customer.courses || [];
      customer.courses.push(courseName);

      await customerHttp.update(customerId, customer);

      course.customers.push(customer.email);

      await courseHttp.update(course.id, course);
    }
  });
};

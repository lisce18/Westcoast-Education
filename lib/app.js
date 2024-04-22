import { state } from "../utilities/config.js";
import { initDom } from "./dom/init-dom.js";
import { createHomePageDisplay } from "./dom/first-page-dom.js";
import { initCourses } from "./gallery.js";
import { enrollCustomer, initCourseDetails } from "./course-details.js";
import { createContactForm } from "./dom/contact-dom.js";
import { initCustomers } from "./customers.js";
import { createSignInForm } from "./dom/sign-in-dom.js";
import { createSignUpForm } from "./dom/sign-up-dom.js";
import { logIn } from "./sign-in.js";
import { addNewCustomer } from "./sign-up.js";
import { createMyPages } from "./dom/my-pages-dom.js";
import { displayPopularCourses } from "./popular-courses.js";
import { createAddCourseForm } from "./dom/add-course-dom.js";
import { addCourse } from "./add-course.js";
import { loadCourseDetails } from "./dom/edit-course-dom.js";
import { createAddCourseButton } from "./dom/admin-dom.js";

const initApp = () => {
  initDom();

  const path = window.location.pathname;
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn && path !== "/") {
    window.location.href = "/";
    return;
  }

  switch (path) {
    case "/":
    case "/index.html":
      createSignInForm();
      logIn();
      break;
    case "/Pages/first-page.html":
      createHomePageDisplay();
      displayPopularCourses();
      break;
    case "/Pages/gallery.html":
      initCourses();
      break;
    case "/Pages/course-details.html":
      initCourseDetails();
      enrollCustomer();
      break;
    case "/Pages/my-pages.html":
      createMyPages();
      break;
    case "/Pages/contact.html":
      createContactForm();
      break;
    case "/Pages/sign-up.html":
      createSignUpForm();
      addNewCustomer();
      break;
    case "/Admin/admin.html":
      initCourses();
      initCustomers();
      createAddCourseButton();
      break;
    case "/Admin/edit-course.html":
      loadCourseDetails();
      break;
    case "/Admin/add-course.html":
      createAddCourseForm();
      addCourse();
      break;
  }
};

document.addEventListener("DOMContentLoaded", initApp);

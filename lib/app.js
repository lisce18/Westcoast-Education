import { state, query } from '../utilities/config.js';
import { initDom } from './dom/init-dom.js';
import { createHomePageDisplay } from './dom/first-page-dom.js';
import { initCourses } from './gallery.js';
import { initCourseDetails } from './course-details.js';
import { createContactForm } from './dom/contact-dom.js';
import { createSignInForm } from './dom/sign-in-dom.js';
import { createSignUpForm } from './dom/sign-up-dom.js';

const initApp = () => {
  initDom();

  switch (state.currentPage) {
    case '/':
    case '/index.html':
      createHomePageDisplay();
      break;
    case '/Admin/admin.html':
    case '/Pages/gallery.html':
      initCourses();
      break;
    case '/Admin/edit.course.html':
    case '/Pages/course-details.html':
      initCourseDetails();
      break;
    case '/Pages/contact.html':
      createContactForm();
      break;
    case '/Pages/my-pages.html':
      if (query.currentQuery === 'logOldUser') {
        localStorage.clear();
        createSignInForm();
      }
    // case '/Pages/log-in.html':
    //   createSignInForm();
    //   break;
    // case '/Pages/sign-up.html':
    //   createSignUpForm();
    //   break;
  }
};

document.addEventListener('DOMContentLoaded', initApp);

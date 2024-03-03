import { state, query } from '../utilities/config.js';
import { initDom } from './dom/init-dom.js';
import { createHomePageDisplay } from './dom/first-page-dom.js';
import { initCourses } from './gallery.js';
import { initCourseDetails } from './course-details.js';
import { createContactForm } from './dom/contact-dom.js';
import { initCostumers } from './costumers.js';

const initApp = () => {
  initDom();

  switch (state.currentPage) {
    case '/':
    case '/index.html':
      createHomePageDisplay();
      break;
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
    case '/Admin/admin.html':
      initCourses();
      initCostumers();
    case '/Pages/enroll.html':
      console.log('Chill');
      break;
    // case '/Pages/my-pages.html':
    //   if (query.currentQuery === 'regNewCostumer') {
    //     createSignUpForm();
    //   } else if (query.currentQuery === 'regOldCostumer') {
    //     createSignInForm();
    //   } else {
    // myCourses();
  }
  // case '/Pages/log-in.html':
  //   createSignInForm();
  //   break;
  // case '/Pages/sign-up.html':
  //   createSignUpForm();
  //   break;
};
document.addEventListener('DOMContentLoaded', initApp);

import { initDom } from './dom/init-dom.js';
import { createHomePageDisplay } from './dom/first-page.js';
import { state } from '../utilities/config.js';
import { initCourses } from './gallery.js';
import { initCourseDetails } from './course-details.js';
import { createCourseList } from './dom/course-details-dom.js';

const initApp = () => {
  initDom();

  state.currentPage = window.location.pathname;

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
      createCourseList();
      break;
  }
};

document.addEventListener('DOMContentLoaded', initApp);

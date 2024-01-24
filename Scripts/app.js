import { listCourses } from '../data/courses.js';

const initPage = () => {
  listCourses();
};

document.addEventListener('DOMContentLoaded', initPage);

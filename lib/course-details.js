import HttpClient from '../utilities/http.js';
import { createCourseList } from './dom/course-details-dom.js';

export const initCourseDetails = async () => {
  const courseId = location.search.split('=')[1];
  displayCourseDetails(courseId);
  console.log(courseId);
  // const url = `http://localhost:3000/courses`;
  // const http = new HttpClient(url);

  // const courses = await http.get();
  // createCourseList(courses, document.querySelector('#courseDetails'));
  // const cards = document.querySelectorAll('#course-details div');
  // return cards;
};
const displayCourseDetails = async (id) => {
  const url = `http://localhost:3000/courses?id=${id}`;
  const http = new HttpClient(url);
  const course = await http.get();
  createCourseList(course);
};

// const loadCourseDetails = async (id) => {
//   const url = `http://localhost:3000/courses/` + id;
//   const http = new HttpClient(url);
//   const course = await http.get();
//   return course;
// };

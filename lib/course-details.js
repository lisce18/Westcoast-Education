import HttpClient from '../Models/http.js';
import { createCourseList } from './dom/course-details-dom.js';

export const initCourseDetails = async () => {
  const courseId = location.search.split('=')[1];
  const courseDetailsContainer = document.querySelector('#course-details');
  const courses = await displayCourseDetails(courseId);
  // displayCourseDetails(courseId, courseDetailsContainer);
  createCourseList(courses, courseDetailsContainer);
};

const displayCourseDetails = async (id) => {
  const url = `http://localhost:3000/courses?id=${id}`;
  const http = new HttpClient(url);
  const course = await http.get();
  return course;
};

import HttpClient from '../utilities/http.js';
import { createCourseList } from './dom/course-details-dom.js';

export const initCourseDetails = async () => {
  const courseId = location.search.split('=')[1];
  displayCourseDetails(courseId);
};
const displayCourseDetails = async (id) => {
  const url = `http://localhost:3000/courses?id=${id}`;
  const http = new HttpClient(url);
  const course = await http.get();
  createCourseList(course);
};

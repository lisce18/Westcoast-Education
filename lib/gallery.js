import HttpClient from '../utilities/http.js';
import { addImageClickHandler } from './dom/gallery-dom.js';
import { createCard } from './dom/gallery-dom.js';

export const initCourses = async () => {
  const gallery = document.querySelector('#course-gallery');
  const courses = await getCourses();

  courses.forEach((course) => {
    gallery.appendChild(createCard(course));
  });

  const images = document.querySelectorAll('.course-image img');
  addImageClickHandler(images);
};

const getCourses = async () => {
  const url = 'http://localhost:3000/courses';
  const http = new HttpClient(url);
  const courses = await http.get();
  return courses;
};

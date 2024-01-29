import HttpClient from '../Models/http.js';
import { addImageClickHandler } from './dom/gallery-dom.js';
import { createCard } from './dom/gallery-dom.js';

export const gallery = document.querySelector('#course-gallery');

export const initCourses = async () => {
  const courses = await loadCourses();

  courses.forEach((course) => {
    gallery.appendChild(createCard(course));
  });

  const images = document.querySelectorAll('.course-image img');
  addImageClickHandler(images);
};

const loadCourses = async () => {
  const url = 'http://localhost:3000/courses';
  const http = new HttpClient(url);
  const courses = await http.get();
  return courses;
};

document.addEventListener('DOMContentLoaded', () => {
  initCourses();
});

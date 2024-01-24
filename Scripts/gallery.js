import { createCard, addImageClickHandler } from './dom.js';
import HttpClient from './http.js';

const gallery = document.querySelector('#courses-gallery');

async function initPage() {
  const courses = await loadCourses();

  courses.forEach((course) => {
    gallery.appendChild(createCard(course));
  });

  const images = document.querySelectorAll('.course-image img');
  addImageClickHandler(images);
}

const loadCourses = async () => {
  const url = 'http://localhost:3000/courses';
  const http = new HttpClient(url);
  const courses = await http.get();
  return courses;
};

document.addEventListener('DOMContentLoaded', initPage);
import HttpClient from './http.js';

function initPage() {
  const courseId = location.search.split('=')[1];
  displayCourseDetails(courseId);
}

async function displayCourseDetails(id) {
  const url = 'http://localhost:3000/course/' + id;
  const http = new HttpClient(url);
  const course = await http.get();
  console.log(course);
}

document.addEventListener('DOMContentLoaded', initPage);

import { createSection, createSpan } from './init-dom.js';
import { createCourseImage } from './gallery-dom.js';

// Bygger html till kurs detaljerna
export const createCourseList = (courses) => {
  const details = document.querySelector('#course-details');

  courses.forEach((course) => {
    const containerDetails = createSection();
    containerDetails.setAttribute('courseId', course.id);
    containerDetails.appendChild(createCourseImage(course.imageUrl, course.id));
    containerDetails.appendChild(createSpan(`Kursnamn: ${course.courseName}`));
    containerDetails.appendChild(createSpan(`Kursnummer: ${course.number}`));
    containerDetails.appendChild(createSpan(`Startdatum: ${course.startDate}`));
    containerDetails.appendChild(createSpan(`Längd: ${course.duration} dagar`));
    containerDetails.appendChild(createSpan(`Hålls: ${course.location}`));
    details.appendChild(containerDetails);
  });
  return details;
};

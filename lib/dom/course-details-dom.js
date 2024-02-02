import { createParagraph, createSection, createSpan } from './init-dom.js';
import { createCourseImage } from './gallery-dom.js';

// Bygger html till kurs detaljerna
export const details = document.querySelector('#course-details');
export const createCourseList = (courses) => {
  courses.forEach((course) => {
    const containerDetails = createSection();
    containerDetails.setAttribute('courseId', course.id);
    containerDetails.appendChild(createCourseImage(course.imageUrl, course.id));
    const courseName = createSpan();
    courseName.textContent = `Kursnamn: ${course.courseName}`;
    const courseNumber = createSpan();
    courseNumber.textContent = `Kursnummer: ${course.number}`;
    const courseDate = createSpan();
    courseDate.textContent = `Startdatum: ${course.startDate}`;
    const courseDuration = createSpan();
    courseDuration.textContent = `Längd: ${course.duration} dagar`;
    const courseLocation = createSpan();
    courseLocation.textContent = `Hålls: ${course.location}`;
    containerDetails.appendChild(courseName);
    containerDetails.appendChild(courseNumber);
    containerDetails.appendChild(courseDate);
    containerDetails.appendChild(courseDuration);
    containerDetails.appendChild(courseLocation);
    details.appendChild(containerDetails);
  });
};

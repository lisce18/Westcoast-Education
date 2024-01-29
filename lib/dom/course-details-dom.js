import { createSection, createSpan } from './init-dom.js';
import { createCourseImage } from './gallery-dom.js';

export const createCourseList = (courses, element) => {
  courses.forEach((course) => {
    const containerDetails = createSection();
    containerDetails.setAttribute('id', course.id);
    containerDetails.appendChild(createCourseImage(imageUrl, id));
    containerDetails.appendChild(createSpan(`Kursnamn: ${course.courseName}`));
    containerDetails.appendChild(createSpan(`Kursnummer: ${course.number}`));
    containerDetails.appendChild(createSpan(`Startdatum: ${course.startDate}`));
    containerDetails.appendChild(createSpan(`Längd: ${course.duration} dagar`));
    containerDetails.appendChild(createSpan(`Hålls: ${course.location}`));
    element.appendChild(containerDetails);
  });
};

import { createImage, createSection, createParagraph } from './init-dom.js';

export const createCard = (course) => {
  const sectionAllCourses = createSection();
  sectionAllCourses.classList.add('course-image');
  sectionAllCourses.appendChild(createCourseImage(course.imageUrl, course.id));
  sectionAllCourses.appendChild(createCourseInfo(course));

  return sectionAllCourses;
};

export const createCourseImage = (imageUrl, id) => {
  const image = createImage();
  image.setAttribute('src', `../Assets/images/courses/${imageUrl}`);
  image.setAttribute('id', id);

  return image;
};

const createCourseInfo = (course) => {
  const paragraph = createParagraph();
  paragraph.appendChild(
    document.createTextNode(
      `Kursnamn: ${course.courseName} | Start datum: ${course.startDate} | Längd: ${course.duration} dagar | Hålls: ${course.location}`
    )
  );

  return paragraph;
};

export const addImageClickHandler = (images) => {
  images.forEach((image) => {
    const src = image.getAttribute('src');
    const courseId = image.getAttribute('id');

    image.addEventListener('click', () => {
      console.log(location);
      location.href = `./course-details.html?id=${courseId}`;
    });
  });
};

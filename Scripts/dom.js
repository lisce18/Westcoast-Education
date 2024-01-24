const createCard = (course) => {
  const div = document.createElement('div');
  div.classList.add('course-image');
  div.appendChild(createImage(course.imageUrl, course.courseId));
  div.appendChild(createCourseInfo(course));

  return div;
};

const createCourseInfo = (course) => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(
    document.createTextNode(
      `Kursnamn: ${course.courseName} | Längd: ${course.duration} dagar`
    )
  );
  return paragraph;
};

const createCourseList = (courses, element) => {
  courses.forEach((course) => {
    const container = createDiv();
    container.setAttribute('courseId', course.courseId);
    container.appendChild(createSpan(course.courseName));
    container.appendChild(createSpan(`Hålls: ${course.location}`));
    container.appendChild(createSpan(`Start datum: ${course.date}`));
    container.appendChild(createSpan(`Längd: ${course.duration} dagar`));
    element.appendChild(container);
  });
};

// async function fetchCourses() {
//   try {
//     const response = await fetch('http://localhost:3000/courses');

//     if (response.ok) {
//       const result = await response.json();
//       return result;
//     } else {
//       console.log(response.status);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
const createDiv = () => {
  return document.createElement('div');
};
const createSpan = (text) => {
  const span = document.createElement('span');
  span.innerText = text;
  return span;
};
const createImage = (imageUrl, id) => {
  const image = document.createElement('img');
  image.setAttribute('src', `../Assets/images/${imageUrl}`);
  image.setAttribute('id', id);

  return image;
};

const addImageClickHandler = (images) => {
  images.forEach((image) => {
    const src = image.getAttribute('src');
    const courseId = image.getAttribute('id');

    image.addEventListener('click', () => {
      console.log(location);
      location.href = `/pages/course-details.html?id=${courseId}`;
    });
  });
};

export { createCard, addImageClickHandler, createCourseList };
// export const createCourseList = async (courses, element) => {
//   courses.forEach((course) => {
//     const container = createSection();
//     container.setAttribute('courseid', course.courseId);
//     container.appendChild(createSpan(course.courseName));
//     container.appendChild(createSpan(`Längd: ${course.duration} dagar`));
//     container.appendChild(createSpan(`Hålls: ${course.location}`));
//     element.appendChild(container);
//     // courseList.innerHTML += `<div>
//     // <img src="/Assets/images/${course.courseName}.jpg">
//     // <span>Kursnamn: ${course.courseName} </span>
//     // <span>Kursens längd: ${course.duration} dagar </span>
//     // <span>Hålls: ${course.location} </span>
//     // </div>`;
//   });
// };

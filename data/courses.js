const vehicles = [
  {
    courseId: 1,
    imageUrl: 'python.jpg',
    courseName: 'Python',
    number: 2553,
    duration: 30,
    located: ['online', 'at school'],
    imageUrl: 'python.jpg',
    date: '28/2-24',
  },
  {
    courseId: 2,
    imageUrl: 'javascript.jpg',
    courseName: 'JavaScript',
    number: 7290,
    duration: 45,
    located: ['online', 'at school'],
    imageUrl: 'javascript.jpg',
    date: '28/2-24',
  },
  {
    courseId: 3,
    imageUrl: 'react.jpg',
    courseName: 'React',
    number: 2716,
    duration: 60,
    located: ['online', 'at school'],
    imageUrl: 'react.jpg',
    date: '28/2-24',
  },
  {
    courseId: 4,
    imageUrl: 'node.js.jpg',
    courseName: 'NodeJs',
    number: 3571,
    duration: 38,
    located: ['online', 'at school'],
    imageUrl: 'nodejs.jpg',
    date: '28/2-24',
  },
];

const listAllCourses = () => courses;

// async function listCourses() {
//   const courses = await fetchCourses();
//   courses.forEach((course) => {
//     courseList.innerHTML += `<div>
//     <img src="/Assets/images/${course.courseName}.jpg">
//     <span>Kursnamn: ${course.courseName} </span>
//     <span>Kursens längd: ${course.duration} dagar </span>
//     <span>Hålls: ${course.location} </span>
//     </div>`;
//   });
//   return courses;
// }

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

export { listAllCourses };

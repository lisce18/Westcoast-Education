const listCoursesButton = document.querySelector('#viewAllCourses');

const initApp = () => {
  console.log('Appen är startad');
};

const viewAllCoursesHandler = async () => {
  e.preventDefault();
  const courses = await viewAllCoursesButton();
};

const viewCourses = async () => {
  try {
    const url = 'http://localhost:3000/courses';
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.log('Hoppsan, något gick snett.');
    }
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener('DOMContentLoaded', initApp);
listCoursesButton.addEventListener('click', viewAllCoursesHandler);

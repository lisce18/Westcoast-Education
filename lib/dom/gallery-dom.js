import { createImage, createSection, createDiv } from "./init-dom.js";

export const createCard = (course, includeCustomers) => {
  const sectionAllCourses = createSection();
  sectionAllCourses.classList.add("course-image");
  sectionAllCourses.appendChild(createCourseImage(course.imageUrl, course.id));
  sectionAllCourses.appendChild(createCourseInfo(course));

  if (includeCustomers) {
    const customerList = document.createElement("ul");
    course.customers.forEach((customer) => {
      const customerElement = document.createElement("li");
      customerElement.textContent = customer.fullName;
      customerList.appendChild(customerElement);
    });
    sectionAllCourses.appendChild(customerList);
  }

  return sectionAllCourses;
};

export const createCourseImage = (imageUrl, id) => {
  const image = createImage();
  imageUrl = imageUrl || "photo-coming-soon.jpg";
  image.setAttribute("src", `../Assets/images/courses/${imageUrl}`);
  image.setAttribute("id", id);

  return image;
};

const createCourseInfo = (course) => {
  const divCourseInfo = createDiv();
  divCourseInfo.innerHTML =
    `<p class="course-info">- Kursnamn: ${course.courseName}</p>` +
    `<p class="course-info">- Start datum: ${course.startDate}</p>` +
    `<p class="course-info">- Längd: ${course.duration} dagar</p>` +
    `<p class="course-info">- Hålls: ${course.location}</p>` +
    `<p class="course-info">- Pris: ${course.price}</p>`;

  return divCourseInfo;
};

export const addImageClickHandler = (images) => {
  images.forEach((image) => {
    const src = image.getAttribute("src");
    const courseId = image.getAttribute("id");

    image.addEventListener("click", () => {
      if (location.href.includes("gallery.html")) {
        location.href = `./course-details.html?id=${courseId}`;
      } else if (location.href.includes("admin.html")) {
        location.href = `./edit-course.html?id=${courseId}`;
      }
    });
  });
};

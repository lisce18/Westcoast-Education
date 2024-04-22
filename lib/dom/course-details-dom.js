import {
  createSection,
  createDiv,
  createTitle,
  createButton,
  createUl,
  createLi,
} from "./init-dom.js";
import { createCourseImage } from "./gallery-dom.js";

export const details = document.querySelector("#course-details");
export const createCourseList = (courses) => {
  if (!details) {
    console.log("Parent node is missing");
    return;
  }
  courses.forEach((course) => {
    const containerDetails = createSection();
    containerDetails.setAttribute("courseId", course.id);
    containerDetails.appendChild(createCourseImage(course.imageUrl, course.id));
    const courseInfoContainer = createUl();
    courseInfoContainer.classList.add("course-info");
    const courseName = createLi();
    courseName.textContent = `Kursnamn: ${course.courseName}`;
    courseInfoContainer.appendChild(courseName);
    const courseNumber = createLi();
    courseNumber.textContent = `Kursnummer: ${course.number}`;
    courseInfoContainer.appendChild(courseNumber);
    const courseDate = createLi();
    courseDate.textContent = `Startdatum: ${course.startDate}`;
    courseInfoContainer.appendChild(courseDate);
    const courseDuration = createLi();
    courseDuration.textContent = `Längd: ${course.duration} dagar`;
    courseInfoContainer.appendChild(courseDuration);
    const courseLocation = createLi();
    courseLocation.textContent = `Hålls: ${course.location}`;
    courseInfoContainer.appendChild(courseLocation);
    const coursePrice = createLi();
    coursePrice.textContent = `Pris: ${course.price} kr`;
    courseInfoContainer.appendChild(coursePrice);
    if (location.href.includes("edit-course.html")) {
      const courseCustomers = createLi();
      courseCustomers.textContent = `Deltagare: ${course.customers.join(", ")}`;
      courseInfoContainer.appendChild(courseCustomers);
    }
    containerDetails.appendChild(courseInfoContainer);
    details.appendChild(containerDetails);
  });

  if (location.href.includes("course-details.html")) {
    const enrollContainer = document.querySelector("#enroll-container");

    const popUpContainer = createDiv();
    popUpContainer.classList.add("pop-up-container");
    popUpContainer.style.display = "none";

    const registerBtn = createButton();
    registerBtn.textContent = "Registrera dig för kursen här!";
    registerBtn.setAttribute("id", "register-btn");

    registerBtn.addEventListener("click", () => {
      popUpContainer.style.display = "block";
    });

    enrollContainer.appendChild(registerBtn);

    const designDiv = createDiv();
    designDiv.classList.add("design-div");
    const enrollTitle = createTitle();
    enrollTitle.textContent = "Vill du registrera dig för kursen?";
    enrollTitle.classList.add("enroll-title");
    const enrollBtnContainer = createDiv();
    enrollBtnContainer.classList.add("enroll-btn-container");
    const enrollBtn = createButton();
    enrollBtn.textContent = "Ja, jag vill registrera mig!";
    enrollBtn.setAttribute("id", "enroll-btn");
    enrollBtn.addEventListener("click", () => {
      popUpContainer.style.display = "none";
    });
    const cancelBtn = createButton();
    cancelBtn.textContent = "Avbryt";
    cancelBtn.setAttribute("id", "cancel-btn");
    cancelBtn.addEventListener("click", () => {
      popUpContainer.style.display = "none";
    });
    enrollBtnContainer.appendChild(enrollBtn);
    enrollBtnContainer.appendChild(cancelBtn);
    designDiv.appendChild(enrollTitle);
    designDiv.appendChild(enrollBtnContainer);
    popUpContainer.appendChild(designDiv);
    popUpContainer.style.display = "none";
    details.appendChild(popUpContainer);
    details.appendChild(enrollContainer);
  }
  return details;
};

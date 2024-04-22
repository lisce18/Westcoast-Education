import {
  createSection,
  createTitle,
  createParagraph,
  createLink,
  createUnderTitle,
} from "./init-dom.js";
import { getCustomers } from "../customers.js";

export const createHomePageDisplay = async () => {
  const home = document.querySelector("#homePage");

  const title = createTitle();
  title.classList.add("home-page-title");
  home.appendChild(title);
  const email = JSON.parse(localStorage.getItem("email"));
  const customers = await getCustomers();
  const customer = customers.find((customer) => customer.email === email);

  if (customer) {
    const firstName = customer.fullName.split(" ")[0];
    title.textContent = `Välkommen till Westcoast Education, ${firstName}!`;
  } else {
    title.textContent = `Välkommen till Westcoast Education!`;
  }

  const about = createParagraph();
  about.textContent =
    "WestCoast Educationär ett utbildningsföretag som har sin placering på västkusten strax norr om Göteborg." +
    "Vi har varit iutbildningsbranschen i snart 40 år. " +
    "Vårt affärsmål är och harvarit att tillhandahålla tekniska utbildningar inom IT-området. " +
    "Vi har varit väldigt framgångsrika i alla år. " +
    "Vi harspecialiserat oss på framförallt systemutvecklingsutbildningarinom webb och mobila lösningar.";
  home.appendChild(about);

  const popular = document.querySelector("#popular-courses");

  const popularTitle = createUnderTitle();
  popularTitle.textContent = "Våra mest populära kurser";
  popular.appendChild(popularTitle);

  const popularCourses = createSection();
  popularCourses.setAttribute("id", "popular");
  popular.appendChild(popularCourses);

  const buttonPopular = createLink();
  buttonPopular.classList.add("btn");
  buttonPopular.setAttribute("href", "../../Pages/gallery.html");
  buttonPopular.setAttribute("target", "_self");
  buttonPopular.textContent = "Se alla våra kurser här";
  popular.appendChild(buttonPopular);

  const contact = document.querySelector("#contact");

  const contactTitle = createUnderTitle();
  contactTitle.textContent = "Kom i kontakt med oss...";
  contact.appendChild(contactTitle);

  const contactSection = createSection();
  contactSection.setAttribute("id", "contactSection");
  contact.appendChild(contactSection);

  const telNr = createParagraph();
  telNr.textContent = "Telefonnummer: 031-123456";
  contactSection.appendChild(telNr);

  const address = createParagraph();
  address.textContent = "Adress: Westcoastvägen 99, 123 45 Kungälv";
  contactSection.appendChild(address);

  const contactEmail = createParagraph();
  contactEmail.textContent = "Email: westcoast@education.se";
  contactSection.appendChild(contactEmail);

  const buttonContact = createLink();
  buttonContact.classList.add("btn");
  buttonContact.setAttribute("href", "../../Pages/contact.html");
  buttonContact.textContent = "Skicka ett mail till oss här";
  contact.appendChild(buttonContact);
};

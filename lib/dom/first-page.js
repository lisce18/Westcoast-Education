import {
  createSection,
  createTitle,
  createParagraph,
  createLink,
  createUnderTitle,
} from './init-dom.js';

/*******************************************************************/
// Creating Home Page
/*******************************************************************/

export const createHomePageDisplay = () => {
  // Information om Westcoast Education
  const home = document.querySelector('#homePage');

  const containerHome = createSection();
  containerHome.classList.add('container');
  home.appendChild(containerHome);

  const title = createTitle();
  containerHome.appendChild(title);
  title.textContent = 'Välkommen till Westcoast Education!';

  const about = createParagraph();
  containerHome.appendChild(about);
  about.textContent = 'Information om oss ........';

  const buttonAbout = createLink();
  containerHome.appendChild(buttonAbout);
  buttonAbout.classList.add('btn');
  buttonAbout.setAttribute('href', '/Pages/about-us.html');
  buttonAbout.textContent = 'Läs mer om oss här';

  // De populäraste kurserna
  const popular = document.querySelector('#popular-courses');

  const containerPopular = createSection();
  containerPopular.classList.add('container');
  popular.appendChild(containerPopular);

  const popularTitle = createUnderTitle();
  popularTitle.textContent = 'Våra mest populära kurser';
  containerPopular.appendChild(popularTitle);

  const popularCourses = createSection();
  popularCourses.setAttribute('id', popularCourses);
  containerPopular.appendChild(popularCourses);

  const buttonPopular = createLink();
  containerPopular.appendChild(buttonPopular);
  buttonPopular.classList.add('btn');
  buttonPopular.setAttribute('href', '/Pages/gallery.html');
  buttonPopular.textContent = 'Se alla våra kurser här';

  // Information om vart man kan kontakta oss,
  //  med en länk till kontakt formuläret..
  const contact = document.querySelector('#contact');

  const containerContact = createSection();
  containerContact.classList.add('container');
  contact.appendChild(containerContact);

  const contactTitle = createUnderTitle();
  contactTitle.textContent = 'Kom i kontakt med oss...';
  containerContact.appendChild(contactTitle);

  const contactSection = createSection();
  contactSection.setAttribute('id', contactSection);
  containerContact.appendChild(contactSection);

  const buttonContact = createLink();
  containerContact.appendChild(buttonContact);
  buttonContact.classList.add('btn');
  buttonContact.setAttribute('href', '/Pages/contact.html');
  buttonContact.textContent = 'Skicka ett mail till oss här';
};

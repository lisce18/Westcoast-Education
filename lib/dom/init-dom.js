/*******************************************************************/
// DOM Manipulation of features of all pages
/*******************************************************************/

/*******************************************************************/
// Features of all pages
/*******************************************************************/
import { menuList } from '../../utilities/menuList.js';
const createMenuDom = () => {
  // Header meny till hemsidan
  const menu = document.querySelector('#menu');

  menuList.forEach(({ text, href, type }) => {
    const link = createLink();
    link.setAttribute('href', href);

    const listItem = createLi();
    listItem.classList.add(type);
    listItem.textContent = text;

    link.appendChild(listItem);
    menu.appendChild(link);
  });
};

const createFooterDom = () => {
  // Footer till hemsidan
  const footer = document.querySelector('#footer');

  const section = createSection();
  footer.appendChild(section);
  section.innerHTML =
    '<adress>Westcoastvägen 99<br>123 45<br>Halmstad</adress><br><span>&copy 2023 Westcoast Education</span>';
  section.classList.add('copy-footer');
};

export const initDom = () => {
  // Funktion som skickar vidare att dessa ska skapas
  // vid uppstart av sidorna
  createMenuDom();
  createFooterDom();
};
/*******************************************************************/
// Creating All Courses
/*******************************************************************/

/*******************************************************************/
// Creating Course Details
/*******************************************************************/
/*******************************************************************/
// Creating Sign In Form
/*******************************************************************/
/*******************************************************************/
// Creating Sign Up Form
/*******************************************************************/
/*******************************************************************/
// Creating About Us
/*******************************************************************/

export const createSection = () => {
  return document.createElement('section');
};

export const createDiv = () => {
  return document.createElement('div');
};

export const createParagraph = () => {
  return document.createElement('p');
};

export const createTitle = () => {
  return document.createElement('h1');
};

export const createUnderTitle = () => {
  return document.createElement('h2');
};

export const createUl = () => {
  return document.createElement('ul');
};

export const createLi = () => {
  return document.createElement('li');
};

export const createLink = () => {
  return document.createElement('a');
};

export const createImage = () => {
  return document.createElement('img');
};

export const createSpan = () => {
  return document.createElement('span');
};

export const createForm = () => {
  return document.createElement('form');
};

export const createLabel = () => {
  return document.createElement('label');
};

export const createInput = () => {
  return document.createElement('input');
};

export const createTextArea = () => {
  return document.createElement('textarea');
};

export const createButton = () => {
  return document.createElement('button');
};

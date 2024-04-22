import { menuList } from "../../utilities/menuList.js";
const createMenuDom = () => {
  const menu = document.querySelector("#menu");

  menuList.forEach(({ text, href, action }) => {
    const link = createLink();
    link.setAttribute("href", href);
    link.textContent = text;

    const listItem = createLi();

    if (action) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        action();
      });
    }

    listItem.appendChild(link);
    menu.appendChild(listItem);
  });
};

const createFooterDom = () => {
  const footer = document.querySelector("#footer");

  const section = createSection();
  footer.appendChild(section);
  section.innerHTML =
    "<span>Westcoastvägen 99 123 45 Kungälv</span><span>&copy 2023 Westcoast Education</span>";
  section.classList.add("copy-footer");
};

export const initDom = () => {
  createMenuDom();
  createFooterDom();
};

export const createSection = () => {
  return document.createElement("section");
};

export const createDiv = () => {
  return document.createElement("div");
};

export const createParagraph = () => {
  return document.createElement("p");
};

export const createTitle = () => {
  return document.createElement("h1");
};

export const createUnderTitle = () => {
  return document.createElement("h2");
};

export const createH3 = () => {
  return document.createElement("h3");
};

export const createUl = () => {
  return document.createElement("ul");
};

export const createLi = () => {
  return document.createElement("li");
};

export const createLink = () => {
  return document.createElement("a");
};

export const createImage = () => {
  return document.createElement("img");
};

export const createSpan = () => {
  return document.createElement("span");
};

export const createForm = () => {
  return document.createElement("form");
};

export const createLabel = () => {
  return document.createElement("label");
};

export const createInput = () => {
  return document.createElement("input");
};

export const createTextArea = () => {
  return document.createElement("textarea");
};

export const createButton = () => {
  return document.createElement("button");
};

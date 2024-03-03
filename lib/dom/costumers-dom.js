import { createParagraph, createSection, createDiv } from './init-dom.js';

export const createCostumerCard = (costumer) => {
  const sectionAllCostumers = createSection();
  sectionAllCostumers.classList.add('costumer-name');
  sectionAllCostumers.appendChild(createCostumerInfo(costumer));
  return sectionAllCostumers;
};

export const createCostumerName = (fullName, id) => {
  const nameDiv = createDiv();
  nameDiv.setAttribute('id', id);
  nameDiv.textContent = `Kund: ${fullName}`;

  return nameDiv;
};

const createCostumerInfo = (costumer) => {
  const paragraph = createParagraph();
  paragraph.appendChild(
    document.createTextNode(
      `Telefon nummer: ${costumer.phoneNr} | Email: ${costumer.email}`
    )
  );

  return paragraph;
};

export const addNameClickHandler = (nameDivs) => {
  nameDivs.forEach((nameDiv) => {
    const costumerId = nameDiv.getAttribute('id');

    nameDiv.addEventListener('click', () => {
      console.log(location);
      location.href = `./`;
    });
  });
};

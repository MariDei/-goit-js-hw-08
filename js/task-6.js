'use strict';

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(value) {
  const inputValue = input.value;
  if (inputValue < 1 || inputValue > 100) {
    return;
  }

  boxesContainer.innerHTML = '';

  for (let i = 0; i < inputValue; i++) {
    const divElement = document.createElement('div');
    divElement.style.width = `${30 + i * 10}px`;
    divElement.style.height = `${30 + i * 10}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(divElement);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

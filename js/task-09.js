const divWidgetEl = document.querySelector('.widget');
const buttonChangeColorEl = document.querySelector('.change-color');
const bodyEl = divWidgetEl.parentNode;
const colorNameEl = document.querySelector('.color');

buttonChangeColorEl.addEventListener('click', onChangeColorButtonClick);

function onChangeColorButtonClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


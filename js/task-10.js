const divBoxesEl = document.querySelector('#boxes');
const addDivs = divBoxesEl.children;
const divControlsEl = document.querySelector('#controls');
const inputNumberEl = divControlsEl.firstElementChild;
const createdButtonEl = inputNumberEl.nextElementSibling;
const destroyedButtonEl = createdButtonEl.nextElementSibling;


inputNumberEl.addEventListener('input', onGetDivsAmount);
function onGetDivsAmount(input) {
  input.currentTarget.value;
}

createdButtonEl.addEventListener('click', createBoxes);
function createBoxes() {
  let boxesWidth = 20;
  let boxesHeight = 20;
  if (inputNumberEl.value > 0) {
    for (let i = 0; i <= inputNumberEl.value - 1; i += 1) {
      divBoxesEl.insertAdjacentHTML('beforeend',
        `<div style="width:${boxesWidth += 10}px; height:${boxesHeight += 10}px; background-color:${getRandomHexColor()}"></div>`)
    }
  }
}

 destroyedButtonEl.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  let numberOfElementsToDelete = Number(inputNumberEl.value);
  numberOfElementsToDelete = numberOfElementsToDelete > addDivs.length ? addDivs.length : numberOfElementsToDelete;
  for (let i = 0; i < numberOfElementsToDelete; i++) {
    addDivs[0].remove();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const divBoxesEl = document.querySelector('#boxes');
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
  for (let i = 1; i <= inputNumberEl.value; i += 1) {
    const addNewDivs = document.createElement('div');
    
    // divBoxesEl.append('addNewDivs');
    // console.log(addNewDivs);
  }
  

}











function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

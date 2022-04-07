let counterValue = 0;
const valueEl = document.querySelector('#value');
valueEl.textContent = counterValue;

const buttonsArray = document.querySelectorAll('button');
const decrementButton = buttonsArray[0];
const incrementButton = buttonsArray[1];

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick);

function onIncrementButtonClick() {
    valueEl.textContent = counterValue += 1;
};
function onDecrementButtonClick() {
    valueEl.textContent = counterValue -= 1;
};
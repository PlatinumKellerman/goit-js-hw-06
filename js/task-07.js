const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeFontSize);

function onChangeFontSize(input) {
    const inputCurrentValue = input.currentTarget.value;
    textEl.style.fontSize = `${inputCurrentValue}px`;
}

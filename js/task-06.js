const inputEl = document.querySelector('#validation-input');
const amountOfInputSymbols = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('input', onInput);

function onInput(input) {
    
    if (input.currentTarget.value.length === amountOfInputSymbols) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}


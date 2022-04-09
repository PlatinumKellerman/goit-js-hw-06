const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('input', onInput);

function onInput(input) {
    
    if (input.currentTarget.value.length === 6) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}


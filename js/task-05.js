const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', (onNewNameInput) => { 
    if (onNewNameInput.currentTarget.value !== "") {
        nameOutputEl.textContent = onNewNameInput.currentTarget.value;
    } else {
        nameOutputEl.textContent = "Anonymous";
    }
});

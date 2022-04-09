const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', (event) => { 
    if (event.currentTarget.value !== "") {
        nameOutputEl.textContent = event.currentTarget.value;
    } else {
        nameOutputEl.textContent = "Anonymous";
    }
});

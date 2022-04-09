const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', onShowAlertMessage);

function onShowAlertMessage(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email === "" || password === "") {
        alert("Error! Please fill all fields!");
    } else {
        const inputElementsData = { formElements: { email, password } };
        console.log(inputElementsData);
        event.currentTarget.reset();
    }
};
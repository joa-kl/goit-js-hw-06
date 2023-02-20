const loginForm = document.querySelector(".login-form");
console.log(loginForm);


loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert('Please fill in all the fields!');
        console.log('Please fill in all the fields!');
    }

    console.log(`{email: "${email.value}", password: "${password.value}"}`);
    event.currentTarget.reset();
});
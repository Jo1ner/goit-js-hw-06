const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    if (email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені");
    }
    else {
        const data = {
        email: email.value,
        password: password.value,
    }
    console.dir(data);
    formEl.reset();
    }
}

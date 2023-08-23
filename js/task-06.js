const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const length = input.dataset.length;
    const inputValue = input.value;
    if (inputValue.trim().length === Number(length)) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
};

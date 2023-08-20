const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const length = input.dataset.length;
    const inputValue = input.value;
    if (inputValue.length === Number(length)) {
        input.classList.add('valid')
    }
    else { input.classList.add('invalid') }
};

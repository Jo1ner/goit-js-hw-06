const value = document.querySelector('#value');
let counterValue = 0;


const decrementValue = document.querySelector('[data-action="decrement"]');
const incrementValue = document.querySelector('[data-action="increment"]');

decrementValue.addEventListener("click", plusOne);
function plusOne() {
    counterValue -= 1;
    value.textContent = counterValue;
};

incrementValue.addEventListener("click", minusOne);
function minusOne() {
    counterValue += 1;
    value.textContent = counterValue;
};

const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', updateFontSize);

function updateFontSize() {
    span.style.fontSize = input.value +'px';
}
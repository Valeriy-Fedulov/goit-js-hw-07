const rangeRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

rangeRef.value = parseInt(window.getComputedStyle(spanRef, null).fontSize);
rangeRef.max = rangeRef.value * 2;

rangeRef.addEventListener('input', () => {
    spanRef.style.fontSize = `${rangeRef.value}px`;
});
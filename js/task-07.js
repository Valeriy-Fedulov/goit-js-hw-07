// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const rangeRef = document.querySelector('#font-size-control');
console.log(rangeRef);

const spanRef = document.querySelector('#text');

rangeRef.step = parseInt(window.getComputedStyle(spanRef, null).fontSize) / 50;


rangeRef.addEventListener('input', () => {
    
    spanRef.style.fontSize = `${parseInt(window.getComputedStyle(spanRef, null).fontSize) + parseInt(rangeRef.value) - 50}px`;
    console.log(spanRef.style.fontSize);
})

// rangeRef.addEventListener('input', () => {
//     spanRef.style.fontSize = `${rangeRef.value}px`;
// })
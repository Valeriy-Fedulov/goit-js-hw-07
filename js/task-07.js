// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const rangeRef = document.querySelector('#font-size-control');
console.log(rangeRef);

const spanRef = document.querySelector('#text');
console.log(spanRef);


rangeRef.addEventListener('mousemove', () => {
    console.log(rangeRef.value);
    spanRef.style.fontSize = `${rangeRef.value}px`;
})


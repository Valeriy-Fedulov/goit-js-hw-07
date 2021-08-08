const inputNum = document.querySelector('#controls').firstElementChild;

const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');

function createBoxes(amount) {
    destroyBoxes();

    const arrayBoxs = [];
    for (let i = 0; i <= amount - 1; i += 1) {
        arrayBoxs.push(document.createElement('div'));
        arrayBoxs[i].style.backgroundColor = `RGB(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
        arrayBoxs[i].style.height = `${30 + 10 * i}px`;
        arrayBoxs[i].style.width = `${30 + 10 * i}px`;
    };
    inputNum.value = '';

    return document.querySelector('#boxes').append(...arrayBoxs);
};

function destroyBoxes() {
    const divBoxes = document.querySelector('#boxes');
    while (divBoxes.firstChild) { divBoxes.removeChild(divBoxes.firstChild); }
};

btnRender.addEventListener('click', () => createBoxes(inputNum.value));
btnDestroy.addEventListener('click', destroyBoxes);
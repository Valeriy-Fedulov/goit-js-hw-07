let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const spanRef = document.querySelector('#value');

function decrement() {
    counterValue -= 1;
    spanRef.textContent = counterValue;
}

function increment() {
   counterValue += 1;
   spanRef.textContent = counterValue;
 }

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment); 
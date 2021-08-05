// Счетчик состоит из спана и кнопок, которые должны увеличивать и
// уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
 
let counterValue = 0;


// increment(count) {

// };

// decrement(count) {

// };

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector('#value');

console.log(spanEl);
console.log(btnDecrement);
// console.log(btnDecrement[1].dataset.action);
const decrement = () => {
    
   counterValue -= 1;
       spanEl.textContent = counterValue;
    console.log(`count: `, counterValue);
}

const increment = () => {
    
   counterValue += 1;
       spanEl.textContent = counterValue;
    console.log(`count: `, counterValue);
}

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment); 
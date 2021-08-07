const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    inputEl.classList.toggle('valid', inputEl.value.length >= inputEl.dataset.length);
    inputEl.classList.toggle('invalid', inputEl.value.length < inputEl.dataset.length);
});

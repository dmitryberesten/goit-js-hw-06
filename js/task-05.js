// Пошук елементів
const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// Додавання слухача події до інпута
textInput.addEventListener('input', event => {

    // Присвоюємо поточне значення інпута в span
    output.textContent = event.target.value;

    // Якщо інпут не заповнений то показати 'Anonymous'
    if (event.target.value === '') {
        output.textContent = 'Anonymous';
    }
})

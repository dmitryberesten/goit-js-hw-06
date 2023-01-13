// Ініціалізація лічильника
let counterValue = 0;

// Пошук елементів
let counter = document.querySelector('#value');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

// Додавання слухача до кнопки
minusBtn.addEventListener('click', () => {
    counterValue -= 1; // зменшуємо лічильник на 1
    counter.textContent = counterValue; // поточне значення лічильника
});

// Додавання слухача до кнопки
plusBtn.addEventListener('click', () => {
    counterValue += 1; // збільшуємо лічильник на 1
    counter.textContent = counterValue; // поточне значення лічильника
});



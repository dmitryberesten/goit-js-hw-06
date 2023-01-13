// Пошук поля введення
const validationInput = document.querySelector('#validation-input');

// Додаємо слухача подій
validationInput.addEventListener('blur', event => {

    // Перевірка на число 6
    if (event.target.value.length == validationInput.getAttribute('data-length')) {

        // Додавання класу valid для валідного значення
        validationInput.classList.add('valid')

        // Перевірка, чи не валідне значення
        if (validationInput.classList.contains('invalid')) {
            validationInput.classList.remove('invalid')
        }
    } else {
        // Перевірка, чи валідне значення
        if (validationInput.classList.contains('valid')) {
            validationInput.classList.remove('valid')
        }
        // Додавання класу "не валідний"
        validationInput.classList.add('invalid')
    }
})
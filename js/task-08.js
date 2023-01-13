// Пошук формми
const form = document.querySelector(".login-form");

// Додавання слухача події
form.addEventListener("submit", handleSubmit);

// Функція відправки форми
function handleSubmit(event) {
  event.preventDefault(); // відміна відправки форми

  // Для доступу до елементів форми використовуєтсья властивість elements
  const {
    elements: { email, password },
  } = event.currentTarget;

  // Перевірка, чи заповненні всі поля
  if (email.value === "" || password.value === "") {
    return alert("Заповни всі поля!");
  }

  // Об'єкт інформації про користувача
  const userInfo = {
    email: email.value,
    password: password.value,
  };

  // Виведення об'єкту із введеними даними в консоль
  console.log(userInfo);

  // Очищення значення полів форми методом reset
  event.currentTarget.reset();
}

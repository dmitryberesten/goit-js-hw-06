// Пошук елементів
const inputNumber = document.querySelector("#controls>input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

// Функція для отримання рандомного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Функція для створення div
const createBoxes = (amount) => {
  const arrayElements = []; //масив для збереження елементів div

  // Цикл для перебору кожного значення яке встановлюється amount
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");

    // Стилізація через JS
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();

    // Додавання до масиву з div
    arrayElements.push(div);
  }

  // Повернути масив зі створеними елементами div
  return arrayElements;
};

// Функція, яка видаляє всі створені елементи
const destroyBoxes = () => {
  boxes.innerHTML = ""; // очищення вмісту через пусту строку ''
};

// Додавання слухача подій
createButton.addEventListener("click", () => {

  // Виклик функції та записування значення в змінну
  let elementsToAdd = createBoxes(inputNumber.value);
  boxes.append(...elementsToAdd); // Додавання в кінець елементу boxes
});

// Додавання слухача подій
destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

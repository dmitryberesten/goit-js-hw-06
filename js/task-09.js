function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Пошук елементів
const body = document.querySelector("body");
const changeColorBtn = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

// Додаємо слухача подій
changeColorBtn.addEventListener("click", (element) => {
  
  // Рандомний колір кожен раз
  let color = getRandomHexColor();

  // Фарбуємо бекграунд в рандомний колір
  body.style.backgroundColor = color;

  // Висвітлюємо назву кольору в елемент span
  spanColor.textContent = color;
});

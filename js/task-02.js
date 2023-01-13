const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Пошук списку
const list = document.querySelector("#ingredients");

// Створення пустого масиву для додавання елемнтів списку
const listItemsArray = [];

// Перебір кожного елементу через forEach
ingredients.forEach((ingredient) => {
  
  // Створення елементу списку в розмітці
  const listItem = document.createElement("li");

  // Додавання текстового контенту до кожного елементу
  listItem.textContent = ingredient;

  // Додавання класу до кожного елементу
  listItem.classList.add("item");

  // Додавання елемента в масив
  listItemsArray.push(listItem);
});

// Додавання масиву з елементами в середину списка
list.append(...listItemsArray);
 
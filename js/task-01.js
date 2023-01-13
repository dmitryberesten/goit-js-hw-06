// Пошук елементів
let categories = document.querySelectorAll('.item');

// Виведення кількості категорій в консоль через .length
console.log(`Number of categories: ${categories.length} `);

// Перебирання кожного елемента/дитини з .item
categories.forEach(item => {
    // Виведення тексту із кожного заголовку
    console.log(`Category: ${item.firstElementChild.textContent}`);

    // Виведення кількості елементів
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})


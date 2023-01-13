// Пошук елементів
const sizeControl = document.querySelector('input#font-size-control')
const mainText = document.querySelector('span#text')

// Додавання слухача подій
sizeControl.addEventListener('change', e => {
    mainText.style.fontSize = `${e.target.value}px` // зміна розміру тексту
})
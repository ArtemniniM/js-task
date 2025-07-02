// Найдите на странице элемент <h1> и замените его на новый заголовок <h2> с текстом «Новый
// заголовок».

const h1 = document.querySelector("h1");
const h2 = document.createElement("h2");
h2.textContent = "«Новый заголовок»";
h1.parentNode.replaceChild(h2, h1);

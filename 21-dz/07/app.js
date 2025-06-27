// Скачать 2 любые картинки из интернета. На странице отображается одна картинка.
// При нажатии на кнопку стоящую рядом она заменяется на другую.
// Подсказка: узел.src = './../../../...'

const btn = document.querySelector("button");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  img.src = "./discover-8.jpg";
});

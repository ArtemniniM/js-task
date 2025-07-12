// Создайте несколько элементов (например, кнопок) на странице. При клике на
// элемент, используйте event.target для определения на какой из элементов
// производилось действие и измените цвет

const div = document.querySelector(".container");

div.addEventListener("click", (event) => {
  event.target.style = "background-color:red";
});

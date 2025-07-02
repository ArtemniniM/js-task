// Есть контейнер в виде карточки товара с кнопкой "Удалить" — по клику убирайте её со
// страницы.

const btn = document.querySelector("button");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  container.style.display = "none";
});

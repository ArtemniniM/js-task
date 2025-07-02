// У элемента есть кнопка "Подробнее" — по клику добавляйте абзац с описанием.

const btn = document.querySelector("button");
const div = document.querySelector(".description");
div.style.display = "none";

btn.addEventListener("click", () => {
  div.style.display = "block";
});

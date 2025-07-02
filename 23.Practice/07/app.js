// Добавляйте задачи в список <ul> из input, по нажатию на кнопку.

const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const inp = document.querySelector("input");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = inp.value;
  ul.appendChild(li);
});

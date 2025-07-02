// Дополните 7 задачу кнопкой "Очистить всё", которая удаляет все <li> из списка

const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const inp = document.querySelector("input");
const clean = document.querySelector(".clean");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = inp.value;
  ul.appendChild(li);
});
clean.addEventListener("click", () => {
  ul.textContent = "";
});

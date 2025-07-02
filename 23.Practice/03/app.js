// . Пользователь вводит текст в input и нажимает кнопку — добавляйте этот комментарий в
// список ul расположенный ниже.

const btn = document.querySelector("button");
const inp = document.querySelector("input");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = inp.value;
  ul.appendChild(li);
});

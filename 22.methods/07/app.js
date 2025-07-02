// На странице есть список <ul>, поле ввода <input> и кнопка <button>. Создайте
// функциональность, при которой по нажатию на кнопку текст из поля ввода будет добавляться
// в конец списка как новый элемент <li>.

const btn = document.querySelector("button");
const val = document.querySelector("input");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  const text = val.value;
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  }
});

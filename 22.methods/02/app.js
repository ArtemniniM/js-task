// Через JS создайте кнопку <button> с надписью «Нажми меня» и добавьте её внутрь элемента
// div с id="app".

const button = document.createElement("button");
button.textContent = "Нажми меня";
const div = document.querySelector("#app");
div.appendChild(button);

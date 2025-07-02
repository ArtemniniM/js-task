// Через JS создайте элемент <ul> с тремя элементами списка <li> и добавьте его в документ
// HTML.

const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = "hi";
  ul.appendChild(li);
}
document.body.appendChild(ul);

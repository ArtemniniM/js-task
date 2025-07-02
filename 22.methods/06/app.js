// Создайте в HTML элемент <div class="card"> и добавьте внутрь него через JS:
// Заголовок (<h3>) с названием товара. Параграф (<p>) с описанием. Кнопку (<button>) с текстом
// «Купить»

const div = document.querySelector(".card");

const h3 = document.createElement("h3");
h3.textContent = "iphone 16";
const p = document.createElement("p");
p.textContent = "mobile phone";
const btn = document.createElement("button");
btn.textContent = "buy";

div.appendChild(h3);
div.appendChild(p);
div.appendChild(btn);

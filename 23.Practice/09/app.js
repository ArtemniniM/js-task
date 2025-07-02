// У вас есть лента из 2 карточек товара и кнопка "Показать ещё", которая добавляет 3 новых
// поста в ленту.

const btn = document.querySelector("button");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    const addDiv = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "Наименование товара: Смартфон";

    const addImg = document.createElement("div");
    addImg.style = "width: 150px; height: 50px; background-color: #000";
    addDiv.appendChild(addImg);
    addDiv.appendChild(p);
    content.appendChild(addDiv);
  }
});

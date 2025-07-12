const items = [
  { id: 1, category: "Фрукты", name: "Яблоко", description: "Сладкое и сочное яблоко." },
  { id: 2, category: "Фрукты", name: "Банан", description: "Полезный и питательный банан." },
  { id: 3, category: "Овощи", name: "Морковь", description: "Свежая и хрустящая морковь." },
  { id: 4, category: "Овощи", name: "Огурец", description: "Сочный и освежающий огурец." },
  { id: 5, category: "Ягоды", name: "Клубника", description: "Сладкая и ароматная клубника." },
  { id: 6, category: "Ягоды", name: "Черника", description: "Полезная и вкусная черника." },
];
const fr = document.querySelector(".fr");
const veg = document.querySelector(".veg");
const yag = document.querySelector(".yag");
const div = document.querySelector(".container");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".modal .close");

window.addEventListener("click", (event) => {
  if (!event.target.closest(".item")) modal.style.display = "none";
});
btnClose.addEventListener("click", () => (modal.style.display = "none"));

const showResult = (param) => {
  div.innerHTML = "";
  const frRes = items.filter((el) => (el.category === param ? true : false));
  frRes.forEach((el) => {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML += `<h2>${el.category}</h2><p>${el.name}</p>`;
    div.appendChild(item);
    item.addEventListener("click", () => {
      modal.style.display = "block";
      const modalName = document.querySelector(".modal .name");
      modalName.textContent = el.name;
      const modalDesc = document.querySelector(".modal .description");
      modalDesc.textContent = el.description;
      const modalCat = document.querySelector(".modal .category");
      modalCat.textContent = el.category;
    });
  });
};

fr.addEventListener("click", () => showResult("Фрукты"));
veg.addEventListener("click", () => showResult("Овощи"));
yag.addEventListener("click", () => showResult("Ягоды"));

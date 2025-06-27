// Блок (или кнопка), при наведении (mouseover) меняет цвет. При уходе курсора (mouseout) возвращается обратно.

const btn = document.querySelector("button");

btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "red";
});
btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "";
});

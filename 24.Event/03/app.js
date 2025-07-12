// Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
// должен показываться или скрываться.

const p = document.querySelector("p");
const btn1 = document.querySelector("#first");
const btn2 = document.querySelector("#second");

btn1.addEventListener("click", () => {
  p.style = "display:block";
});
btn2.addEventListener("click", () => {
  p.style = "display:none";
});

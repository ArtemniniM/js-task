// По умолчанию размер текста у параграфа 20px. При каждом клике на кнопку стоящую рядом с параграфом текст увеличивается на 2 пикселя.
//  Подсказка: узел.style = 'font-size:' + ... + 'px'

const btn = document.querySelector("button");
const p = document.querySelector("p");
let count = 20;
btn.addEventListener("click", () => {
  count += 2;
  p.style.fontSize = `${count}` + "px";
});

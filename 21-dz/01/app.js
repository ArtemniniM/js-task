// На странице есть кнопка и рядом отображается в параграф количество нажатий на неё.

const btn = document.querySelector("button");
let count = 0;
btn.addEventListener("click", () => {
  const res = document.querySelector("p");
  count++;
  res.textContent = "результат:" + " " + count;
});

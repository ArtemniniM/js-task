// При клике на кнопку текстовый блок появляется или скрывается.

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const p = document.querySelector("p");
  p.style = "display:none";
});

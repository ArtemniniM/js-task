// Есть кнопка — по клику показывайте <div> с тремя абзацами текста.

const btn = document.querySelector("button");

const div = document.querySelector("div");
div.style = "display: none";

btn.addEventListener("click", () => {
  div.style = "display: block";
});

// 8. У вас есть кнопка. После нажатия поменять background.

const click = document.querySelector("button");

click.addEventListener("click", () => {
  click.style = "background-color:red";
});

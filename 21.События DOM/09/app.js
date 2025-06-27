// У вас есть кнопка. После каждого нажатия менять background.

const click = document.querySelector("button");

let flag = false;

click.addEventListener("click", () => {
  click.style = "background-color:red";
  if (flag === false) {
    click.style = "background-color:red";
    flag = true;
  } else {
    click.style = "background-color:blue";
    flag = false;
  }
});

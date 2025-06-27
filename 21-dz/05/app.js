// При нажатии на кнопку у прямоугольного блока меняется цвет фона на случайный из
// const colors = [ "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta" ];.

const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta"];

const btn = document.querySelector("button");
const block = document.querySelector("div");

btn.addEventListener("click", () => {
  const makeQuote = (array) => {
    const index = Math.round(Math.random() * (colors.length - 1));
    return colors[index];
  };
  block.style.backgroundColor = `${makeQuote(colors)}`;
});

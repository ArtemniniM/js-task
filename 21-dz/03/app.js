// Пользователь вводит имя в input, и при нажатии на кнопку имя отображается в параграф.

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  try {
    const input = document.querySelector("input");
    const val = input.value;
    const p = document.querySelector("p");
    if (!isNaN(val)) throw new Error("Ожидается имя, а не число");
    p.textContent = `name: ${val}`;
  } catch (error) {
    console.log(error.message);
  }
});

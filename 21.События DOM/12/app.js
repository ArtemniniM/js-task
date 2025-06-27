// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

const button = document.querySelector("button");
let array = [];
button.addEventListener("click", () => {
  try {
    if (array.length <= 0) throw new Error("error");
    if (array.length > 10) throw new Error("error");

    const input = document.querySelector("input");
    const p = document.querySelector("p");
    array.push(input.value);
    p.textContent = `${array}`;
  } catch (error) {
    console.log(error.message);
  }
});

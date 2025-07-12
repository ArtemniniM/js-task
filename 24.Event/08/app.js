// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом

const input = document.querySelector("input");
const btn = document.querySelector("button");
const p = document.querySelector("p");

const array = [];

btn.addEventListener("click", () => {
  try {
    if (!input.value.trim()) throw new Error("input no valid");
    array.push(input.value);
  } catch (error) {
    alert(error.message);
  }
});

// На входе массив. Необходимо создать функцию проверки на то что в массиве только числа.
// Функция возвращает true, если в массиве только числа и false в противном случае

const arr = ["sdf", 2, 3];

function checkNum() {
  return arr.every((el) => typeof el === "number");
}
console.log(checkNum(arr));

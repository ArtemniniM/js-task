// Создай функцию sumPositive(arr), которая
// фильтрует только положительные числа и возвращает их сумму.

function sumPositive(arr) {
  let sum = 0;

  arr.forEach((num) => {
    if (num > 0) sum += num;
  });

  return sum;
}
console.log(sumPositive([4, -2, 8]));

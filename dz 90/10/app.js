// Проверить, все ли числа в массиве положительные.
//  Использовать: every, условие > 0
//  Примеры:
//  [1, 2, 3] → true
//  [1, -2, 3] → false

const arr = [-1, 2, 3];

let res = arr.every(function (el) {
  return el > 0;
});
console.log(res);

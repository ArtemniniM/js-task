// Умножить каждый элемент массива на 2.
//  Массив: [1, 2, 3]
//  Использовать: map
//  Результат: [2, 4, 6]

const arr = [1, 2, 3];

let res = arr.map(function (el) {
  return el * 2;
});
console.log(res);
s
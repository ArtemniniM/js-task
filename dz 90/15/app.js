// Посчитать количество чётных чисел в массиве.
//  Массив: [1, 2, 4, 5]
//  Использовать: filter, условие % 2 === 0, length
//  Результат: 2

const arr = [1, 2, 4, 5];

const res = arr.filter(function (el) {
  return el % 2 === 0; 
});

console.log(res.length);
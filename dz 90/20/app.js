// Найти среднее арифметическое чисел.
//  Массив: [2, 4, 6, 8]
//  Использовать: reduce, length
//  Результат: 5

const arr = [2, 4, 6, 8];

const res = arr.reduce(function (num, el) {
  return (num += el / arr.length);
}, 0);
console.log(res);

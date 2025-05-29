// Посчитать количество отрицательных чисел.
//  Массив: [3, -2, -5, 7]
//  Использовать: filter, условие < 0, length
//  Результат: 2

const arr = [3, -2, -5, 7];

const res = arr.filter(function (el) {
  return el < 0;
});
console.log(res.length);

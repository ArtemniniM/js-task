// Посчитать произведение всех нечётных чисел.
//  Массив: [1, 3, 4, 5]
//  Использовать: filter (нечётные), reduce (умножение)
//  Результат: 15

const arr = [1, 3, 4, 5];

const nech = arr.filter(function (el) {
  return el % 2 !== 0;
});
const res = nech.reduce(function (pr, elem) {
  return (pr *= elem);
}, 1);
console.log(res);

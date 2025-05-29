// Удвоить каждый элемент массива и сложить результат.
//  Массив: [1, 2, 3]
//  Использовать: map (умножение на 2), reduce (сумма)
//  Результат: 12

const arr = [1, 2, 3];

const res1 = arr.map(function (el) {
  return el * 2;
});

const res2 = res1.reduce(function (sum, el) {
  return (sum += el);
}, 0);
console.log(res2);

// Проверить, есть ли в массиве хотя бы одно кратное 7.
//  Массив: [3, 14, 9, 5]
//  Использовать: some, условие % 7 === 0
//  Результат: true

const arr = [3, 14, 9, 5];

const res = arr.some(function (el) {
  return el % 7 === 0;
});
console.log(res);

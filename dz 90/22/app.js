// Удалить все нули из массива.
//  Массив: [1, 0, 2, 0, 3]
//  Использовать: filter, условие !== 0
//  Результат: [1, 2, 3]

const arr = [1, 0, 2, 0, 3];

const res = arr.filter(function test(el) {
  return el !== 0;
});
console.log(res);

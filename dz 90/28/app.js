// Найти количество повторений элемента в массиве.
//  Массив: [1, 2, 1, 3, 1], элемент: 1
//  Использовать: filter, условие === элемент, length
//  Результат: 3

const arr = [1, 2, 1, 3, 1];

const res = arr.filter(function (el) {
  return el === 1;
});
console.log(res.length);

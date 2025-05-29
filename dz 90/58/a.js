// Отсортировать массив по модулю и убрать повторы.
//  Массив: [3, -3, 2, -2, 1]
//  Использовать: map(Math.abs), filter (удаление дубликатов), sort()
//  Результат: [1, 2, 3]

const arr = [3, -3, 2, -2, 1];

const res = arr
  .map((el) => Math.abs(el))
  .filter((el, index) => arr.indexOf(el) === index)
  .sort();
console.log(res);

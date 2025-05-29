// Посчитать, сколько слов длиннее 3 символов.
//  Массив: ["hi", "hello", "ok", "world"]
//  Использовать: filter (length > 3), length
//  Результат: 2

const arr = ["hi", "hello", "ok", "world"];

const result = arr.filter(function (el) {
  return el.length > 3;
});
console.log(result);

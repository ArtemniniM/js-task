// Отсортировать массив строк по длине.
//  Массив: ["a", "abc", "ab"]
//  Использовать: sort((a, b) => a.length - b.length)
//  Результат: ["a", "ab", "abc"]

const arr = ["a", "abc", "ab"];

const res = arr.sort((a, b) => a.length - b.length);
console.log(res);

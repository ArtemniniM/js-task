// Найти длину самой длинной строки в массиве.
//  Массив: ["hi", "hello", "hey"]
//  Использовать: reduce, length
//  Результат: 5

const str = ["hi", "hello", "hey"];

const res = str.reduce((max, el) => el.length > max.length ? el : max, "");

console.log(res.length);

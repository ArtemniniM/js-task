// Проверить, все ли элементы массива — строки.
//  Массив: ["a", "b", "c"]
//  Использовать: every, typeof
//  Результат: true

const str = ["a", "b", "c"];

const res = str.every((el) => typeof el === "string");
console.log(res);

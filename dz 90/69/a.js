// Удалить все гласные из строки.
//  Строка: "hello world"
//  Использовать: replaceAll с RegExp /[aeiou]/gi
//  Результат: "hll wrld"

const str = "hello world";

const res = str.replaceAll(/[aeiou]/gi, "");
console.log(res);

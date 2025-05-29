// Посчитать количество слов, длина которых больше 4 символов.
//  Строка: "Hello world this is JavaScript"
//  Использовать: split(" "), filter, length
//  Результат: 2

const str = "Hello world this is JavaScript";
const spl = str.split(" ");

const prom = spl.filter((el) => el.length > 4);
console.log(prom.length);

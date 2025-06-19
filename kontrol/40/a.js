// Убрать все пробелы из строки и посчитать её длину.
//  Строка: "a b c"
//  Использовать: replaceAll
//  Результат: 3

const str = "a b c";

const rep = str.replaceAll(" ", "");
console.log(rep.length);

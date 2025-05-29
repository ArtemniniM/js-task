// Преобразовать строку: все буквы в верхний регистр, пробелы заменить на "".
//  Строка: "hello world"
//  Использовать: toUpperCase(), replaceAll(" ", "")
//  Результат: "HELLO_WORLD"

const str = "hello world".toUpperCase();

console.log(str.replaceAll(" ", "_"));

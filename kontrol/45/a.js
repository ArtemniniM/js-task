// Сформировать строку из первых букв каждого слова.
//  Строка: "Java Script Language"
//  Использовать: split(" "), map (взять первый символ), join("")
//  Результат: "JSL"

const str = "Java Script Language";
const spl = str.split(" ").map((el) => el[0]);

console.log(spl.join(""));

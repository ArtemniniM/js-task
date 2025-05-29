// Разбить строку на слова и составить строку из первых букв.
//  Строка: "Hello big world"
//  Использовать: split(" "), map, взять первый символ, join
//  Результат: "Hbw"

const str = "Hello big world";
const spl = str.split(" ");

const res = spl.map((el) => el[0]).join("");
console.log(res);

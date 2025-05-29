// Сформировать массив из первых символов каждого слова.
//  Строка: "Hello World"
//  Использовать: split(" "), map
//  Результат: ["H", "W"]

const str = "Hello World";
const spl = str.split(" ");

const res = spl.map((el) => el[0]);
console.log(res);

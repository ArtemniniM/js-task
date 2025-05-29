// Перевернуть каждое слово в строке.
//  Строка: "abc def"
//  Использовать: split(" "), map (split('').reverse().join('')), join(" ")
//  Результат: "cba fed"

const str = "abc def";
const spl = str.split(" ");

const res = spl.map((el) => el.split("").reverse().join(""));
console.log(res);

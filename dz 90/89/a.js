// Преобразовать число в массив его цифр.
//  Число: 1234
//  Использовать: String(), split(""), map(Number)
//  Результат: [1, 2, 3, 4]

const num = 1234;

const str = num.toString();
const spl = str.split("");
const res = spl.map((el) => +el);
console.log(res);

// Найти сумму цифр числа.
//  Число: 1234
//  Использовать: toString(), split(""), map(Number), reduce (суммирование)
//  Результат: 10

let num = 1234;

let spl = num.toString().split("").map(Number);
const preo = spl.reduce((sum, elem) => sum + elem, 0);
console.log(preo);

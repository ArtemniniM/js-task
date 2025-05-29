// Преобразовать строку в массив чисел.
//  Строка: "1,2,3"
//  Использовать: split(","), map(Number)
//  Результат: [1, 2, 3]

const str = "1,2,3";
const spl = str.split(",");

const res = spl.map((el) => Number(el));
console.log(res);

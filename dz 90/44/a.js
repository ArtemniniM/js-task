// Из строки чисел через запятую получить максимальное число.
//  Строка: "5,10,15"
//  Использовать: split(","), map(Number), Math.max(...массив)

const str = "5,10,15";
const spl = str.split(",").map(Number);

const max = Math.max(...spl);

console.log(max);

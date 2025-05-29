// Посчитать количество слов с длиной больше 3.
//  Строка: "do you know JavaScript"
//  Использовать: split(" "), filter (word.length > 3), length
//  Результат: 2


const str = "do you know JavaScript";

const spl = str.split(' ');

const res = spl.filter(word=>word.length>3)
console.log(res.length);

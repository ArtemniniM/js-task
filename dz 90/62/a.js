// Создать массив с длиной каждого слова строки.
//  Строка: "hello world"
//  Использовать: split(" "), map (word.length)
//  Результат: [5, 5]

const str = "hello world";
const spl = str.split(" ");


const res = spl.map((el) => el.length);
console.log(res);

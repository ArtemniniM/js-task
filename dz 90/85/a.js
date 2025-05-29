// Преобразовать строку в массив символов без повторов.
//  Строка: "hello"
//  Использовать: цикл for, includes, push
//  Результат: ["h", "e", "l", "o"]

const str = "hello";
const spl = str.split("");
const arr = [];

for (let i = 0; i < spl.length; i++) {
  if (!arr.includes(spl[i])) arr.push(spl[i]);
}
console.log(arr);

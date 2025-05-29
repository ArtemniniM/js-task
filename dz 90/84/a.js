// Проверить, есть ли в строке буква "a".
// Строка: "hello world"
// Использовать: цикл for of

const str = "hallo world";
// console.log(str.includes('a'));
let res = false;
for (const i of str) {
  if (i === "a") {
    res = true;
    break;
  }
}
console.log(res);

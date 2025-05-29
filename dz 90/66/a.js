//  Убрать дубликаты из строки, оставив порядок символов.
//  Строка: "banana"
//  Использовать: цикл for, includes, новый массив
//  Результат: "ban"

const str = "banana";
const spl = str.split("");
const newarr = [];

for (let i = 0; i < spl.length; i++) {
  if (!newarr.includes(spl[i])) {
    newarr.push(spl[i]);
  }
}
console.log(newarr.join(""));

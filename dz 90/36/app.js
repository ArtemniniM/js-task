// Разделить строку на слова и сохранить только уникальные.
//  Строка: "a b a c b"
//  Использовать: split(" "), цикл for, includes, push в новый массив
//  Результат: ["a", "b", "c"]

const str = "a b a c b";
const newarr = [];
const spl = str.split(" ");

for (let i = 0; i < spl.length; i++) {
  if (!newarr.includes(spl[i])) {
    newarr.push(spl[i]);
  }
}
console.log(newarr);

// Дан массив слов. Найдите и выведите те, у которых длина > 5 и которые
//  содержат только строчные буквы (в маленьком регистре).
// ["banana", "Tree", "element", "cloUd", "f"] -> ["banana",  "element"]

const arr = ["banana", "Tree", "element", "cloUd", "f"];
const newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 5 && arr[i].toLowerCase()) {
    newarr.push(arr[i]);
  }
}
console.log(newarr);

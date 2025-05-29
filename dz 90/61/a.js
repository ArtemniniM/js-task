// Объединить два массива в один без дубликатов.
// Массивы: [1, 2], [2, 3]
// Использовать: цикл while, includes, push
// Результат: [1, 2, 3]

const arr1 = [1, 2];
const arr2 = [2, 3];
const newarr = [...arr1];
let i = 0;
while (i < arr1.length && i < arr2.length) {
  if (!newarr.includes(arr2[i])) {
    newarr.push(arr2[i]);
  }
  i++;
}
console.log(newarr);

// Удалить дубликаты из массива вручную.
//  Массив: [1, 2, 1, 3, 2]
//  Использовать: цикл for, includes, push в новый массив
//  Результат: [1, 2, 3]

const arr = [1, 2, 1, 3, 2];
const newarr = [];

for (let i = 0; i < arr.length; i++) {
  if (!newarr.includes(arr[i])) {
    newarr.push(arr[i]);
  }
}

console.log(newarr);

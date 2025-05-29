// Перевернуть массив вручную.
//  Массив: [1, 2, 3]
//  Использовать: цикл for (обратный)
//  Результат: [3, 2, 1]

const arr = [1, 2, 3];
let newarr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  newarr.push(arr[i]);
}
console.log(newarr);

// Посчитать количество уникальных чисел в массиве.
//  Массив: [1, 2, 2, 3, 1]
//  Использовать: цикл for, includes, push в новый массив
//  Результат: 3

const arr = [1, 2, 2, 3, 1];
const newarr = [];

for (let i = 0; i < arr.length; i++) {
  !newarr.includes(arr[i]) ? newarr.push(arr[i]) : null;
}
console.log(newarr.length);

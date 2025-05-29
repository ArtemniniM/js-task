// Создать новый массив с квадратами всех чисел.
//  Массив: [2, 3, 4]
//  Использовать: map, Math.pow или **2
//  Результат: [4, 9, 16]

const arr = [2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   console.log(Math.pow(arr[i], 2));
// }

const res = arr.map(function (el) {
  return el ** 2;
});
console.log(res);

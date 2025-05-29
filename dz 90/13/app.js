// Вывести каждый элемент массива.
//  Массив: [10, 20, 30]
//  Использовать: цикл for или forEach
//  Результат: 10 20 30

const arr = [10, 20, 30];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

arr.forEach(function (el) {
  console.log(el);
});

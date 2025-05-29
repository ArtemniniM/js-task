// Найдите произведение элементов массива [2, 3, 4, 5].
// Методы: Используйте циклы for, while, for...of.
// Входные: [2, 3, 4, 5] → Результат: 120

const arr = [2, 3, 4, 5];

// let pr=1;
// for (let i = 0; i < arr.length; i++) {
// pr*=arr[i]
// }console.log(pr);

// let i = 0;
// let pr = 1;
// while (i < arr.length) {
//   pr *= arr[i];
//   i++;
// }
// console.log(pr);

let pr = 1;

for (let num of arr) {
  pr *= num;
}
console.log(pr);

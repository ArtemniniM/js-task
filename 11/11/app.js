// Выведите каждый элемент массива [1, 2, 2, 3, 4, 4, 3, 4, 5] без повторений.
// Методы: Используйте циклы for, for...of.
// Входные: [1, 2, 2, 3, 4, 4, 3, 4, 5] → Результат: [1, 2, 3, 4, 5]

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
const newarr = [];

// for (let i = 0; i < arr.length; i++) {
//    if(!newarr.includes(arr[i])){
//     newarr.push(arr[i])
//    }
// }console.log(newarr);

for (let num of arr) {
  if (!newarr.includes(num)) {
    newarr.push(num);
  }
}
console.log(newarr);

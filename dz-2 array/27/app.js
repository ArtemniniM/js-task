// Получить массив, содержащий индексы чётных чисел.
// [10, 15, 20, 25, 30] — [0, 2, 4]

const arr = [10, 15, 20, 25, 30];
const newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    newarr.push(i);
  }
}
console.log(newarr);

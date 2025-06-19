// Реализуйте поиск максимального числа статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 4
// Входные: [10, 5, 8] → Результат: 10

const arr = [10, 5, 8];
let max = 0;
let i = 0;

function maxNum() {
  if (i >= arr.length) return;
  if (arr[i] > max) max = arr[i];
  i++;
  maxNum();
}
maxNum();
console.log(max);

// На входе массив array. Посчитайте количество элементов массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 4
// Входные: [10, 20, 30] → Результат: 3

const array = [1, 2, 3, 4, 5];
let count = 0;

function doRes() {
  if (array.length == count) return;
  count++;
  doRes();
}
doRes();
console.log(count);

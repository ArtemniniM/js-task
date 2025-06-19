// Вычислите сумму массива чисел статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 10
// Входные: [10, 20, 30] → Результат: 60

const arr = [1, 2, 3, 4];
sum = 0;
let i = 0;

function doRes() {
  if (i >= arr.length) return;
  sum += arr[i];
  i++;
  doRes();
}
doRes();
console.log(sum);

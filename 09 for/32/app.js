// Дан массив. Найди индекс первого отрицательного числа. Если его нет — выведи -1.
// [4, 3, -2, 7] → 2
// [1, 2, 3] → -1

const arr = [4, 3, 9, 7, -3];
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    console.log(i);
    found = true;
    break;
  }
}
if (!found) {
  console.log(-1);
}

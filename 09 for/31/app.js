// Дан массив чисел. Выведи на экран только нечётные числа.
// [2, 3, 4, 5, 6] → 3, 5

const arr = [2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i]) && arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}
